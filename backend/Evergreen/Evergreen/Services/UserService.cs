using Evergreen.Data;
using Evergreen.Data.Models;
using Evergreen.Model;
using Evergreen.Services.Conracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services
{
    public class UserService : IUserService
    {
        private readonly EvergreenContext context;

        public UserService(EvergreenContext context)
        {
            this.context = context;
        }

        public async Task<LoginModel> LoginAsync(string email, string password)
        {
            var user = await this.context.Users
                .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);

            if (user == null)
            {
                throw new Exception("Invalid email or password!");
            }

            return new  LoginModel
            {
                RoleId = user.RoleId,
                Token = user.Token, 
            };
        }

        public async Task<bool> RegisterAsync(string email, string password)
        {
            if (await this.context.Users.AnyAsync(u => u.Email == email))
            {
                return false;
            }

            var username = email
                        .Split("@", StringSplitOptions.RemoveEmptyEntries)
                        .ElementAt(0);

            await this.context.Users
                .AddAsync(new User
                {
                    Username = username,
                    Email = email,
                    Password = password,
                    Token = this.GenerateToken(),
                    RoleId = 2,
                });
            await this.context.SaveChangesAsync();

            return true;
        }

        private string GenerateToken()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[8];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            return new String(stringChars);
        }
    }
}
