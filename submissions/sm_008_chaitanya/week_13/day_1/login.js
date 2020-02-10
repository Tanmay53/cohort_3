///////EventListener to submit the details///////
var buttonSubmit= document.getElementById("login")
buttonSubmit.addEventListener("click", function () {
    getUserData(printUser)
});

////Event Listener to reset the input fields////
var buttonReset = document.getElementById("reset")
buttonReset.addEventListener('click',reset)


/////////getUserData function to send request to api and to obtain the response////////
function getUserData(data) {
    var userEmail = document.getElementById("user_email").value;
    var userPassword = document.getElementById("user_pwd").value;

    if(userEmail=="" || userPassword==""){
        alert("Please fill all the fields!")
        return
    }

    var details = {
        email: userEmail,
        password: userPassword
    }

    details = JSON.stringify(details)
    var xhr = new XMLHttpRequest();
    var result = null;
    xhr.open("POST", 'https://reqres.in/api/login');
    xhr.setRequestHeader('content-type', 'application/json ; charset=utf-8');
    xhr.send(details)
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            data(result)
        }
        else {
            var para = document.getElementById("error_disp")
            var display_error = document.createElement('p')
            display_error.textContent = "Invalid email or password...Please Try again!"
            display_error.setAttribute("class","text-danger h2 text-center my-3 font-weight-bold")
            para.appendChild(display_error)
        }
    }

    xhr.onerror = function () {
        console.log("Error in Http Request!")
    }
}

///// printUser function to print the response obtained from api/////
function printUser(output) {
    var print_loc = document.getElementById("out")
    var disp = document.createElement('h1')
    disp.textContent = "Token: " + output['token'];
    disp.setAttribute("class", "text-success my-3 text-center")
    print_loc.appendChild(disp)
    var window = document.getElementById("form")
    window.style.display="none";
}

///// Reset Function ///// 
function reset(){
    document.getElementById("user_email").value=""
    document.getElementById("user_pwd").value=""
    document.getElementById("out").textContent=""
    document.getElementById("error_disp").textContent=""
}