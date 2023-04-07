using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorldModel.Migrations
{
    /// <inheritdoc />
    public partial class Identity4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Product_Type_TypeId",
                table: "Product");

            migrationBuilder.DropTable(
                name: "Type");

            migrationBuilder.RenameColumn(
                name: "TypeId",
                table: "Product",
                newName: "ModelId");

            migrationBuilder.RenameIndex(
                name: "IX_Product_TypeId",
                table: "Product",
                newName: "IX_Product_ModelId");

            migrationBuilder.CreateTable(
                name: "Model",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Usage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Model", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Model_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Model_CategoryId",
                table: "Model",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Product_Model_ModelId",
                table: "Product",
                column: "ModelId",
                principalTable: "Model",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Product_Model_ModelId",
                table: "Product");

            migrationBuilder.DropTable(
                name: "Model");

            migrationBuilder.RenameColumn(
                name: "ModelId",
                table: "Product",
                newName: "TypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Product_ModelId",
                table: "Product",
                newName: "IX_Product_TypeId");

            migrationBuilder.CreateTable(
                name: "Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Usage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Type", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Type_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Type_CategoryId",
                table: "Type",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Product_Type_TypeId",
                table: "Product",
                column: "TypeId",
                principalTable: "Type",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
