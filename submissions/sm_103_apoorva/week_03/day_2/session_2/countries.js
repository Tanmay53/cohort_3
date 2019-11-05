
var country="canada"
var Continent="Asia Europe Africa North America South America Australia"
switch(country){
    case "India":
    case "China":
    case "Nepal":
    case "Singapore":
        continent= "Asia";
        break;
    case "France":
    case "Germany":
    case "Sweden":
        continent="Europe";
        break;
    case "canada":
    case "United States Of America":
    case "Mexico":
        continent="North America";
        break;
    case "Brazil":
    case "Argentina":
        continent="South America";
        break;
    case "Nigeria":
    case "South Africa":
        country="Africa";
        break;
    case "Australia":
        continent="Australia";
    
     
}
console.log(country+"-> The Continent is " +  continent)
