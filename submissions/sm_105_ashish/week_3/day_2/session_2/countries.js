var country="India";
switch(country){
    case "India":
    case "China":
    case "Nepal":
    case "Singapore":
        console.log(' The Country'+' '+country+' ' +'is in continet Asia')
        break;
    case "United States of America":
    case "Mexico":
    case "Canada":
         console.log(' The Country'+' '+country+' ' +'is in continet North America')
         break;        
    case "France":
    case "Germany":
    case "Sweden":
         console.log(' The Country'+' '+country+' ' +'is in continet Europe')
         break;
    case "Brazil":
    case "Argentina":
         console.log(' The Country'+' '+country+' ' +'is in continet South America')
         break;
    case "South Africa":
    case "Nigeria":
         console.log(' The Country'+' '+country+' ' +'is in continet Africa')
         break;
    case "Australia":
         console.log(' The Country'+' '+country+' ' +'is in continet Australia')
         break;
    default:
         console.log('sorry country'+' '+country+' '+'is not listed in our program')
        }
