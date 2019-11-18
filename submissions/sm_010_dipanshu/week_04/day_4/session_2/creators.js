var students = [
  "Ajay",
  "Akshay",
  "Anusha",
  "Chandrashekhara",
  "Haren",
  "Hasaan",
  "Mahesh",
  "Mousumi",
  "Pavan",
  "Rahul",
  "Sumanta",
  "Venkatesh",
  "Vetrival",
  "Vijayendra"
];

function createH1() {
  var header = document.createElement("h1");
  header.textContent = "MASAI";

  var headingsDiv = document.getElementById("headings");

  headingsDiv.appendChild(header);
}

function createH2() {
  var firstH3 = document.createElement("h3");
  firstH3.textContent = "A Transformation in education!";

  var secondH3 = document.createElement("h3");
  secondH3.textContent = "Learn to earn, pay when you get.";

  var headingsDiv = document.getElementById("headings");

  headingsDiv.appendChild(firstH3);
  headingsDiv.appendChild(secondH3);
}

function createDiv() {
  var div = [];
  var cont = document.getElementById("cont");

  for (var i = 0; i < 10; i++) {
    div[i] = document.createElement("div");
    div[i].textContent = "Content " + (i + 1);
    cont.appendChild(div[i]);
  }
}

function addStudents() {
  var list = document.getElementById("vikings");
  var listItems = [];

  for (var i = 0; i < students.length; i++) {
    listItems[i] = document.createElement("li");
    listItems[i].textContent = students[i];
    list.appendChild(listItems[i]);
  }
}

function addCopyright() {
  var para = document.createElement("p");
  para.textContent = "@ masai 2019";

  var butH1 = document.querySelector("button");

  var body = document.querySelector("body");

  body.insertBefore(para, butH1);
}
