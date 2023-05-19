using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorldCitiesApi.Dtos;
using WorldModel;

namespace WorldCitiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelsController : ControllerBase
    {
        private readonly WorldCitiesContext _context;

        public ModelsController(WorldCitiesContext context)
        {
            _context = context;
        }

        // GET: api/Models
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Model>>> GetModels()
        {
            
            return await _context.Models.ToListAsync();
        }

        // GET: api/Models/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Model>> GetModel(int id)
        {
            Model? model = await _context.Models.FindAsync(id);
            return model is null ? NotFound() : model;
        }

        [HttpGet("Model_Product/{id}")]
        public async Task<ActionResult<ModelDto>> GetModelDto(int id)
        {
            ModelDto? modelDto = await _context.Models.Where(c => c.Id == id).Select(c => new ModelDto
            {
                Id = c.Id,
                Name = c.Name,
                Usage= c.Usage,
                CategoryId = c.CategoryId,
                Products= c.Products,
                ProductCount = c.Products.Count(),
            }).SingleOrDefaultAsync();
            if (modelDto is null)
            {
                return NotFound();
            }

            return modelDto;
        }
            // Model? model = await _context.Models.FindAsync(id);
            // return model == null ? NotFound() : model;
        

        // PUT: api/Models/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModel(int id, Model model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModelExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // POST: api/Models
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Model>> PostModel(Model model)
        {
            _context.Models.Add(model);
          await _context.SaveChangesAsync();

          return CreatedAtAction("GetModel", new { id = model.Id }, model);
        }

        // DELETE: api/Models/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModel(int id)
        {
            Model? model = await _context.Models.FindAsync(id);
            ModelDto? modelDto = await _context.Models.Where(c => c.Id == id)
                .Select(c => new ModelDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Usage = c.Usage,
                    CategoryId = c.CategoryId,
                    Products = c.Products,
                    ProductCount = c.Products.Count(),

                }).SingleOrDefaultAsync();
            if (model == null)
            {
                return Ok(new ApiResponse<ModelDto>
                {
                    Status = 604,
                    Message = "This model cannot be found!",
                    Data = null
                });
            }
            else
            {

                if (modelDto.ProductCount != 0)
                {
                    return Ok(new ApiResponse<ProductDto>
                    {
                        Status = 603,
                        Message = "There is subclass, thus this model cannot be deleted currently.",
                        Data = null
                    });
                }
                else
                {
                    _context.Models.Remove(model);
                    await _context.SaveChangesAsync();
                    return Ok(new ApiResponse<ModelDto>
                    {
                        Status = 200,
                        Message = "This model has been deleted.",
                        Data = modelDto
                    });
                }
            }
        }
        private bool ModelExists(int id) => _context.Models.Any(e => e.Id == id);
    }
}

