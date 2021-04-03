﻿using Evergreen.Data;
using Evergreen.Model.Categories;
using Evergreen.Services.Conracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly EvergreenContext context;

        public CategoryService(EvergreenContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<CategoryForNavigationViewModel>> GetForNavigation()
        {
            return await this.context.Categories
                .Select(c => new CategoryForNavigationViewModel
                {
                    Id = c.Id,
                    Name = c.Name,
                }).ToListAsync();
        }
    }
}