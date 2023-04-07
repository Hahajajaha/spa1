using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace WorldModel;

public partial class Product
{
    public int Id { get; set; }

    [StringLength(50)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    public string Color { get; set; } = null!;

    [StringLength(50)]
    public string Price { get; set; } = null!;

    [StringLength(50)]
    public string Purchase_Place { get; set; } = null!;
    public int ModelId { get; set; }

    public virtual Model Model { get; set; } = null!;
}
