using Evergreen.Services.Conracts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : Controller
    {
        private readonly IUserService userService;

        public IdentityController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> Login(string email, string password)
        {
            try
            {
                var userData = await this.userService.LoginAsync(email, password);
                return this.Ok(new { userData });
            }
            catch (Exception e)
            {
                return this.ValidationProblem(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Register(string email, string password)
        {
            var isSuccesfull = await this.userService.RegisterAsync(email, password);

            if (!isSuccesfull)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }
    }
}
