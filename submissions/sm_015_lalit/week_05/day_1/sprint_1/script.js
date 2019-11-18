// var Student = {
//         Name: "Sample",
//         Grade: 0,
//         Science_Marks: 0,
//         Maths_Marks: 0,
//         English_Marks: 0,
//         History_Marks: 0,
//         Geography_Marks: 0
// }


function addtodb(){
  var Name=document.getElementById("Name").value
  var Grade=document.getElementById("Grade").value
  var Science=document.getElementById("Science").value
  var Maths=document.getElementById("Maths").value
  var English=document.getElementById("English").value
  var History=document.getElementById("History").value
  var Geography=document.getElementById("Geography").value
  var target1=document.getElementById("inputcol1")
  var newdata1 = document.createElement("td1")
  newdata1.innerHTML = Name
  target1.appendChild(newdata1)
  var target2=document.getElementById("inputcol2")
  var newdata2 = document.createElement("td2")
  newdata2.innerHTML = Grade
  target2.appendChild(newdata2)
  var target3=document.getElementById("inputcol3")
  var newdata3 = document.createElement("td3")
  newdata3.innerHTML = Science
  target3.appendChild(newdata3)
  var target4=document.getElementById("inputcol4")
  var newdata4 = document.createElement("td4")
  newdata4.innerHTML = Maths
  target4.appendChild(newdata4)
  var target5=document.getElementById("inputcol5")
  var newdata5 = document.createElement("td5")
  newdata5.innerHTML = English
  target5.appendChild(newdata5)
  var target6=document.getElementById("inputcol6")
  var newdata6 = document.createElement("td6")
  newdata6.innerHTML = History
  target6.appendChild(newdata6)
  var target7=document.getElementById("inputcol7")
  var newdata7 = document.createElement("td7")
  newdata7.innerHTML = Geography
  target7.appendChild(newdata7)
}




//Name+" "+Grade+" "+Science+" "+Maths+" "+English+" "+History+" "+Geography+"\n"