function changeH1() {
  var elem = document.querySelector("h1");
  elem.style.color = "red";
}

function changeH3() {
  var elem = document.querySelectorAll("h3");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.color = "green";
  }
}

function changeH5() {
  var elem = document.querySelectorAll("h5");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.color = "blue";
  }
}

function changeGClass() {
  var elem = document.getElementsByClassName("green");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.color = "green";
  }
}
function changeBClass() {
  var elem = document.getElementsByClassName("blue");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.color = "blue";
  }
}

function changeRClass() {
  var elem = document.getElementsByClassName("red");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.color = "red";
  }
}
