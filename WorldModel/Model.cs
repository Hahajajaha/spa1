using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace WorldModel;

public partial class Model
{
    public int Id { get; set; }

    [StringLength(50)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    public string Usage { get; set; } = null!;
    public int CategoryId { get; set; }

    public virtual ICollection<Product> Products { get; } = new List<Product>();
   /* public virtual Category Category { get; set; } = null!;*/
}
