using Evergreen.Data;
using Evergreen.Data.Models;
using Evergreen.Model;
using Evergreen.Services.Conracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Services
{
    public class ContactService : IContactService
    {
        private readonly EvergreenContext context;

        public ContactService(EvergreenContext context)
        {
            this.context = context;
        }

        public async Task<bool> MakeMessage(ContactMessageInputModel message)
        {
            await this.context.ContactMessages
                .AddAsync(new ContactMessage
                {
                    Name = message.Name,
                    Phone = message.Phone,
                    Title = message.Title,
                    Message = message.Message,
                });
            await this.context.SaveChangesAsync();

            return true;
        }
    }
}
