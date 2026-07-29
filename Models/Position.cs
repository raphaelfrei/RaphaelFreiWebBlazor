namespace RaphaelFreiWeb.Models {
    public class Position {
        public int Id { get; set; }
        public int ExperienceId { get; set; }
        public Experience Experience { get; set; } = null!;
        public string Role { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<string> SoftwareStack { get; set; } = new();
        public List<string> DatabaseStack { get; set; } = new();
    }
}
