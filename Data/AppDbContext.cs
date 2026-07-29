using System;
using System.Collections.Generic;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using RaphaelFreiWeb.Models;

namespace RaphaelFreiWeb.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<AppModel> Apps { get; set; } = null!;
        public DbSet<Certification> Certifications { get; set; } = null!;
        public DbSet<Education> Educations { get; set; } = null!;
        public DbSet<Experience> Experiences { get; set; } = null!;
        public DbSet<Position> Positions { get; set; } = null!;
        public DbSet<Project> Projects { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure value converters for List<string> to store as JSON
            var stringListConverter = new Microsoft.EntityFrameworkCore.Storage.ValueConversion.ValueConverter<List<string>, string>(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
            );

            // AppModel
            modelBuilder.Entity<AppModel>()
                .Property(a => a.Tags)
                .HasConversion(stringListConverter);
            modelBuilder.Entity<AppModel>()
                .Property(a => a.Screenshots)
                .HasConversion(stringListConverter);

            // Certification
            modelBuilder.Entity<Certification>()
                .Property(c => c.Tags)
                .HasConversion(stringListConverter);

            // Position
            modelBuilder.Entity<Position>()
                .Property(p => p.SoftwareStack)
                .HasConversion(stringListConverter);
            modelBuilder.Entity<Position>()
                .Property(p => p.DatabaseStack)
                .HasConversion(stringListConverter);

            // Project
            modelBuilder.Entity<Project>()
                .Property(p => p.Tags)
                .HasConversion(stringListConverter);
            modelBuilder.Entity<Project>()
                .Property(p => p.Highlights)
                .HasConversion(stringListConverter);
                
            // One-to-many relationship: Experience -> Positions
            modelBuilder.Entity<Experience>()
                .HasMany(e => e.Positions)
                .WithOne(p => p.Experience)
                .HasForeignKey(p => p.ExperienceId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
