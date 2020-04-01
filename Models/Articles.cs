using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Articles
    {
        [Key]
        public int ArticleID { get; set; }
        public string Title { get; set; }
        public string Context { get; set; }

    }
}
