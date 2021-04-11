using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Model
{
    public class CreateProductInputModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string Price { get; set; }

        public string CategoryId { get; set; }
    }
}
