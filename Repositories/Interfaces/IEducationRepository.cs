using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Repositories.Interfaces {
    public interface IEducationRepository {
        Task<IEnumerable<Education>> GetAllAsync();
    }
}
