function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    var password = document.getElementById("password");
    localStorage.setItem("password", password);
    window.location.href = "dash.html";
}
