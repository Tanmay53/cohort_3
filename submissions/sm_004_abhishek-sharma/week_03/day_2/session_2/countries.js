var country 
switch(country){
    case 'India':
    case 'China':
    case 'Nepal':
    case 'Singapore':
        console.log("The continent is Asia");
        break;
    
    case 'United States of America':
    case 'Mexico':
    case 'Canada':
        console.log("The continent is North America");
        break;

    case 'South America':
    case 'Argentina':
    case 'Brazil':
        console.log("The continent is South America");
        break;
    
    case 'France':
    case 'Germany':
    case 'Sweden':
        console.log("The continent is Europe");
        break;

    case 'Nigeria':
        console.log("The continent is Africa");
        break;
    case 'Australia':
        console.log("The continent is Australia");
        break;
    default:
        console.log("Select a country from the given list!");
        break;
}