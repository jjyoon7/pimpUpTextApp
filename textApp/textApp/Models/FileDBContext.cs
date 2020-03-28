using System;
using Microsoft.EntityFrameworkCore;
namespace textApp.Models
{
    public class FileDBContext : DbContext
    {
        public FileDBContext(DbContextOptions<FileDBContext> options) : base(options)
        {
        }

        public DbSet<File> Files { get; set; }
    }
}
