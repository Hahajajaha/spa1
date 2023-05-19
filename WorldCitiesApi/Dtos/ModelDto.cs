using WorldModel;

namespace WorldCitiesApi.Dtos
{
    public class ModelDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Usage { get; set; }
        public int CategoryId { get; set; }
        public virtual ICollection<Product> Products { get; set; } 
        public int ProductCount { get; set; }
    }
}
