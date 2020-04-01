using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class AuthContext : IdentityDbContext
    {
        public AuthContext(DbContextOptions options ): base(options) { }
        public DbSet<AppUser> AppUser { get; set; }
        public DbSet<Articles> Articles { get; set; }
        public DbSet<ArticleCategorys> ArticleCategorys { get; set; }
        public DbSet<ArticleArticleCategorys> ArticleArticleCategorys { get; set; }
    
        

    }
}
