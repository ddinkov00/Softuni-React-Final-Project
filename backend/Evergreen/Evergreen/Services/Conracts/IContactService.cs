using Evergreen.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services.Conracts
{
    public interface IContactService
    {
        public Task<bool> MakeMessage(ContactMessageInputModel message);

        public Task<IEnumerable<MessageViewModel>> GetMessages();
    }
}
