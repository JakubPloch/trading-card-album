using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var _tradingCards = new List<TradingCard> {
    new TradingCard { Id = 1, Title="QWE", Description="QWEQWE", ImageURL="qwe", Statistics=new List<int> { 10, 20, 30, 40 } },
    new TradingCard { Id = 2, Title="ASD", Description="ASDASD", ImageURL="asd", Statistics=new List<int> { 11, 20, 30, 40 } },
    new TradingCard { Id = 3, Title="ZXC", Description="ZXCZXC", ImageURL="zxc", Statistics=new List<int> { 11, 22, 30, 40 } },
    new TradingCard { Id = 4, Title="RTY", Description="RTYRTY", ImageURL="rty", Statistics=new List<int> { 11, 22, 33, 40 } },
};

app.MapGet("/trading-card", () =>
{
    return _tradingCards;
});

app.MapGet("/trading-card/{id}", (int id) =>
{
    var tradingCard = _tradingCards.Find(t => t.Id == id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    return Results.Ok(tradingCard);
});

app.MapPost("/trading-card", (TradingCard tradingCard) => {
    _tradingCards.Add(tradingCard);
    return _tradingCards;
});

app.MapPut("/trading-card/{id}", (TradingCard updatedTradingCard, int id) =>
{
    var tradingCard = _tradingCards.Find(t => t.Id == id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    tradingCard.Title = updatedTradingCard.Title;
    tradingCard.Description = updatedTradingCard.Description;
    tradingCard.ImageURL = updatedTradingCard.ImageURL;
    tradingCard.Statistics = updatedTradingCard.Statistics;

    return Results.Ok(tradingCard);
});

app.MapDelete("/trading-card/{id}", (int id) =>
{
    var tradingCard = _tradingCards.Find(t => t.Id == id);
    if (tradingCard is null)
        return Results.NotFound("Trading card not found");

    _tradingCards.Remove(tradingCard);

    return Results.Ok($"Card with an id: {id} removed");
});


app.Run();

class TradingCard
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required string ImageURL { get; set; }
    public required List<int> Statistics { get; set; }
}

