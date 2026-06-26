namespace RaphaelFreiWeb.Models {
    public class Position {
        public string Role { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<string> SoftwareStack { get; set; } = new();
        public List<string> DatabaseStack { get; set; } = new();
    }
}
