using System;

namespace RaphaelFreiWeb.Models {
    
    public class Certification {
        
        public string Name { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        
        public DateTime IssueDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        
        public string? CredentialId { get; set; }
        public string? CredentialUrl { get; set; }
        
        public List<string> Tags { get; set; } = new();
    }
}
