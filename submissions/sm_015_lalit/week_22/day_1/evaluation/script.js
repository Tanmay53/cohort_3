var postCards=document.getElementById("postCards")
var card=document.getElementsByClassName("card")
for(let i=0;i<card.length;i++){
    card[i].addEventListener("click",function(){
        let idx=card[i].getAttribute("id")
        let clickedCard=document.getElementById(idx)
        clickedCard.style.display="none"

    })
}


function cardGen(){
    console.log("i ran")
    let url=document.getElementById("inputUrl").value
    let title=document.getElementById("inputTitle").value
    let date=document.getElementById("inputDate").value

   if(url.length==0 || title.length==0 || date.length==0){
       alert("Provide all data")
   }
   else{
    let cardDiv=document.createElement("div")
    cardDiv.setAttribute("class","card")
    cardDiv.setAttribute("id",Date.now())
    postCards.appendChild(cardDiv)
    let cardImg=document.createElement("img")
    cardImg.src=url
    cardImg.setAttribute("class","cardImage")
    cardDiv.appendChild(cardImg)
    let cardText=document.createElement("div")
    cardText.setAttribute("class","cardText")
    cardDiv.appendChild(cardText)
    let cardHead=document.createElement("p")
    cardHead.setAttribute("class","cardHeading")
    cardHead.innerHTML=title
    cardText.appendChild(cardHead)
    let cardDate=document.createElement("p")
    cardDate.setAttribute("class","cardDate")
    cardDate.innerHTML=date
    cardText.appendChild(cardDate)

    cardDiv.addEventListener("click",function(){
        let idx=cardDiv.getAttribute("id")
        let clickedCard=document.getElementById(idx)
        clickedCard.style.display="none"

    })
   }
}