using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ArticleArticleCategorys
    {
        [Key]
        public int ID { get; set; }
        public Articles Article { get; set; }
        public ArticleCategorys ArticleCategory { get; set; }
    }
}
