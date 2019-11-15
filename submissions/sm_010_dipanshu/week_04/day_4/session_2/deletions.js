function removeH1() {
  var h1 = document.querySelector("h1");

  var body = document.querySelector("body");

  body.removeChild(h1);
}

function removeH3() {
  var h3 = document.querySelectorAll("h3");

  var body = document.querySelector("body");

  for (var i = 0; i < h3.length; i++) {
    body.removeChild(h3[i]);
  }
}

function removeH5() {
  var h5 = document.querySelectorAll("h5");

  var headingsDiv = document.getElementById("headings");

  for (var i = 0; i < h5.length; i++) {
    headingsDiv.removeChild(h5[i]);
  }
}

function removeRed() {
  var red = document.getElementsByClassName("red");
  var len = red.length;

  var cont = document.getElementById("cont");

  for (var i = 0; i < len; i++) {
    cont.removeChild(red[0]);
  }
  // var cont = document.getElementById("cont");

  // var red = cont.querySelectorAll(".red");

  // for (var i = 0; i < red.length; i++) {
  //     cont.removeChild(red[i]);
  // }
}

function removeDivs() {
  var cont = document.getElementById("cont");

  var divs = cont.querySelectorAll("div");

  for (var i = 0; i < divs.length; i++) {
    cont.removeChild(divs[i]);
  }
}
