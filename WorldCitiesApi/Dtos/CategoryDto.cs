using WorldModel;

namespace WorldCitiesApi.Dtos
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Origin_Region { get; set; }
        public string Material { get; set; }
        public virtual ICollection<Model> Models { get; set; } 
        public int ModelCount { get; set; }
    }
}