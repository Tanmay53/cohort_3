function changeH1() {
  var Fh1 = document.querySelector("#Fh1");
  Fh1.setAttribute("class", "class-h1");
}
function changeH3() {
  var Fh3 = document.querySelectorAll("h3");
  for (i = 0; i < Fh3.length; i++) {
    Fh3[i].setAttribute("class", "class-h3");
  }
}
function changeH5() {
  var Fh5 = document.querySelectorAll("h5");
  for (i = 0; i < Fh5.length; i++) {
    Fh5[i].setAttribute("class", "class-h5");
  }
}
function changeDiv() {
  var Div = document.querySelectorAll("#box div");
  for (i = 0; i < Div.length; i++) {
    Div[i].setAttribute("class", "class-div");
  }
}
function changePara() {
  var Para = document.querySelectorAll("#cont p");
  for (i = 0; i < Para.length; i++) {
    Para[i].setAttribute("class", "class-p");
  }
}
function setID() {
  var secP = document.querySelector("#temp p:nth-child(2)");
  secP.setAttribute("id", "test-2");
}
