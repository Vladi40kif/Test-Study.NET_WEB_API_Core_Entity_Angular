using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ArticleCategorys
    {
        [Key]
        public int ArticleCategoryID { get; set; }
        public string Title { get; set; }

    }
}
