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
    public class ProductService : IProductService
    {
        private readonly EvergreenContext context;

        public ProductService(EvergreenContext context)
        {
            this.context = context;
        }

        public async Task<bool> Add(CreateProductInputModel input)
        {
            await this.context.Products
                .AddAsync(new Product
                {
                    Name = input.Name,
                    Desciption = input.Description,
                    ImageUrl = input.ImageUrl,
                    OriginalPrice = decimal.Parse(input.Price),
                    CategoryId = int.Parse(input.CategoryId),
                });

            await this.context.SaveChangesAsync();
            return true;
        }

        public async Task<ProductByIdViewModel> GetById(int id)
        {
            return await this.context.Products
                .Where(p => p.Id == id)
                .Select(p => new ProductByIdViewModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Desciption,
                    ImageUrl = p.ImageUrl,
                    Price = p.OriginalPrice,
                    CategoryName = p.Category.Name,
                })
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<ProductForListViewModel>> GetForList(int categoryId)
        {
            return await this.context.Products
                .Where(p => p.CategoryId == categoryId)
                .Select(p => new ProductForListViewModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    ImageUrl = p.ImageUrl,
                    Price = p.OriginalPrice,
                    CategoryName = p.Category.Name,
                }).ToListAsync();
        }

        public async Task<IEnumerable<ProductForListViewModel>> Search(string keyword)
        {
            return await this.context.Products
                .Where(p => p.Name.Contains(keyword))
                .Select(p => new ProductForListViewModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    ImageUrl = p.ImageUrl,
                    Price = p.OriginalPrice,
                    CategoryName = p.Category.Name,
                }).ToListAsync();
        }
    }
}
