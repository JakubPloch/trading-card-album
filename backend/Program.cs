using backend;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var allowAlbumFrontOrigin = "_allowAlbumFrontOrigin";

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors();

builder.Services.AddCors(options =>
{
    options.AddPolicy(allowAlbumFrontOrigin,
                          policy =>
                          {
                              policy.WithOrigins("http://localhost:4200")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});

var app = builder.Build();
app.UseCors(allowAlbumFrontOrigin);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/trading-card", async (DataContext context) =>
{
    return await context.TradingCards.ToListAsync();
});

app.MapGet("/trading-card/{id}", async (DataContext context, int id) =>
{
    var tradingCard = await context.TradingCards.FindAsync(id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    return Results.Ok(tradingCard);
});

app.MapGet("/trading-card-exists/{cardCode}", async (DataContext context, string cardCode) =>
{
    var tradingCard = await context.TradingCards.FirstOrDefaultAsync(x => x.CardCode == cardCode);
    if (tradingCard is null)
        return Results.Ok(false);

    return Results.Ok(true);
});

app.MapGet("/trading-card-code/{cardCode}", async (DataContext context, string cardCode) =>
{
    var tradingCard = await context.TradingCards.FirstOrDefaultAsync(x=> x.CardCode == cardCode);
    if (tradingCard is null)
        return Results.NotFound("Card not activated");

    return Results.Ok(tradingCard);
});

app.MapPost("/trading-card", async (DataContext context, TradingCard tradingCard) =>
{
    context.TradingCards.Add(tradingCard);
    await context.SaveChangesAsync();
    return Results.Ok(await context.TradingCards.ToArrayAsync());
});

app.MapPut("/trading-card/{id}", async (DataContext context, TradingCard updatedTradingCard, int id) =>
{
    var tradingCard = await context.TradingCards.FindAsync(id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    tradingCard.Title = updatedTradingCard.Title;
    tradingCard.CardCode = updatedTradingCard.CardCode;
    tradingCard.Description = updatedTradingCard.Description;
    tradingCard.ImageURL = updatedTradingCard.ImageURL;
    tradingCard.HpStatistic = updatedTradingCard.HpStatistic;
    tradingCard.ManaStatistic = updatedTradingCard.ManaStatistic;
    tradingCard.DamageStatistic = updatedTradingCard.DamageStatistic;
    tradingCard.ArmourStatistic = updatedTradingCard.ArmourStatistic;
    await context.SaveChangesAsync();

    return Results.Ok($"Card with an id: {id} updated");
});

app.MapDelete("/trading-card/{id}", async (DataContext context, int id) =>
{
    var tradingCard = await context.TradingCards.FindAsync(id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    context.TradingCards.Remove(tradingCard);
    await context.SaveChangesAsync();

    return Results.Ok($"Card with an id: {id} removed");
});

app.Run();

public class TradingCard
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string CardCode { get; set; }
    public required string Description { get; set; }
    public required string ImageURL { get; set; }
    public required int HpStatistic { get; set; }
    public required int ManaStatistic { get; set; }
    public required int DamageStatistic { get; set; }
    public required int ArmourStatistic { get; set; }
}

