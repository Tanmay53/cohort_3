
    var allCards = []
    var index = 1
    var btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        var parent = document.getElementById("cards");
        parent.innerHTML = ""
        var obj = {}
        obj["id"] = index
        obj["image"] = document.getElementById("img").value;
        obj["propertyName"] = document.getElementById("propertyName").value;
        obj["description"] = document.getElementById("description").value;
        allCards.push(obj)
        index++
        table(allCards)
    })
    var card = document.getElementById("cards")
    card.addEventListener("click", deleting, false)
    function deleting(e) {
        console.log(allCards.length)
        var target = e.target.id
        var Arr = allCards.filter(function (element, target) {
            console.log(Number(element.id), Number(e.target.id))
            return Number(element.id) != Number(target);
        })
        console.log(Arr)
        allCards=Arr
        card.removeChild(e.target)
        // console.log(e.target.id)
        // table(allCards)
    }


    function table(allCards) {
        for (var i = 0; i < allCards.length; i++) {
            var card = document.getElementById("cards")
            card.style.justifyContent = "space-between"
            var div1 = document.createElement("div")
            div1.setAttribute("id", i + 1)
            div1.style.border = "1px solid grey";
            div1.style.padding = "20px";
            var img = document.createElement("img")
            img.setAttribute("src", "https://picsum.photos/seed/picsum/200/300")
            img.setAttribute("class", "positioning")
            div1.appendChild(img)
            var para = document.createElement("p")
            para.textContent = allCards[i]["propertyName"];
            para.style.textAlign = "center"
            div1.appendChild(para)
            var desc = document.createElement("div")
            desc.textContent = allCards[i]["description"];
            desc.style.textAlign = "center"
            div1.appendChild(desc)
            card.appendChild(div1)
        }

    }
