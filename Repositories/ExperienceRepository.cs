using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Repositories.Interfaces;

namespace RaphaelFreiWeb.Repositories {
    public class ExperienceRepository : IExperienceRepository {

        public async Task<IEnumerable<Experience>> GetAllAsync() =>
            new List<Experience>() {
                new Experience {
                    Company = "Adient PLC",
                    StartDate = new DateTime(2021, 2, 22),
                    EndDate = null, // Present
                    Positions = new List<Position> {
                        new Position {
                            Role = "IT Technical Support Analyst",
                            StartDate = new DateTime(2023, 2, 6),
                            EndDate = null,
                            Description = "Experienced in supporting and developing desktop applications and databases using Progress 4GL and C# (.NET) for shop floor applications and PLC integration.",
                            SoftwareStack = new List<string> { "Progress 4GL", ".NET Blazor", ".NET WPF" },
                            DatabaseStack = new List<string> { "OpenEdge Progress", "Microsoft SQL Server", "EF Core" }
                        },
                        new Position {
                            Role = "IT Intern",
                            StartDate = new DateTime(2021, 2, 22),
                            EndDate = new DateTime(2023, 2, 6),
                            Description = "Assisted in the development of desktop applications using OpenEdge Progress.",
                            SoftwareStack = new List<string> { ".NET WinForms" },
                            DatabaseStack = new List<string> { "Progress 4GL" }
                        }
                    }
                },
                new Experience {
                    Company = "Agência Cosmos",
                    StartDate = new DateTime(2023, 6, 1),
                    EndDate = null,
                    Positions = new List<Position> {
                        new Position {
                            Role = "Software Engineer",
                            StartDate = new DateTime(2023, 6, 1),
                            EndDate = null,
                            Description = "Currently working on the development of custom software solutions across desktop, mobile, and web platforms, using modern .NET technologies and database systems.",
                            SoftwareStack = new List<string> { ".NET Avalonia", "C#" },
                            DatabaseStack = new List<string> { "SQLite", "EF Core" } 
                        }
                    }
                }
            };
    }
}