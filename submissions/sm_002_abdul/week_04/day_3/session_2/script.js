function submitAge(){
    var ageGiven=document.getElementById("age").value;

    if (ageGiven==18){
        document.getElementById("result").innerHTML="You are just old enough to drive in India!";
    }
    else if (ageGiven>18){
        document.getElementById("result").innerHTML="You can drive in India!";
    }
    else if(ageGiven<18){
        document.getElementById("result").innerHTML="You can't drive in India";
    }
}

function color(){
    var color=document.getElementById("color").value;

    document.getElementById("btn").style.color=color;
}

function cont(){
    var country=document.getElementById("countryList").value;
    var continent;
    switch(country){
        case "India":
        case "China":
        case "Nepal":
        case "Singapore":
        continent="Asia";
        console.log(continent);
        break;

        case "United States of America":
        case "Canada":
        case "Mexico":
        continent="North America";
        console.log(continent);
        break;

        case "Argentina":
        case "Brazil":
        continent="South America";
        console.log(continent);
        break;

        case "France":
        case "Germany":
        case "Sweden":
        continent="Europe";
        console.log(continent);
        break;

        case "South Africa":
        case "Nigeria":
        continent="Africa";
        console.log(continent);
        break;

        case "Australia":
        continent="Australia";
        console.log(continent);
        break;

        default:
        console.log('Invalid Response');    
    }
        

    alert("The continent is "+ continent);
}
