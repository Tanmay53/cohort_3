function checkAge() {
  var age = document.getElementById("age").value;

  if (age == "") {
    message = "Please enter your age";
  } else if (age > 18) {
    var message = "You can drive in India!";
  } else if (age < 18) {
    var message = "You can't drive in India";
  } else if (age == 18) {
    message = "You are just old enough to drive in India!";
  }
  showAlert(message, "ageResult");
}

function changeColor() {
  var color = document.getElementById("color").value;

  if (color == "") {
    showAlert("Please Choose Color", "ageColor");
  } else {
    document.getElementById("colorResult").style.color = color;
    showAlert("Color Changed", "ageColor");
  }
}

function checkCountry() {
  var country = document.getElementById("country").value;
  if (country == "") {
    showAlert("Please Select First", "resultCountry");
  } else {
    var message;
    switch (country) {
      case "India":
        message = "The continent is Asia";
        break;
      case "United States of America":
        message = "The continent is North America";
        break;
      case "China":
        message = "The continent is Asia";
        break;
      case "Nepal":
        message = "The continent is Asia";
        break;
      case "Australia":
        message = "The continent is Oceania/Australia";
        break;
      case "France":
        message = "The continent is Europe";
        break;
      case "Germany":
        message = "The continent is Europe";
        break;
      case "South Africa":
        message = "The continent is Africa";
        break;
      case "Nigeria":
        message = "The continent is Africa";
        break;
      case "Mexico":
        message = "The continent is North America";
        break;
      case "Argentina":
        message = "The continent is South America";
        break;
      case "Brazil":
        message = "The continent is South America";
        break;
      case "Canada":
        message = "The continent is North America";
        break;
      case "Singapore":
        message = "The continent is South Asia";
        break;
      case "Sweden":
        message = "The continent is Europe";
        break;
      default:
        message = "Continent is not listed";
    }
    showAlert(message, "resultCountry");
  }
}

// Show Alert
function showAlert(message, id) {
  document.getElementById(`${id}`).innerHTML = message;
  document.getElementById(`${id}`).style.display = "block";
  setTimeout(function() {
    document.getElementById(`${id}`).style.display = "none";
  }, 3000);
}
