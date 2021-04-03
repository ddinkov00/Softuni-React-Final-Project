using Evergreen.Model.Categories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services.Conracts
{
    public interface ICategoryService
    {
        public Task<IEnumerable<CategoryForNavigationViewModel>> GetForNavigation();
    }
}
