using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Data.Models
{
    public class Product
    {
        public Product()
        {
            this.images = new HashSet<Image>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Desciption { get; set; }

        public decimal OriginalPrice { get; set; }

        public decimal? DiscountedPrice { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public int SellerId { get; set; }

        public User Seller { get; set; }

        public ICollection<Image> images { get; set; }
    }
}
