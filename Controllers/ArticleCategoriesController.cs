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
    public class ArticleCategoriesController : ControllerBase
    {
        private readonly AuthContext _context;

        public ArticleCategoriesController(AuthContext context)
        {
            _context = context;
        }

        // GET: api/ArticleCategories
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ArticleCategorys>>> GetArticleCategory()
        {
            return await _context.ArticleCategorys.ToListAsync();
        }

        // GET: api/ArticleCategories/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ArticleCategorys>> GetArticleCategory(int id)
        {
            var articleCategory = await _context.ArticleCategorys.FindAsync(id);

            if (articleCategory == null)
            {
                return NotFound();
            }

            return articleCategory;
        }

        // PUT: api/ArticleCategories/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticleCategory(int id, ArticleCategorys articleCategory)
        {
            if (id != articleCategory.ArticleCategoryID)
            {
                return BadRequest();
            }

            _context.Entry(articleCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleCategoryExists(id))
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

        // POST: api/ArticleCategories
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ArticleCategorys>> PostArticleCategory(ArticleCategorys articleCategory)
        {
            _context.ArticleCategorys.Add(articleCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticleCategory", new { id = articleCategory.ArticleCategoryID }, articleCategory);
        }

        // DELETE: api/ArticleCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ArticleCategorys>> DeleteArticleCategory(int id)
        {
            var articleCategory = await _context.ArticleCategorys.FindAsync(id);
            if (articleCategory == null)
            {
                return NotFound();
            }

            _context.ArticleCategorys.Remove(articleCategory);
            await _context.SaveChangesAsync();

            return articleCategory;
        }

        private bool ArticleCategoryExists(int id)
        {
            return _context.ArticleCategorys.Any(e => e.ArticleCategoryID == id);
        }
    }
}
