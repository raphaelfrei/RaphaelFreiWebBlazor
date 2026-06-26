namespace RaphaelFreiWeb.Models {
    public class Education {
        public string Institution { get; set; } = string.Empty;
        public string Degree { get; set; } = string.Empty;
        
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        
        public string? Description { get; set; } 
        
        public string? Location { get; set; }
    }
}
