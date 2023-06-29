using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddStatistics : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ArmourStatistic",
                table: "TradingCards",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "CardCode",
                table: "TradingCards",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "DamageStatistic",
                table: "TradingCards",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ManaStatistic",
                table: "TradingCards",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ArmourStatistic",
                table: "TradingCards");

            migrationBuilder.DropColumn(
                name: "CardCode",
                table: "TradingCards");

            migrationBuilder.DropColumn(
                name: "DamageStatistic",
                table: "TradingCards");

            migrationBuilder.DropColumn(
                name: "ManaStatistic",
                table: "TradingCards");
        }
    }
}
