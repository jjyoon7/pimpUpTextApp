using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using File.Data;
using System;
using System.Linq;

namespace File.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new FileContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<FileContext>>()))
            {
                // Look for any movies.
                if (context.File.Any())
                {
                    return;   // DB has been seeded
                }

                context.File.AddRange(
                    new File
                    {
                        id = "1",
                        textData = "hello this is the show"
                    },

                    new File
                    {
                        id = "2",
                        textData = "hello this is the show 2"
                    },

                    new File
                    {
                        id = "3",
                        textData = "hello this is the show 3"
                    }

                );
                context.SaveChanges();
            }
        }
    }
}