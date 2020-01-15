allUserData=[]
// sortedAz=[]
// sortedZa=[]
onlyadminData=[]
onlyuserData=[]

$("#tableX").hide()

 
    


// function insertData(a,b,c,d,e,f,g) {
//     var tRow = document.createElement("tr")
//     tableX.appendChild(tRow)

//     var tCol1 = document.createElement("td")
//     tCol1.textContent = a
//     tRow.appendChild(tCol1)

//     var tCol2 = document.createElement("td")
//     tCol2.textContent = b
//     tRow.appendChild(tCol2)

//     var tCol3 = document.createElement("td")
//     tCol3.textContent = c
//     tRow.appendChild(tCol3)
    
//     var tCol4 = document.createElement("td")
//     tCol4.textContent = d
//     tRow.appendChild(tCol4)
    
//     var tCol5 = document.createElement("td")
//     tCol5.textContent = e
//     tRow.appendChild(tCol5)

//     var tCol6 = document.createElement("td")
//     tCol6.textContent = f
//     tRow.appendChild(tCol6)

//     var tCol7 = document.createElement("td")
//     tCol7.textContent = g
//     tRow.appendChild(tCol7)

//     var tCol8 = document.createElement("button")
//     tCol8.textContent = "Delete"
//     tCol8.setAttribute("class", "btn bg-danger btn-sm my-2")
//     tRow.appendChild(tCol8)
//     $(tCol8).click(function () {
//         $(this).parent().remove()
//     })
// }
function reloadOptions(){
    $("#userSelect .tempOption").remove()
    for (i=0;i<allUserData.length;i++){
    $("#userSelect").append(`<option class="tempOption" value="${allUserData["userName"]}">${allUserData["userName"]}</option>`)

    }
}


function presentIt(username,fname,lname,email,address,phone,usrt){
    $("#tableX").append(`<tr><td class="usr">${username}</td><td>${fname}</td><td>${lname}</td><td>${email}</td><td>${address}</td><td>${phone}</td><td>${usrt}</td><td><button class="btn bg-danger btn-sm">Delete</button></td>`)
    $("td > button").click(function () {
   userText= $(this).parent().siblings(".usr").text()
   allUserData=allUserData.filter(function(ele){
       return ele.userName!=userText
    })
    // reloadOptions()


    onlyadminData=onlyadminData.filter(function(ele){
    return ele.userName!=userText
    })
    onlyuserData=onlyuserData.filter(function(ele){
    return ele.userName!=userText
    })
    $(this).parent().parent().remove()
    })
}

function getStarted (){
var Fname=document.getElementById("iFname").value
var Lname=document.getElementById("iLname").value
var Username=document.getElementById("iUsername").value
var Password=document.getElementById("iPassword").value
var Email=document.getElementById("iEmail").value
var Address=document.getElementById("iAddress").value
var Phone=document.getElementById("iPnumber").value
var radioBtn=document.getElementsByName("userType")
var Usertype
    if(radioBtn[0].checked){
        Usertype=radioBtn[0].value
    }
    else{Usertype=radioBtn[1].value}



function userData (Fname,Lname,Username,Password,Email,Address,Phone,Usertype){
    this.firstName=Fname || "Not provided";
    this.lastName=Lname || "Not provided";
    this.userName=Username;
    this.pswd=Password;
    this.email=Email;
    this.address=Address || "Not provided";
    this.phoneNum=Phone || "Not provided";
    this.usertype=Usertype
}

UserInfo= new userData(Fname,Lname,Username,Password,Email,Address,Phone,Usertype)

if (UserInfo["usertype"]=="admin"){
    onlyadminData.push(UserInfo)
}
else(onlyuserData.push(UserInfo))

// sortedAz= allUserData
// sortedAz.sort(function(a, b) {
//       if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
//         return -1;
//       } else if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
//         return 1;
//       }
//       return 0;
//     });

//     sortedZa= allUserData
//     sortedZa.sort(function(a, b) {
//           if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
//             return 1;
//           } else if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
//             return -1;
//           }
//           return 0;
//         });
  
// })
// Appending usernames in selector
$("#tableX").show()
presentIt(UserInfo["userName"],UserInfo["firstName"],UserInfo["lastName"],UserInfo["email"],UserInfo["address"],UserInfo["phoneNum"],UserInfo["usertype"])
// $("#tableX").append(`<tr><td class="usr">${UserInfo["userName"]}</td><td>${UserInfo["firstName"]}</td><td>${UserInfo["lastName"]}</td><td>${UserInfo["email"]}</td><td>${UserInfo["address"]}</td><td>${UserInfo["phoneNum"]}</td><td>${UserInfo["usertype"]}</td><td><button class="btn bg-danger btn-sm">Delete</button></td>`)
// $("td > button").click(function () {
//    userText= $(this).parent().siblings(".usr").text()
//    allUserData=allUserData.filter(function(ele){
//        return ele.userName!=userText
//    })
//     $(this).parent().parent().remove()
// })
// insertData(UserInfo["userName"],UserInfo["firstName"],UserInfo["lastName"],UserInfo["email"],UserInfo["address"],UserInfo["phoneNum"],UserInfo["usertype"])

$("#userSelect").append(`<option class="tempOption" value="${UserInfo["userName"]}">${UserInfo["userName"]}</option>`)
// $("#userSelect").append("<option>"+UserInfo["userName"]+"</option>")


allUserData.push(UserInfo)
// reloadOptions()
console.log(allUserData)

// var adminInData=allUserData.filter(function(ele){
//     return ele.usertype=="admin"
// })
// var userInData=allUserData.filter(function(ele){
//     return ele.usertype=="user"
// })
// onlyadminData.push(adminInData)
// onlyuserData.push(userInData)



}



