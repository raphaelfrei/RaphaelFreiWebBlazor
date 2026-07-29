using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RaphaelFreiWeb.Repositories {
    
    public class AppRepository : IAppRepository {
        
        private readonly Data.AppDbContext _context;

        public AppRepository(Data.AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AppModel>> GetAllAsync() {
            return await _context.Apps.OrderBy(a => a.Order).ToListAsync();
        }

        public async Task<IEnumerable<AppModel>> GetFeaturedAsync() {
            return await _context.Apps.Where(a => a.IsFeatured).OrderBy(a => a.Order).ToListAsync();
        }
    }
}
