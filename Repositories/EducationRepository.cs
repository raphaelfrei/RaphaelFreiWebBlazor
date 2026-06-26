using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;

namespace RaphaelFreiWeb.Repositories {
    public class EducationRepository : IEducationRepository {
        public async Task<IEnumerable<Education>> GetAllAsync() =>
            new List<Education>() {
                new Education {
                    Institution = "Universidade de São Paulo (USP/MBA Esalq)",
                    Degree = "MBA at Software Engineering",
                    StartDate = new DateTime(2024, 6, 1),
                    EndDate = new DateTime(2025, 12, 1),
                },
                new Education {
                    Institution = "Universidade Municipal de São Caetano do Sul (USCS)",
                    Degree = "Bachelor at Computer Science",
                    StartDate = new DateTime(2020, 1, 1),
                    EndDate = new DateTime(2023, 12, 1)
                }
            };
    }
}
