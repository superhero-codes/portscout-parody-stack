using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://localhost:5332");

var app = builder.Build();
var logger = app.Logger;
var port = 5332;
var delayMs = 30000;

var weatherData = new
{
    location = $"Localhost, Port {port}",
    current = new
    {
        temp = 72,
        condition = "Partly Cloudy",
        humidity = 45,
        wind = "8 mph NW",
        feelsLike = 70
    },
    forecast = new[]
    {
        new { day = "Today", high = 75, low = 58, condition = "⛅ Partly Cloudy", rain = "10%" },
        new { day = "Tomorrow", high = 78, low = 60, condition = "☀️ Sunny", rain = "0%" },
        new { day = "Wednesday", high = 68, low = 55, condition = "🌧️ Rain", rain = "80%" },
        new { day = "Thursday", high = 65, low = 52, condition = "⛈️ Thunderstorms", rain = "90%" },
        new { day = "Friday", high = 72, low = 58, condition = "🌤️ Mostly Sunny", rain = "5%" }
    }
};

app.Use(async (context, next) =>
{
    logger.LogInformation("[Waiter.com:{Port}] Request start {Method} {Path}", port, context.Request.Method, context.Request.Path);
    logger.LogInformation("[Waiter.com:{Port}] delaying {DelayMs}ms", port, delayMs);

    try
    {
        await Task.Delay(delayMs, context.RequestAborted);
        await next(context);
    }
    finally
    {
        logger.LogInformation("[Waiter.com:{Port}] Request complete {Method} {Path} -> {StatusCode}", port, context.Request.Method, context.Request.Path, context.Response.StatusCode);
    }
});

var publicDir = Path.Combine(app.Environment.ContentRootPath, "public");

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(publicDir)
});

app.MapGet("/", () => Results.File(Path.Combine(publicDir, "index.html"), "text/html"));

app.MapGet("/api/weather", () => Results.Json(weatherData));

app.MapGet("/api/health", () => Results.Json(new { status = "ok" }));

logger.LogInformation("🌤️ Waiter.com running on http://localhost:{Port}", port);
logger.LogInformation("🌤️ Fast, reliable, accurate. (Two of these are lies.)");

app.Run();
