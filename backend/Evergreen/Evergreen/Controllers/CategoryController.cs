using Evergreen.Model.Categories;
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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService categoryService;

        public CategoryController(
            ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IEnumerable<CategoryForNavigationViewModel>> GetForNavigation()
        {
            var categories = await this.categoryService.GetForNavigation();
            return categories;
        }
    }
}
