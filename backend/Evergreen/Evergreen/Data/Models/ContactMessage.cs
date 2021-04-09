using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Data.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }
    }
}
