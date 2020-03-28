using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace textApp.Models
{
    public class File
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string FilePath { get; set; }
    }

}
