function drive() {
    var x = document.getElementById("age").value;
    console.log(x)
    if (x == 18) {
        document.getElementById("output").innerHTML = "You are just old enough to drive in India!";
    } else if (x > 18) {
        document.getElementById("output").innerHTML = "You can drive in India!"
    } else if (x < 18) {
        document.getElementById("output").innerHTML = "You can't drive in India!"
    }
}
function colorChange() {
    var y = document.getElementById("color").value;
    document.getElementById("btn").style.backgroundColor = y;
}
function findContinent() {
    var country = document.getElementById("country").value;
    switch (country) {
        case "India":
            alert("The continent is Asia");
            break;
        case "United states of America":
            alert("The continent is North America ");
            break;
        case "China":
            alert("The continent is Asia");
            break;
        case "Nepal":
            alert("The continent is Asia");
            break;
        case "Australia":
            alert("The continent is Australia");
            break;
        case "France":
            alert("The continent is Europe");
            break;
        case "Germany":
            alert("The continent is Europe");
            break;
        case "South Africa":
            alert("The continent is Africa");
            break;
        case "Nigeria":
            alert("The continent is Africa ");
            break;
        case "Mexico":
            alert("The continent is North America");
            break;
        case "Argentina":
            alert("The continent is South America");
            break;
        case "Brazil":
            alert("The continent is South America");
            break;
        case "Canada":
            alert("The continent is North America");
            break;
        case "Singapore":
            alert("The continent is Asia");
            break;
        case "Sweden":
            alert("The continent is Europe");
            break;
        default:
            alert("Invalid Input !");
    }
}