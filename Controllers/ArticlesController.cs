using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication.Models;


namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ArticlesController : ControllerBase
    {
        private readonly AuthContext _context;

        public ArticlesController(AuthContext context)
        {
            _context = context;
        }

        // GET: api/Articles
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Articles>>> GetArticles()
        {
            return await _context.Articles.ToListAsync();
        }

        [HttpGet("{_category}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Articles>>> GetArticles(string _category)
        {
            // GET: api/Articles/Publications
            var category = await _context.ArticleCategorys.FirstOrDefaultAsync(x => x.Title == _category);
            
            if(category is null)
                return BadRequest("no data");

            var articles = await _context.ArticleArticleCategorys.Where(x => x.ArticleCategory == category).Select(x => x.Article).ToListAsync();
            
            if (articles is null)
                return BadRequest("no data");

            return Ok(articles);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticles(int id, Articles articles)
        {
            if (id != articles.ArticleID)
            {
                return BadRequest();
            }

            _context.Entry(articles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticlesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Articles
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Articles>> PostArticles(Articles articles)
        {
            _context.Articles.Add(articles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticles", new { id = articles.ArticleID }, articles);
        }

        // DELETE: api/Articles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Articles>> DeleteArticles(int id)
        {
            var articles = await _context.Articles.FindAsync(id);
            if (articles == null)
            {
                return NotFound();
            }

            _context.Articles.Remove(articles);
            await _context.SaveChangesAsync();

            return articles;
        }

        private bool ArticlesExists(int id)
        {
            return _context.Articles.Any(e => e.ArticleID == id);
        }
    }
}
