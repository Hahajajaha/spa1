using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorldCitiesApi.Dtos;
using WorldModel;

namespace WorldCitiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly WorldCitiesContext _context;

        public CategoriesController(WorldCitiesContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            
            return await _context.Categories.ToListAsync();
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            Category? category = await _context.Categories.FindAsync(id);
            return category is null ? NotFound() : category;
        }

        [HttpGet("Category_Model/{id}")]
        public async Task<ActionResult<CategoryDto>> GetCategoryDto(int id)
        {
            CategoryDto? categoryDto = await _context.Categories.Where(c => c.Id == id).Select(c => new CategoryDto
            {
                Id = c.Id,
                Name = c.Name,
                Models = c.Models,     //c.cities ->models
                Origin_Region = c.Origin_Region,
                Material =  c.Material,
                ModelCount = c.Models.Count()
            }).SingleOrDefaultAsync();
            if (categoryDto is null)
            {
                return NotFound();
            }

            return categoryDto;
        }
            // Category? category = await _context.Categories.FindAsync(id);
            // return category == null ? NotFound() : category;
        

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _context.Categories.Add(category);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }



        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            Category? category = await _context.Categories.FindAsync(id);
            CategoryDto? categoryDto = await _context.Categories.Where(c => c.Id == id)
                .Select(c => new CategoryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Models = c.Models,     //c.cities ->models
                    Origin_Region = c.Origin_Region,
                    Material = c.Material,
                    ModelCount = c.Models.Count()

                }).SingleOrDefaultAsync();
            if (category == null)
            {
                return Ok(new ApiResponse<CategoryDto>
                {
                    Status = 604,
                    Message = "This category cannot be found!",
                    Data = null
                });
            }
            else
            {

                if (categoryDto.ModelCount!= 0)
                {
                    return Ok(new ApiResponse<ModelDto>
                    {
                        Status = 603,
                        Message = "There is subclass, thus this category cannot be deleted currently.",
                        Data = null
                    });
                }
                else
                {
                    _context.Categories.Remove(category);
                    await _context.SaveChangesAsync();
                    return Ok(new ApiResponse<CategoryDto>
                    {
                        Status = 200,
                        Message = "This category has been deleted.",
                        Data = categoryDto
                    });
                }
            }
        }
        private bool CategoryExists(int id) => _context.Categories.Any(e => e.Id == id);
    }
}
