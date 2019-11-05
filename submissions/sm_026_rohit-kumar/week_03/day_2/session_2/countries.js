var country = "Brazil"
var output = 'Not Found'

switch(country){
    case "India":
    case "Nepal":
    case "China":
    case "Singapore":
        output = "Asia"
        break;
    case "United States of America":
    case "Mexico":
    case "Canada":
        output = "North America"
        break;
    case "Australia":
        output = "Australia"
        break;
    case "Germany":
    case "France":
    case "Sweden":
        ouput = "Europe"
        break;
    case "South Africa":
    case "Nigeria":
        output = "Africa"
        break;
    case "Argentina":
    case "Brazil":
        output = "South America"
    
}

console.log("The continent is : ",output)