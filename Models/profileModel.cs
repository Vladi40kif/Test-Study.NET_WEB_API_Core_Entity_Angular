using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ProfileModel
    {
        public string   Username    { get; set; }
        public string   FullName    { get; set; }
        public string   Email       { get; set; }
        public bool     EmailConfirm{ get; set; }
        public string   Phone       { get; set; }
        public bool     PhoneConfirm{ get; set; }
        public bool     TwoFaktor   { get; set; }

    }
}
