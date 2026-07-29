using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Models.Enums;
using RaphaelFreiWeb.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RaphaelFreiWeb.Repositories {
    public class ProjectRepository : IProjectRepository {
        
        private readonly Data.AppDbContext _context;

        public ProjectRepository(Data.AppDbContext context)
        {
            _context = context;
        }

        async public Task<IEnumerable<Project>> GetAllAsync() {
            var projects = await _context.Projects.ToListAsync();
            return projects.OrderByDescending(p => p.Created);
        }
        
        public async Task<IEnumerable<Project>> GetTopProjectsAsync() {
            var projects = await _context.Projects.ToListAsync();
            // In the original code, GetTopProjectsAsync returned specific 8 projects.
            // Since it was hardcoded, let's just return all for now or we could add an IsTop field.
            // Returning the latest 8 as a logical equivalent.
            return projects.OrderByDescending(p => p.Created).Take(8);
        }
    }
}