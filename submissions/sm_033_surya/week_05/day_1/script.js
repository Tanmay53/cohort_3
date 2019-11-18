function dataInput() {
    var nameIn = document.getElementById("name").value
    var standardIn = document.getElementById("standardDiv").value
    // var subjectIn = document.getElementById("subjectDiv").value
    // var marksDiv = document.getElementById("marks").value
    var sum = 0
    var avg = 0
    var sci = document.getElementById("sciMarks").value
    var mat = document.getElementById("mathMarks").value
    var eng = document.getElementById("engMarks").value
    var his = document.getElementById("hisMarks").value
    var geo = document.getElementById("geoMarks").value

    // document.getElementById("sample").innerHTML = sci
    // console.log(standardIn)
    if (standardIn == "10th") {
        var trEle = document.createElement("div")
        var tenthtTable = document.getElementById("tableDiv")
        tenthtTable.appendChild(trEle)
        for (i = 0; i < 8; i++) {
            var trname = document.createElement("div")
            var divDiv = document.querySelector("#tableDiv > div:last-child")
            divDiv.appendChild(trname)
        }
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(1)").innerHTML = nameIn
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(2)").innerHTML = sci
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(3").innerHTML = mat
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(4)").innerHTML = eng
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(5)").innerHTML = his
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(6)").innerHTML = geo
        sum = Number(sci) + Number(mat) + Number(eng) + Number(his) + Number(geo)
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(7)").innerHTML = sum
        avg = sum / 5
        document.querySelector("#tableDiv > div:last-child > div:nth-of-type(8)").innerHTML = avg
    }
    if (standardIn == "9th") {
        var trEle = document.createElement("div")
        var tenthtTable = document.getElementById("tableDiv2")
        tenthtTable.appendChild(trEle)
        for (i = 0; i < 8; i++) {
            var trname = document.createElement("div")
            var divDiv = document.querySelector("#tableDiv2 > div:last-child")
            divDiv.appendChild(trname)
        }
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(1)").innerHTML = nameIn
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(2)").innerHTML = sci
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(3").innerHTML = mat
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(4)").innerHTML = eng
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(5)").innerHTML = his
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(6)").innerHTML = geo
        sum = Number(sci) + Number(mat) + Number(eng) + Number(his) + Number(geo)
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(7)").innerHTML = sum
        avg = sum / 5
        document.querySelector("#tableDiv2 > div:last-child > div:nth-of-type(8)").innerHTML = avg
    }
    if (standardIn == "8th") {
        var trEle = document.createElement("div")
        var tenthtTable = document.getElementById("tableDiv3")
        tenthtTable.appendChild(trEle)
        for (i = 0; i < 8; i++) {
            var trname = document.createElement("div")
            var divDiv = document.querySelector("#tableDiv3 > div:last-child")
            divDiv.appendChild(trname)
        }
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(1)").innerHTML = nameIn
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(2)").innerHTML = sci
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(3").innerHTML = mat
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(4)").innerHTML = eng
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(5)").innerHTML = his
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(6)").innerHTML = geo
        sum = Number(sci) + Number(mat) + Number(eng) + Number(his) + Number(geo)
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(7)").innerHTML = sum
        avg = sum / 5
        document.querySelector("#tableDiv3 > div:last-child > div:nth-of-type(8)").innerHTML = avg
    }

    if (standardIn == "7th") {
        var trEle = document.createElement("div")
        var tenthtTable = document.getElementById("tableDiv4")
        tenthtTable.appendChild(trEle)
        for (i = 0; i < 8; i++) {
            var trname = document.createElement("div")
            var divDiv = document.querySelector("#tableDiv4 > div:last-child")
            divDiv.appendChild(trname)
        }
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(1)").innerHTML = nameIn
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(2)").innerHTML = sci
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(3").innerHTML = mat
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(4)").innerHTML = eng
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(5)").innerHTML = his
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(6)").innerHTML = geo
        sum = Number(sci) + Number(mat) + Number(eng) + Number(his) + Number(geo)
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(7)").innerHTML = sum
        avg = sum / 5
        document.querySelector("#tableDiv4 > div:last-child > div:nth-of-type(8)").innerHTML = avg
    }
    if (standardIn == "6th") {
        var trEle = document.createElement("div")
        var tenthtTable = document.getElementById("tableDiv5")
        tenthtTable.appendChild(trEle)
        for (i = 0; i < 8; i++) {
            var trname = document.createElement("div")
            var divDiv = document.querySelector("#tableDiv5 > div:last-child")
            divDiv.appendChild(trname)
        }
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(1)").innerHTML = nameIn
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(2)").innerHTML = sci
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(3").innerHTML = mat
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(4)").innerHTML = eng
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(5)").innerHTML = his
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(6)").innerHTML = geo
        sum = Number(sci) + Number(mat) + Number(eng) + Number(his) + Number(geo)
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(7)").innerHTML = sum
        avg = sum / 5
        document.querySelector("#tableDiv5 > div:last-child > div:nth-of-type(8)").innerHTML = avg
    }

}
function clearAll() {
    for( i =0 ; i< 6 ; i++) {
        for( j = 1 ; j< 9 ; j++){
    
   var remove =  document.querySelectorAll("#tableDiv"+i+" > div:last-child > div:nth-of-type("+j+")")
   var divDiv = document.querySelector("#tableDiv5 > div:last-child") 
   divDiv.removeChild(remove)

}
}
}

