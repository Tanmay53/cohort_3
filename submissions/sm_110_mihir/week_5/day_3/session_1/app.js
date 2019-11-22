var username = localStorage.getItem("username");
var userEle = document.getElementById("username");
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
sessionStorage.setItem("hour", hour);
sessionStorage.setItem("minutes", minutes);

console.log(hour, minutes);
if (username == "mihir") {
    userEle.textContent = username;
    var loginTimeEle = document.getElementById("loginTime");
    loginTimeEle.textContent =
        "Login Time :- HRS: " + hour + " | Minutes: " + minutes;
    var endTime = document.getElementById("endTime");
    var endMin = Number(sessionStorage.getItem("minutes")) + 5;
    if (endMin < sessionStorage.getItem("minutes"))
        endTime.textContent =
            "Session End Time= HRS: " +
            localStorage.getItem("hour") +
            "   | Mins: " +
            endMin;
    else {
        alert("Session expired");
        window.location.href = "index.html";
    }
} else {
    alert("wrong username");
    window.location.href = "index.html";
}
