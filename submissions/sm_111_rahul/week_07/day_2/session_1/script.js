$('#register').click(function(){
    saveData();
    $("#selectUsers").empty();
    appendUser(arr);
});
var arr = [];
function saveData(){
   
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var userN = $('#userN').val();
    var pass = $('#pass').val();
    var email = $('#email').val();
    var add = $('#add').val();
    var phone = $('#phone').val();
    var userType = $('#userType').val();

    function Userdata(first, last, userName, password, email, add, phone, userType ){
        this.firstName = first || "firstname";
        this.lastName = last || "lastname";
        this.user = userName || "username";
        this.pass = password ||"******";
        this.email = email || "abc@gmail.com";
        this.add = add || "abc road, lucknow";
        this.phone = phone || 1111111111;
        this.userType = userType || "user/admin";
    }

    var newUserData = new Userdata(fname , lname, userN, pass, email, add, phone, userType);
    arr.push(newUserData);
    console.log(arr);
  
}

function appendUser(input){
     input.forEach(function(ele){
    
            
        
          
       // console.log(ele)
        $("#selectUsers").append(
            "<option value = " + ele.firstName + ">" + ele.firstName + " " +ele.lastName + "</option>"
          );
       })
    }  
    
$('#selectUsers').change(function(){
    var select = $('#selectUsers').val();
    console.log(select)
    arr.forEach(function(ele){
        if(select == ele.firstName && ele.userType == "user"){
            $("#displayUsers").html(fillInfoUser(ele));
            console.log(ele);
        }
        if(select == ele.firstName && ele.userType == "admin"){
            $("#displayUsers").html(fillInfoAdmin(ele)) ;
            console.log(ele);
        }
        
    })
})    

function fillInfoUser(obj1) {
  return `<div>
                <div> Your Name is ${obj1.firstName} ${obj1.lastName} </div>
                <div> Registered email is ${obj1.email}</div>
                <div> Phone number is ${obj1.phone}</div>
                <div> User Type is ${obj1.userType}</div>
            </div>`;
}

function fillInfoAdmin(obj2) {
  return `<div>
                <div> Your Name is ${obj2.firstName} ${obj2.lastName} </div>
                <div> User Type is ${obj2.userType}</div>
          </div>`;
}    


