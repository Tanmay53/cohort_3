function myFunction() {
    var image1 = document.getElementById("inputImage").value
    console.log(image1)
    var text1 = document.getElementById("inputText").value
    console.log(text1)

    var obj = {
        image: image1,
        text: text1
    }
    console.log(obj.text)
    var mainDiv = document.getElementById("main")

    var img2 = document.createElement("img")
    img2.src = obj.image 
    img2.style.marginRight = "50px"
    img2.setAttribute("id","inputimage")
    mainDiv.appendChild(img2)

    var text2 = document.createElement("h3")
    text2.innerHTML = obj.text
    mainDiv.appendChild(text2)

    var text2 = document.createElement("h3")
    text2.innerHTML = "May 2019 | 3comments"
    mainDiv.appendChild(text2)
}