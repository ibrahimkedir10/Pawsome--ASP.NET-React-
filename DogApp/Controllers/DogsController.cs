using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace YourNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogsController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public DogsController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        // Endpoint to get all breeds
        [HttpGet("breeds")]
        public async Task<IActionResult> GetAllBreeds()
        {
            string url = "https://dog.ceo/api/breeds/list/all";
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return Ok(result);
            }
            return NotFound();
        }

        // Endpoint to get a random image for a specific breed
        [HttpGet("breeds/{breed}/image")]
        public async Task<IActionResult> GetBreedImage(string breed)
        {
            string url = $"https://dog.ceo/api/breed/{breed}/images/random";
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return Ok(result);
            }
            return NotFound();
        }
    }
}
