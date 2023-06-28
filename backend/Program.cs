using backend;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();

var app = builder.Build();

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
    tradingCard.Description = updatedTradingCard.Description;
    tradingCard.ImageURL = updatedTradingCard.ImageURL;
    tradingCard.HpStatistic = updatedTradingCard.HpStatistic;
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
    public required string Description { get; set; }
    public required string ImageURL { get; set; }
    public required int HpStatistic { get; set; }
}

