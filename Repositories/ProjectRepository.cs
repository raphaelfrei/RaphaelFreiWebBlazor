using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Models.Enums;
using RaphaelFreiWeb.Repositories.Interfaces;

namespace RaphaelFreiWeb.Repositories {
    public class ProjectRepository : IProjectRepository {

        async public Task<IEnumerable<Project>> GetAllAsync() {
            var topProjects = await GetTopProjectsAsync();

            var list = topProjects.ToList();
            
            list.Add(new Project {
                Title = "Nova Imagem",
                Type = ProjectType.Enterprise, 
                Role = "Web Developer",
                Description = "Created website for Nova Imagem. Including Google Maps, WhatsApp and Email forms.",
                Company = "Nova Imagem",
                Tags = new List<string> { "Wordpress" },
                Created = new DateTime(2019, 1, 01),
                Finished = new DateTime(2019, 2, 01)
            });
            
            list.Add(new Project {
                Title = "Raphael Frei",
                Type = ProjectType.Personal, 
                Role = "Web Developer",
                Description = "Created website for Raphael Frei.",
                ExternalUrl = "https://www.raphaelfrei.com.br",
                RepositoryUrl = "https://github.com/raphaelfrei/RaphaelFreiWebBlazor",
                Tags = new List<string> { "Wordpress", ".NET Blazor" },
                Created = new DateTime(2021, 11, 01)
            });
            
            list.Add(new Project {
                Title = "Active Directory Integration",
                Type = ProjectType.Enterprise, 
                Role = "Software Engineer", 
                Description = "Implemented a centralized authentication system (Single Sign-On), integrating Progress 4GL environment with Microsoft Active Directory for shop floor applications.",
                Company = "Adient PLC",
                Tags = new List<string> { "Progress 4GL", "C#" , "Active Directory", "SSO", "Security" },
                Created = new DateTime(2022, 4, 1),
                Finished = new DateTime(2022, 6, 1)
            });
            
            return list.OrderByDescending(p => p.Created);
        }
        
        public async Task<IEnumerable<Project>> GetTopProjectsAsync() =>
        new List<Project> {
            new Project {
                Title = "Ressarcimento ao SUS",
                Type = ProjectType.Enterprise,
                Company = "Confidential Lawyer Firm",
                Role = "Software Architect",
                Description = "Health insurance platform engineered to control and process public health (SUS) reimbursements for the National Health Agency (ANS).", 
                Tags = new List<string> { ".NET Avalonia", "SQLite", "EF Core" },
                Created = new DateTime(2023, 06, 01),
                Finished = new DateTime(2023, 12, 01)
            },
            new Project {
                Title = "RomCrate",
                Type = ProjectType.Personal, 
                Role = "Creator & Solo Developer",
                Description = "Game collection manager application. Available for Android, iOS and Web.",
                Tags = new List<string> { "Blazor", ".NET MAUI", "PostgreSQL", "EF Core" },
                ExternalUrl = "https://www.romcrate.com",
                Created = new DateTime(2026, 02, 01)
            },
            new Project {
                Title = "LocalGraph",
                Type = ProjectType.Personal,
                Role = "Creator",
                Description = "Local SEO viewer for localhost and external websites.",
                Tags = new List<string> { ".NET Avalonia", "PostgreSQL", "EF Core" },
                ExternalUrl = "https://www.getlocalgraph.com",
                Created = null 
            },
            new Project {
                Title = "Progress 4GL Replication",
                Type = ProjectType.Enterprise,
                Company = "Adient PLC",
                Role = "IT Analyst",
                Description = "Implemented Progress OpenEdge Replication across 20+ databases in 5 different sites.",
                Tags = new List<string> { "Progress 4GL", "OpenEdge Replication", "DBA" },
                Created = new DateTime(2024, 06, 01)
            },
            new Project {
                Title = "NPad",
                Type = ProjectType.Personal,
                Role = "Creator & Solo Developer",
                Description = "Lightweight File Editor & Notepad for Mac.",
                Tags = new List<string> { "SwiftUI" },
                ExternalUrl = "https://www.getnpad.com",
                Created = new DateTime(2026, 04, 01),
                Finished = new DateTime(2026, 05, 01)
            },
            new Project {
                Title = "Steam Deck Converter",
                Type = ProjectType.Personal,
                Role = "Creator",
                Description = "A simple Windows tool to automate the conversion of Steam Deck recordings (.mpd) into playable .mp4 video files using FFmpeg.",
                Tags = new List<string> { ".NET WinForms", "FFmpeg" },
                RepositoryUrl = "https://github.com/raphaelfrei/sdeck-rec",
                Created = new DateTime(2026, 01, 01),
                Finished = new DateTime(2026, 02, 01)
            },
            new Project {
                Title = "Health Insurance Mobile App",
                Type = ProjectType.Enterprise,
                Company = "Garantia de Saúde",
                Role = "Mobile Developer",
                Description = "Mobile application for policyholders, featuring digital ID cards, network search, and real-time integration with core healthcare APIs.",
                Tags = new List<string> { ".NET MAUI", "API Integration" },
                Created = new DateTime(2024, 01, 01)
            }
        };
    }
}