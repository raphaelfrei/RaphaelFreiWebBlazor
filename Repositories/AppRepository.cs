using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;

namespace RaphaelFreiWeb.Repositories {
    
    public class AppRepository : IAppRepository {
        
        public async Task<IEnumerable<AppModel>> GetAllAsync() {
            var list = new List<AppModel> {
                new AppModel {
                    Name = "RomCrate - Video Game Tracker",
                    Slug = "romcrate",
                    Description = "Welcome to RomCrate, the ultimate hub for your gaming life. Whether you are a hardcore collector or just looking to clear your backlog, RomCrate keeps your entire gaming history organized, synced, and social.",
                    IconUrl = "https://www.romcrate.com/favicon.png",
                    WebsiteUrl = "https://www.romcrate.com",
                    IsFeatured = true,
                    Order = 1,
                    ReleaseDate = new DateTime(2026, 2, 16),
                    Tags = new List<string> { "C#", "Blazor", ".NET MAUI", "PostgreSQL" },
                    GooglePlayUrl = "https://play.google.com/store/apps/details?id=com.agenciacosmos.romcrate",
                    AppStoreUrl = "https://apps.apple.com/br/app/romcrate-backlog-de-jogos/id6759972404"
                },
                new AppModel
                {
                    Name = "NPad - Lightweight File Editor & Notepad for Mac",
                    Slug = "npad",
                    Description = "The ideal tool for reading logs and inspecting files without dragging down your system.",
                    IconUrl = "https://www.getnpad.com/favicon.png",
                    WebsiteUrl = "https://www.getnpad.com",
                    IsFeatured = true,
                    Order = 2,
                    ReleaseDate = new DateTime(2026, 5, 20),
                    Tags = new List<string> { "SwiftUI" },
                    AppStoreUrl = "https://apps.apple.com/br/app/npad-file-editor/id6769943495?mt=12"
                },
                new AppModel
                {
                    Name = "LocalGraph - URL Inspector",
                    Slug = "localgraph",
                    Description = "Analyze meta tags, Open Graph, Twitter Cards, and all images from any web page in an intuitive and fast visual interface.",
                    IconUrl = "https://www.getlocalgraph.com/favicon.png",
                    WebsiteUrl = "https://www.getlocalgraph.com",
                    IsFeatured = true,
                    Order = 3,
                    ReleaseDate = null,
                    Tags = new List<string> { "C#", ".NET MAUI" }
                },
                new AppModel
                {
                    Name = "DeckDVR - Record Converter",
                    Slug = "deckdvr",
                    Description = "The easiest way to convert your Steam recordings from .m4s to standard .mp4 format.",
                    IconUrl = "https://deckdvr.com/favicon.png",
                    WebsiteUrl = "https://deckdvr.com/",
                    IsFeatured = true,
                    Order = 4,
                    ReleaseDate = null,
                    Tags = new List<string> { "C#", ".NET MAUI" }
                }
            };
            
            return await Task.FromResult(list.OrderBy(a => a.Order));
        }

        public async Task<IEnumerable<AppModel>> GetFeaturedAsync() {
            var all = await GetAllAsync();
            return all.Where(a => a.IsFeatured).OrderBy(a => a.Order);
        }
    }
}
