using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;

namespace RaphaelFreiWeb.Repositories {
    
    public class CertificateRepository : ICertificateRepository {
        
        public async Task<IEnumerable<Certification>> GetAllAsync() =>
            new List<Certification>() {
                new Certification {
                    Name = "Progress OpenEdge Full Integration for PASOE",
                    Issuer = "DLC Soluções em Tecnologia Ltda",
                    IssueDate = new DateTime(2025, 6, 1)
                },
                new Certification {
                    Name = "Implementing Progress OpenEdge Replication for Disaster Recovery",
                    Issuer = "DLC Soluções em Tecnologia Ltda",
                    IssueDate = new DateTime(2025, 6, 1)
                },
                new Certification {
                    Name = "Progress OpenEdge Advanced Database Administration",
                    Issuer = "DLC Soluções em Tecnologia Ltda",
                    IssueDate = new DateTime(2024, 4, 1)
                },
                new Certification {
                    Name = "Problem Solving and Decision Making Practitioner",
                    Issuer = "Kepner-Tregoe",
                    IssueDate = new DateTime(2024, 2, 1),
                    CredentialId = "PA24044AMER1889KT"
                },
                new Certification {
                    Name = "ITIL® Foundation Certificate in IT Service Management",
                    Issuer = "PeopleCert",
                    IssueDate = new DateTime(2024, 1, 1),
                    ExpirationDate = new DateTime(2027, 1, 1),
                    CredentialId = "GR671604448RF"
                },
                new Certification {
                    Name = "Microsoft Certified: Azure Data Fundamentals (DP-900)",
                    Issuer = "Microsoft / SENAI",
                    IssueDate = new DateTime(2023, 1, 1)
                },
                new Certification {
                    Name = "AWS Academy Graduate - Cloud Foundations",
                    Issuer = "Amazon Web Services (AWS)",
                    IssueDate = new DateTime(2022, 10, 1),
                    CredentialId = "ccf6b785-3c01-491f-bdf9-135a583ffcc8",
                    CredentialUrl = "https://www.credly.com/badges/ccf6b785-3c01-491f-bdf9-135a583ffcc8"
                },
                new Certification {
                    Name = "CCNA: Introduction to Networks",
                    Issuer = "Cisco",
                    IssueDate = new DateTime(2022, 6, 1),
                    CredentialId = "3d5c43d6-fcfd-4ed6-aaa4-e523962b2087",
                    CredentialUrl = "https://www.credly.com/badges/3d5c43d6-fcfd-4ed6-aaa4-e523962b2087"
                }
            };
        
    }
}
