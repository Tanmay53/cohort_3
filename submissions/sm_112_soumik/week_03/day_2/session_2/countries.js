var countries ="Brazil" 
switch (countries) {
  case "India":
  case "China":
  case "Nepal":
        countries = "Asai"
    break;
    case "South Africa":
    case "Nigeria"     :
        countries="Africa"
        break;
    case "Germany" :
    case "Sweden"  :
    case "France"  :
        countries ="Europe"
        break;
    case "Mexico" :
    case "Canada" :
        countries ="North America"
        break
    case "Brazil"      :
    case "Argentina":
        countries="South America"
        break
  default:
    countries = "Invalid Input";
}
console.log("The Continent is " + countries)