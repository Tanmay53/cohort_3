var user = document.getElementById("user");
var login_time = document.getElementById("login-time");
var end_time = document.getElementById("end-time");
var alrt = document.getElementById("alrt");
var logout = document.getElementById("logout");

logout.addEventListener("click", logout);

user.innerHTML = localStorage.getItem("user");
var date = new Date();
var minute = date.getMinutes();
if (localStorage.getItem("minute") - minute > 5) {
  alrt.innerHTML = "Redirecting Session ended";
  setTimeout(function() {
    window.location.href = "/index.html";
  }, 2000);
} else {
  localStorage.setItem("minute", minute);
}

login_time.innerHTML = date;
date.setMinutes(minute + 5);
end_time.innerHTML = date;
