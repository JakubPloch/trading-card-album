using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
                
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Initial Catalog=TradingCardAlbumDb;Trusted_Connection=true;MultipleActiveResultSets=true;");
        }

        public DbSet<TradingCard> TradingCards => Set<TradingCard>();
    }
}