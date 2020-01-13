var data=[]

var user = {
    fName : $("#fName").val(),
    lName : $("#lName").val(),
    uName : $("#uName").val(),
    pwd : $("#pwd").val(),
    email : $("#email").val(),
    loc : $("#loc").val(),
    mob : $("#mob").val(),
    type : $("#type").val()
}

data.push(user)

var {fName="",lName="",uName="",email="",loc="",mob=null,type="" } = user


$(document).ready(function(){
    // your code goes here

    $('#add').click(function(){
        console.log(`Inside submit`)
        console.log(fName,lName,uName,email,loc,mob,type)


        var options=document.querySelector("#selectType")
        for(var i = 0 ; i < data.length; i ++)
        {
          var endUser=document.createElement("option")
          endUser.innerText= $("#fName").val()
          console.log(endUser)
          options.appendChild(endUser)
        }
        console.log(`after appending`)

       resetData()

       

        // $("#option").val(user.fName)
       
    });


    
    // $("#option").click(function(){

    //     // function fillInfo(user){
    //         if( $("#type").val() == 'user')
    //         {
    //             return `<div>
    //                     <div> Hello ${user.fName}!</div>
    //                     <p>Quote for the day 
    //                     <b> Have a great Day ahead</b></p>`
    //         }
    //         else if ( $("#type").val() == 'admin')
    //         {
    //             return `<div>
    //                     <div> Howdy ${user.fName}, welcome back </div>
    //                     <div> Registered email is ${user.email}</div>
    //                     <h2> Great Power comes with great Responsibility,
    //                              Use your admin access well</h2>
    
    //                 </div>`
    //         }
            
            
    // })
    

  });
  function resetData(){
    document.getElementById("fName").value=""
    document.getElementById("lName").value=""
    document.getElementById("uName").value=""
    document.getElementById("email").value=""
    document.getElementById("loc").value=""
    document.getElementById("mob").value=""
    document.getElementById("type").value=""
    document.getElementById("pwd").value=""
}

function fillInfo(user){
    return `<div>
                <div> Hello ${user.fName}, welcome back </div>
                <div> Registered email is ${user.email}</div>
            </div>`
}

var out = document.querySelector("table")
var row = document.createElement('tr')
out.appendChild(row)
var doc = document.createElement('td')
doc.innerHTML = fillInfo(user)
row.appendChild(doc)
