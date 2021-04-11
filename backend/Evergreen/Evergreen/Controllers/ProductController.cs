using Evergreen.Model;
using Evergreen.Services.Conracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public async Task<IEnumerable<ProductForListViewModel>> GetForList(int categoryId)
        {
            var products = await this.productService.GetForList(categoryId);

            return products;
        }

        [HttpGet("getById")]
        public async Task<ProductByIdViewModel> GetById(int id)
        {
            return await this.productService.GetById(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateProductInputModel input)
        {
            await this.productService.Add(input);
            return this.Ok();
        }
    }
}
