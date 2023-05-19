using System.Drawing;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorldCitiesApi.Dtos;
using WorldModel;

namespace WorldCitiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly WorldCitiesContext _context;

        public ProductsController(WorldCitiesContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            Product? product = await _context.Products.FindAsync(id);
            return product is null ? NotFound() : product;
        }

        //[HttpGet("Population/{id}")]
        //public async Task<ActionResult<ProductDto>> GetProductDto(int id)
        //{
        //    ProductDto? productDto = await _context.Products.Where(c => c.Id == id).Select(c => new ProductDto
        //    {
        //        Id = c.Id,
        //        Name = c.Name,
        //        Price = c.Price,
        //        Purchase_Place = c.Purchase_Place,
        //        ModelId = c.ModelId,
        //        Color = c.Color,
                // ProductCount = c.Cities.Sum(t => t.Population)
        //    }).SingleOrDefaultAsync();
        //    if (productDto is null)
        //    {
        //        return NotFound();
        //    }

        //    return productDto;
        //}
            // Product? product = await _context.Products.FindAsync(id);
            // return product == null ? NotFound() : product;
        

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            Product? product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id) => _context.Products.Any(e => e.Id == id);
    }
}
