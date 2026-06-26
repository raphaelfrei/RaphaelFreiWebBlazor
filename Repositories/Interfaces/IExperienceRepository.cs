using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Repositories.Interfaces {
    public interface IExperienceRepository {
        Task<IEnumerable<Experience>> GetAllAsync();
    }
}
