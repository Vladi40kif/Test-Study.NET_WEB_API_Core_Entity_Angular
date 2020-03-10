using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
//using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<AppUser> _userManager;
        public UserProfileController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        //GET : /api/UserProfile
        public async Task<Object> GetUserProfile() {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new ProfileModel
            {
                username    = user.UserName,
                fullName    = user.FullName,
                email       = user.Email,
                emailConfirm= user.EmailConfirmed,
                phone       = user.PhoneNumber,
                phoneConfirm= user.PhoneNumberConfirmed,
                twoFaktor   = user.TwoFactorEnabled
            };
        }


        [HttpPost]
        [Authorize]
        //Post : /api/UserProfile
        public async Task<IActionResult> SetUserProfile(ProfileModel model)
            {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            
            if (user == null)
                return BadRequest("Cant find user ID!");

            user.UserName= model.username;
            user.FullName = model.fullName;
            user.Email = model.email;
            user.EmailConfirmed = model.emailConfirm;
            user.PhoneNumber = model.phone;
            user.PhoneNumberConfirmed = model.phoneConfirm;
            user.TwoFactorEnabled = model.twoFaktor;

            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
                return Ok(new ProfileModel
                {
                    username = user.UserName,
                    fullName = user.FullName,
                    email = user.Email,
                    emailConfirm = user.EmailConfirmed,
                    phone = user.PhoneNumber,
                    phoneConfirm = user.PhoneNumberConfirmed,
                    twoFaktor = user.TwoFactorEnabled
                } );

            return BadRequest( new { massage = result.Errors.ToList() } );

        }

    }
}