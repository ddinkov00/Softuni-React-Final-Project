﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Data.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string ImageUrl { get; set; }

        public string Token { get; set; }

        public string Phone { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }
    }
}