submitData.addEventListener("click",function(){
var Username=document.getElementById("iUsername").value
var Password=document.getElementById("iPassword").value
var Email=document.getElementById("iEmail").value
    if (Username==""||Password==""||Email==""){
        alert("Kindly fill the required fields properly")
    }
    else{
        getStarted()
    }
})


function dropAction(event){
    var selectedOption = event.target.value
    var selectedUser=allUserData.filter(function(ele){
        return ele.userName==selectedOption
    })
    console.log(selectedUser[0])
    $("#userInfo > p").remove()
    $("#userInfo").append(`<p class="mt-3 text-center">User's name is ${selectedUser[0].firstName} ${selectedUser[0].lastName}, he lives in ${selectedUser[0].address}, his email id is ${selectedUser[0].email}. His usertype is ${selectedUser[0].usertype}</p>`)
}

function sortData(event){
    var selectedOption=event.target.value
    if (selectedOption=="des"){
        allUserData=allUserData.sort(function(a, b) {
            if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
              return 1;
            } else if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
              return -1;
            }
            return 0;
          });
    } 
    else if (selectedOption=="asc"){
        allUserData=allUserData.sort(function(a, b) {
            if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
              return -1;
            } else if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
              return 1;
            }
            return 0;
          });
        
    }
    $("#tableX > tr").remove()
        for (i=0;i<allUserData.length;i++){
            // insertData(allUserData[i]["userName"],allUserData[i]["firstName"],allUserData[i]["lastName"],allUserData[i]["email"],allUserData[i]["address"],allUserData[i]["phoneNum"],allUserData[i]["usertype"])
            presentIt(allUserData[i]["userName"],allUserData[i]["firstName"],allUserData[i]["lastName"],allUserData[i]["email"],allUserData[i]["address"],allUserData[i]["phoneNum"],allUserData[i]["usertype"])
}
}
function filter(event){
    var selectedOption = event.target.value
    if (selectedOption=="admin"){
        $("#tableX > tr").remove()
        for (i=0;i<onlyadminData.length;i++){
        // insertData(onlyadminData[i]["userName"],onlyadminData[i]["firstName"],onlyadminData[i]["lastName"],onlyadminData[i]["email"],onlyadminData[i]["address"],onlyadminData[i]["phoneNum"],onlyadminData[i]["usertype"])
        presentIt(onlyadminData[i]["userName"],onlyadminData[i]["firstName"],onlyadminData[i]["lastName"],onlyadminData[i]["email"],onlyadminData[i]["address"],onlyadminData[i]["phoneNum"],onlyadminData[i]["usertype"])

     }
    }
    else if(selectedOption=="user"){
        $("#tableX > tr").remove()
        for (i=0;i<onlyuserData.length;i++){
            // insertData(onlyuserData[i]["userName"],onlyuserData[i]["firstName"],onlyuserData[i]["lastName"],onlyuserData[i]["email"],onlyuserData[i]["address"],onlyuserData[i]["phoneNum"],onlyuserData[i]["usertype"])
            presentIt(onlyuserData[i]["userName"],onlyuserData[i]["firstName"],onlyuserData[i]["lastName"],onlyuserData[i]["email"],onlyuserData[i]["address"],onlyuserData[i]["phoneNum"],onlyuserData[i]["usertype"])

         }
    }
    else if (selectedOption=="all"){
        $("#tableX > tr").remove()
        for (i=0;i<allUserData.length;i++){
            // insertData(allUserData[i]["userName"],allUserData[i]["firstName"],allUserData[i]["lastName"],allUserData[i]["email"],allUserData[i]["address"],allUserData[i]["phoneNum"],allUserData[i]["usertype"])
            presentIt(allUserData[i]["userName"],allUserData[i]["firstName"],allUserData[i]["lastName"],allUserData[i]["email"],allUserData[i]["address"],allUserData[i]["phoneNum"],allUserData[i]["usertype"])

         }
    }
}


