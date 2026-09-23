var candidates = new[]
{
    Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "..", "static-site")),
    Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "static-site")),
    Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "static-site")),
    Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "static-site"))
};

var staticSitePath = candidates.FirstOrDefault(Directory.Exists)
    ?? throw new DirectoryNotFoundException("Could not find static-site directory in candidate paths.");

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = staticSitePath
});

var app = builder.Build();

app.UseStatusCodePagesWithReExecute("/404.html");
app.UseDefaultFiles();
app.UseStaticFiles();

// Middleware for clean URLs (e.g. /projects -> /projects/index.html, /apps -> /apps/index.html)
app.Use(async (context, next) =>
{
    var path = context.Request.Path.Value?.Trim('/') ?? "";
    if (!string.IsNullOrEmpty(path) && !Path.HasExtension(path))
    {
        var candidateIndex = Path.Combine(staticSitePath, path, "index.html");
        if (File.Exists(candidateIndex))
        {
            context.Response.ContentType = "text/html; charset=utf-8";
            await context.Response.SendFileAsync(candidateIndex);
            return;
        }

        // Case-insensitive fallback (e.g. /Chromaku -> /chromaku/index.html)
        var lowerCandidateIndex = Path.Combine(staticSitePath, path.ToLowerInvariant(), "index.html");
        if (File.Exists(lowerCandidateIndex))
        {
            context.Response.ContentType = "text/html; charset=utf-8";
            await context.Response.SendFileAsync(lowerCandidateIndex);
            return;
        }
    }
    await next();
});

Console.WriteLine($"Serving static-site from: {staticSitePath}");
app.Run();
