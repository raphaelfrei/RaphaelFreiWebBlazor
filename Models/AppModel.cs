using System;
using System.Collections.Generic;

namespace RaphaelFreiWeb.Models
{
    public class AppModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? IconUrl { get; set; }
        
        public string? WebsiteUrl { get; set; }
        public string? GooglePlayUrl { get; set; }
        public string? AppStoreUrl { get; set; }
        public string? MicrosoftStoreUrl { get; set; }
        
        public List<string> Tags { get; set; } = new();
        public List<string> Screenshots { get; set; } = new();
        public string? Company { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public bool IsFeatured { get; set; }
        public int Order { get; set; }
    }
}
