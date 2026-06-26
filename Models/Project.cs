using System;
using System.Collections.Generic;
using RaphaelFreiWeb.Models.Enums;

namespace RaphaelFreiWeb.Models {
    public class Project {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = new();
        public string? InternalSlug { get; set; }
        public string? ExternalUrl { get; set; }
        public string? RepositoryUrl { get; set; } 
        public string? Company { get; set; }
        public ProjectType Type { get; set; } = ProjectType.Personal;
        public DateTime? Created { get; set; }
        public DateTime? Finished { get; set; }
        public string? Role { get; set; } 
        public List<string>? Highlights { get; set; } = new();
    }
}
