var input=[]

function addnewcard(){
    

   
   var valueimg=document.getElementById("imgg").value
    valuename=document.getElementById("name").value
    valuepsition=document.getElementById("postitn").value

   var obj={
       img:valueimg,
       name:valuename,
       posi:valuepsition
   }

   table(obj)
   
}


function table(obj){
    console.log(obj.img)
    var carddiv = document.getElementById('output');
    carddiv.setAttribute('class', 'container-fluid row  m-1')
    
    carddiv.style.backgroundColor = "white";
    
    carddiv.style.width = "350px";
    carddiv.style.marginLeft = "30px";
   

    var cardAddCol = document.createElement('div');
    var cardAdd = document.createElement('div');
    var image = document.createElement('img');
    var cardDiv = document.createElement('div');
    cardAdd.setAttribute('class','card');
    cardAdd.setAttribute("class","borderblack")
    cardAdd.setAttribute('class',"mt-5");
    image.setAttribute("src", obj.img);
    image.setAttribute("class",'card-img-top');
    image.style.margin = "40px";
    cardDiv.setAttribute('class',"card-body");
    cardDiv.setAttribute('class',"text-center");
    var cardH4 = document.createElement('h4');
    cardH4.setAttribute('class',"card-title");
        cardH4.innerHTML=obj.name;
        var pp= document.createElement('p');
        pp.setAttribute('class',"card-text-center");
        pp.innerHTML = obj.posi;
        cardAdd.appendChild(image);
        cardDiv.appendChild(cardH4);
        cardDiv.appendChild(pp);
        cardAddCol.appendChild(cardAdd);
        carddiv.appendChild(cardAddCol);
        carddiv.appendChild(cardDiv)

        var btn = document.createElement("button")
        btn.innerText="Delete"
        btn.setAttribute("onclick","del()")
        btn.style.marginLeft="150px"
        btn.style.backgroundColor="red"
        btn.style.padding="10px"
        carddiv.appendChild(btn)
}

function del(){
    
    var show = document.getElementById('output');
    show.innerHTML=""
}