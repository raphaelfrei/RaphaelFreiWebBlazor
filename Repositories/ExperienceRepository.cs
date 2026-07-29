using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RaphaelFreiWeb.Repositories {
    public class ExperienceRepository : IExperienceRepository {
        
        private readonly Data.AppDbContext _context;

        public ExperienceRepository(Data.AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Experience>> GetAllAsync() {
            return await _context.Experiences
                .Include(e => e.Positions)
                .OrderByDescending(e => e.StartDate)
                .ToListAsync();
        }
    }
}