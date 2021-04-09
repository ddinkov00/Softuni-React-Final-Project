using Evergreen.Model;
using System.Threading.Tasks;

namespace Evergreen.Services.Conracts
{
    public interface IUserService
    {
        public Task<bool> RegisterAsync(string email, string password);

        public Task<LoginModel> LoginAsync(string email, string password);
    }
}
