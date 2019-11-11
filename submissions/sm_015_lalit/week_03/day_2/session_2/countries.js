var country="India"
switch (country) {
    case "India":
    case "Singapore":
    case "China":
    case "Nepal":
            continent="The continent is Asia";
        break;
    case "Mexico":
    case "Canada":
    case "United States of America":
            continent="The continent is North America";
        break;
    case "Sweden":
    case "France":
    case "Germany":
            continent="The continent is Europe";
        break;
    case "SouthAfrica":
    case "Nigeria":
            continent="The continent is Africa";
        break;
    case "Argentina":
    case "Brazil":
            continent="The continent is South Africa";
        break;
    case "Australia":
            continent="The continent is Australia";
        break;
    default:
            continent="Country is not in the given list";
        
}
        console.log(continent)