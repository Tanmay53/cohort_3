var body = document.querySelector("body")


var image1 = document.getElementById("image").value
console.log(image1)
var text1 = document.getElementById("txt").value
console.log(text1)

var obj = {
    image:image1,
    text:text1
}
console.log(obj.text)
function myFunction() { 
var cont = document.getElementById("main")


var img2 = document.createElement("img")
img2.src = obj.image
cont.appendChild(img2)


var text2 = document.createElement("h3")
text2.innerHTML = obj.text
cont.appendChild(text2)

body.appendChild(cont)
}