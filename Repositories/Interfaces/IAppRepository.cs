using System.Collections.Generic;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Repositories.Interfaces
{
    public interface IAppRepository
    {
        Task<IEnumerable<AppModel>> GetAllAsync();
        Task<IEnumerable<AppModel>> GetFeaturedAsync();
    }
}
