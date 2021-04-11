using Evergreen.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services.Conracts
{
    public interface IProductService
    {
        public Task<bool> Add(CreateProductInputModel input);

        public Task<IEnumerable<ProductForListViewModel>> GetForList(int categoryId);

        public Task<ProductByIdViewModel> GetById(int id);
    }
}
