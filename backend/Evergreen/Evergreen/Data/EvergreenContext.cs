using Evergreen.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Evergreen.Data
{
    public class EvergreenContext : DbContext
    {
        public EvergreenContext()
        {   
        }

        public EvergreenContext(DbContextOptions<EvergreenContext> options)
            :base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<ContactMessage> ContactMessages { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseSqlServer(Configuration.ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(p => p.OriginalPrice)
                .HasColumnType("money");

            modelBuilder.Entity<Product>()
                .Property(p => p.DiscountedPrice)
                .HasColumnType("money");
        }
    }
}
