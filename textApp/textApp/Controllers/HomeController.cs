using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using textApp.ViewModels;
using Microsoft.AspNetCore.Http;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace textApp.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private object hostingEnvironment;

        // GET: api/values
        [HttpGet]
        public ViewResult Create()
        {
            return View();
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Create(FileCreateViewModel file)
        {
            if (ModelState.IsValid)
            {
                string uniqueFileName = null;

                if (file.File != null)
                {
                    // The image must be uploaded to the images folder in wwwroot
                    // To get the path of the wwwroot folder we are using the inject
                    // HostingEnvironment service provided by ASP.NET Core
                    string uploadsFolder = Path.Combine(hostingEnvironment.WebRootPath, "texts");

                    uniqueFileName = Guid.NewGuid().ToString() + "_" + file.File.FileName;
                    string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                    // Use CopyTo() method provided by IFormFile interface to
                    // copy the file to wwwroot/images folder
                    file.File.CopyTo(new FileStream(filePath, FileMode.Create));
                }

                File file1 = new File
                {
                    Name = file.Name,
                    FilePath = uniqueFileName
                };
                File newFile = file1;

                _fileRepository.Add(newFile);
                return RedirectToAction("details", new { id = newFile.Id });
            }

            return View();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
