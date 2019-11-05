var country='Canada'
switch (country){
    case 'India':
    case 'Nepal':
    case 'China':
    case 'Singapore':
        console.log('The constinent is Asia')
        break;
    case 'United States of America':
    case 'Mexico':
    case 'Canada':
        console.log('The continent is North America')
        break;
    case 'Argentina':
    case 'Brazil':
        console.log('The continent is South America')
        break;
    case 'Australia':
        console.log('The continent is Australia')
        break;
    case 'France':
    case 'Germany':
    case 'sweden':
        console.log('The continent is Europe')
        break;
    case 'Nigeria':
    case 'South Africa':
        console.log('The continent is Africa')
        break;
    default: console.log('No matching continent found!!')
}