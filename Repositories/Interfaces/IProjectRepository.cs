using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Repositories.Interfaces {
    public interface IProjectRepository {
        Task<IEnumerable<Project>> GetTopProjectsAsync();
        Task<IEnumerable<Project>> GetAllAsync();
    }
}
