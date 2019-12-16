// event.preventDefault();
var userEle = document.getElementById("usernameDash");
var username = sessionStorage.getItem("sessionUser");
var password = sessionStorage.getItem("sessionPass");
// redirect to login page if user not validated
if (username == null) {
    alert("please login");
    window.location.href = "index.html";
} else {
    var date = new Date();
    var currMin = date.getMinutes();
    var loginHr = sessionStorage.getItem("hour");
    var loginMin = sessionStorage.getItem("minutes");
    var loginTimeEle = document.getElementById("loginTime");
    var endTime = sessionStorage.getItem("endTime");
    var endEle = document.getElementById("endTime");
    if (currMin < endTime) {
        userEle.textContent = "Howdy, " + username;
        console.log("hello");
        loginTimeEle.textContent =
            "Login Time :- HRS: " + loginHr + " | Minutes: " + loginMin;
        endEle.textContent =
            "End time:- HRS:" + loginHr + "| Minutes: " + endTime;
    } else {
        alert("Session expired");
        sessionStorage.removeItem("minutes");
        sessionStorage.clear();
        window.location.href = "index.html";
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
