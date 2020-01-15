var body= document.querySelector('body')
var submit = document.getElementById("btn")
submit.addEventListener('click', showData)

function showData() {

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            alert("Done.!")
            
            document.getElementById("div1").style.display = "none"
            var div2 = document.getElementById('div2')

            var l = result.length
            var table = document.createElement("table")
            table.style.border = "1px solid red"

            for (i = 0; i < l; i += 2) {
                var t1 = "User Id : " + result[i].userId
                var t2 = "id : " + result[i].id
                var t3 = "Title : " + result[i].title
                var t4 = "Body : " + result[i].body

                var tr = document.createElement('tr')
                var td1 = document.createElement('td')
                td1.style.border = "1px solid"

                var p1 = document.createElement('p')
                p1.textContent = t1
                var p2 = document.createElement('p')
                p2.textContent = t2
                var p3 = document.createElement('p')
                p3.textContent = t3
                var p4 = document.createElement('p')
                p4.textContent = t4

                td1.append(p1)
                td1.append(p2)
                td1.append(p3)
                td1.append(p4)
                tr.append(td1)

                var td2 = document.createElement('td')
                td2.style.border = "1px solid"

                var t11 = "User Id : " + result[i + 1].userId
                var t22 = "id : " + result[i + 1].id
                var t33 = "Title : " + result[i + 1].title
                var t44 = "Body : " + result[i + 1].body

                var p11 = document.createElement('p')
                p11.textContent = t11
                var p22 = document.createElement('p')
                p22.textContent = t22
                var p33 = document.createElement('p')
                p33.textContent = t33
                var p44 = document.createElement('p')
                p44.textContent = t44

                td2.append(p11)
                td2.append(p22)
                td2.append(p33)
                td2.append(p44)
                tr.append(td2)
                table.append(tr)
            }
            div2.appendChild(table)
            body.append(div2)

            // var div3= document.createElement('div')

            // var a1= document.createElement('a')
            // a1.textContent= "<<"
            // var a2= document.createElement('a')
            // a1.textContent= "1"
            // var a3= document.createElement('a')
            // a1.textContent= "2"
            // var a4= document.createElement('a')
            // a1.textContent= "3"
            // var a5= document.createElement('a')
            // a1.textContent= "4"
            // var a6= document.createElement('a')
            // a1.textContent= "5"
            // var a7= document.createElement('a')
            // a1.textContent= ">>"

            // div3.append(a1)
            // div3.append(a2)
            // div3.append(a3)
            // div3.append(a4)
            // div3.append(a5)
            // div3.append(a6)
            // div3.append(a7)

            // body.append(div3)
        }
        else {
            alert("Sorry.!")
            console.log(xhr.response)
        }
    }
}