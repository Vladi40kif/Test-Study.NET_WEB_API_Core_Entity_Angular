using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ProfileModel
    {
        public string   username    {   get; set; }
        public string   fullName    { get; set; }
        public string   email       { get; set; }
        public bool     emailConfirm{ get; set; }
        public string   phone       { get; set; }
        public bool     phoneConfirm{ get; set; }
        public bool     twoFaktor   { get; set; }

    }
}
