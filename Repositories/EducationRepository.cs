using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RaphaelFreiWeb.Repositories {
    public class EducationRepository : IEducationRepository {
        
        private readonly Data.AppDbContext _context;

        public EducationRepository(Data.AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Education>> GetAllAsync() {
            return await _context.Educations.OrderByDescending(e => e.StartDate).ToListAsync();
        }
    }
}
