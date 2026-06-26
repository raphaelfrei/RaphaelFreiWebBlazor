namespace RaphaelFreiWeb.Models {
    public class Experience {
        public string Company { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public List<Position> Positions { get; set; } = new();
    }
}
