namespace RaphaelFreiWeb.Helpers {
    
    public static class CapitalizeFirstLetter {
        public static string CapitalizeFirst(this string input) {
            if (string.IsNullOrEmpty(input)) 
                return input;

            return char.ToUpper(input[0]) + input.Substring(1);
        }
    }
}
