using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Data.Models
{
    public class User
    {
        public User()
        {
            this.BoughtProducts = new HashSet<Product>();
            this.Ratings = new HashSet<Rating>();
        }

        public int Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Phone { get; set; }

        public ICollection<Product> BoughtProducts { get; set; }

        public ICollection<Rating> Ratings { get; set; }
    }
}
