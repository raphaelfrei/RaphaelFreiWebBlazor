using System;
using System.Collections.Generic;
using System.Linq;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Models.Enums;

namespace RaphaelFreiWeb.Data
{
    public static class DbSeeder
    {
        public static void Seed(AppDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Apps.Any())
            {
                var apps = new List<AppModel> {
                    new AppModel {
                        Name = "RomCrate - Video Game Tracker",
                        Slug = "romcrate",
                        Description = "Welcome to RomCrate, the ultimate hub for your gaming life. Whether you are a hardcore collector or just looking to clear your backlog, RomCrate keeps your entire gaming history organized, synced, and social.",
                        IconUrl = "https://www.romcrate.com/favicon.png",
                        WebsiteUrl = "https://www.romcrate.com",
                        IsFeatured = true,
                        Order = 1,
                        ReleaseDate = new DateTime(2026, 2, 16),
                        Tags = new List<string> { "C#", "Blazor", ".NET MAUI", "PostgreSQL" },
                        GooglePlayUrl = "https://play.google.com/store/apps/details?id=com.agenciacosmos.romcrate",
                        AppStoreUrl = "https://apps.apple.com/br/app/romcrate-backlog-de-jogos/id6759972404"
                    },
                    new AppModel {
                        Name = "NPad - Lightweight File Editor & Notepad for Mac",
                        Slug = "npad",
                        Description = "The ideal tool for reading logs and inspecting files without dragging down your system.",
                        IconUrl = "https://www.getnpad.com/favicon.png",
                        WebsiteUrl = "https://www.getnpad.com",
                        IsFeatured = true,
                        Order = 2,
                        ReleaseDate = new DateTime(2026, 5, 20),
                        Tags = new List<string> { "SwiftUI" },
                        AppStoreUrl = "https://apps.apple.com/br/app/npad-file-editor/id6769943495?mt=12"
                    },
                    new AppModel {
                        Name = "LocalGraph - URL Inspector",
                        Slug = "localgraph",
                        Description = "Analyze meta tags, Open Graph, Twitter Cards, and all images from any web page in an intuitive and fast visual interface.",
                        IconUrl = "https://www.getlocalgraph.com/favicon.png",
                        WebsiteUrl = "https://www.getlocalgraph.com",
                        IsFeatured = true,
                        Order = 3,
                        ReleaseDate = null,
                        Tags = new List<string> { "C#", ".NET MAUI" }
                    },
                    new AppModel {
                        Name = "DeckDVR - Record Converter",
                        Slug = "deckdvr",
                        Description = "The easiest way to convert your Steam recordings from .m4s to standard .mp4 format.",
                        IconUrl = "https://deckdvr.com/favicon.png",
                        WebsiteUrl = "https://deckdvr.com/",
                        IsFeatured = true,
                        Order = 4,
                        ReleaseDate = null,
                        Tags = new List<string> { "C#", ".NET MAUI" }
                    },
                    new AppModel {
                        Name = "Pastory - Clipboard Manager",
                        Slug = "pastory",
                        Description = "Your clipboard, upgraded.",
                        IconUrl = "/images/pastory-icon.png",
                        WebsiteUrl = "https://raphaelfrei.com.br/pastory",
                        IsFeatured = true,
                        Order = 4,
                        ReleaseDate = null,
                        Tags = new List<string> { "SwiftUI" }
                    }
                };
                context.Apps.AddRange(apps);
            }

            if (!context.Certifications.Any())
            {
                var certs = new List<Certification> {
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
                context.Certifications.AddRange(certs);
            }

            if (!context.Educations.Any())
            {
                var edus = new List<Education> {
                    new Education {
                        Institution = "Universidade de São Paulo (USP/MBA Esalq)",
                        Degree = "MBA at Software Engineering",
                        StartDate = new DateTime(2024, 6, 1),
                        EndDate = new DateTime(2025, 12, 1),
                    },
                    new Education {
                        Institution = "Universidade Municipal de São Caetano do Sul (USCS)",
                        Degree = "Bachelor at Computer Science",
                        StartDate = new DateTime(2020, 1, 1),
                        EndDate = new DateTime(2023, 12, 1)
                    }
                };
                context.Educations.AddRange(edus);
            }

            if (!context.Experiences.Any())
            {
                var exps = new List<Experience> {
                    new Experience {
                        Company = "Adient PLC",
                        StartDate = new DateTime(2021, 2, 22),
                        EndDate = null,
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
                context.Experiences.AddRange(exps);
            }

            if (!context.Projects.Any())
            {
                var projects = new List<Project> {
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
                    },
                    new Project {
                        Title = "Deck DVR - Record Converter",
                        Type = ProjectType.Personal,
                        Role = "Creator",
                        Description = "The easiest way to convert your Steam recordings from .m4s to standard .mp4 format.",
                        Tags = new List<string> { ".NET MAUI", "C#" },
                        ExternalUrl = "https://deckdvr.com/",
                        Created = new DateTime(2026, 06, 01),
                        Finished = new DateTime(2026, 07, 01)
                    },
                    new Project {
                        Title = "Nova Imagem",
                        Type = ProjectType.Enterprise, 
                        Role = "Web Developer",
                        Description = "Created website for Nova Imagem. Including Google Maps, WhatsApp and Email forms.",
                        Company = "Nova Imagem",
                        Tags = new List<string> { "Wordpress" },
                        Created = new DateTime(2019, 1, 01),
                        Finished = new DateTime(2019, 2, 01)
                    },
                    new Project {
                        Title = "Raphael Frei",
                        Type = ProjectType.Personal, 
                        Role = "Web Developer",
                        Description = "Created website for Raphael Frei.",
                        ExternalUrl = "https://www.raphaelfrei.com.br",
                        RepositoryUrl = "https://github.com/raphaelfrei/RaphaelFreiWebBlazor",
                        Tags = new List<string> { "Wordpress", ".NET Blazor" },
                        Created = new DateTime(2021, 11, 01)
                    },
                    new Project {
                        Title = "Active Directory Integration",
                        Type = ProjectType.Enterprise, 
                        Role = "Software Engineer", 
                        Description = "Implemented a centralized authentication system (Single Sign-On), integrating Progress 4GL environment with Microsoft Active Directory for shop floor applications.",
                        Company = "Adient PLC",
                        Tags = new List<string> { "Progress 4GL", "C#" , "Active Directory", "SSO", "Security" },
                        Created = new DateTime(2022, 4, 1),
                        Finished = new DateTime(2022, 6, 1)
                    }
                };
                context.Projects.AddRange(projects);
            }

            context.SaveChanges();
        }
    }
}
