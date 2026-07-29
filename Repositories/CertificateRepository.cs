using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RaphaelFreiWeb.Repositories {
    
    public class CertificateRepository : ICertificateRepository {
        
        private readonly Data.AppDbContext _context;

        public CertificateRepository(Data.AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Certification>> GetAllAsync() {
            return await _context.Certifications.OrderByDescending(c => c.IssueDate).ToListAsync();
        }
    }
}
