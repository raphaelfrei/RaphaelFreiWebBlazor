using Microsoft.Extensions.Localization;
using RaphaelFreiWeb.Models;
using RaphaelFreiWeb.Resources;

namespace RaphaelFreiWeb.Helpers {
    public static class DateDisplay {
        public static string GetDateDisplay(Project p, IStringLocalizer<Resources.Resources> loc) {
            if (!p.Created.HasValue && !p.Finished.HasValue)
                return loc["Date_InDevelopment"];

            if (p.Created.HasValue && !p.Finished.HasValue)
                return $"{p.Created.Value.Year} - {loc["Date_Present"]}";

            if (p.Created.HasValue && p.Finished.HasValue) 
                return p.Created.Value.Year == p.Finished.Value.Year 
                    ? p.Created.Value.Year.ToString() 
                    : $"{p.Created.Value.Year} - {p.Finished.Value.Year}";

            return string.Empty;
        }
        
        public static string GetPeriodDisplay(DateTime start, DateTime? end, IStringLocalizer<Resources.Resources> loc) {
            string startStr = start.ToString("MMM yyyy"); 
            string endStr = end.HasValue ? end.Value.ToString("MMM yyyy") : loc["Date_Present"];
        
            return $"{startStr.CapitalizeFirst()} - {endStr.CapitalizeFirst()}";
        }
        
        public static string GetDurationDisplay(DateTime? start, DateTime? end, IStringLocalizer<Resources.Resources> loc) {
            if (!start.HasValue) {
                return string.Empty;
            }

            DateTime endDate = end ?? DateTime.Now;
        
            int totalMonths = (endDate.Year - start.Value.Year) * 12 + endDate.Month - start.Value.Month;
            if (endDate.Day < start.Value.Day) {
                totalMonths--; 
            }
        
            if (totalMonths < 0) {
                totalMonths = 0;
            }

            int years = totalMonths / 12;
            int months = totalMonths % 12;

            var parts = new List<string>();
        
            if (years > 0) {
                string yearLoc = years == 1 ? loc["Time_Year"] : loc["Time_Years"];
                parts.Add($"{years} {yearLoc}");
            }
        
            if (months > 0) {
                string monthLoc = months == 1 ? loc["Time_Month"] : loc["Time_Months"];
                parts.Add($"{months} {monthLoc}");
            }

            return parts.Count > 0 ? string.Join(" ", parts) : loc["Time_LessOneMonth"];
        }
    }
}
