using WorldModel;

namespace WorldCitiesApi.Dtos
{
    public class CountryPopulation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Population { get; set; }
        public virtual ICollection<City>? Cities { get; set; }
        public int Counts { get; set; }
    }
}
