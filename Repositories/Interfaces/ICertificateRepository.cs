using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Repositories.Interfaces {
    public interface ICertificateRepository {
        Task<IEnumerable<Certification>> GetAllAsync();
    }
}
