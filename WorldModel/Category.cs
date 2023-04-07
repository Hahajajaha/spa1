using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace WorldModel;

public partial class Category
{
    public int Id { get; set; }

    [StringLength(50)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    public string Origin_Region { get; set; } = null!;

    [StringLength(50)]
    public string Material { get; set; } = null!;

    public virtual ICollection<Model> Models { get; } = new List<Model>();
}
