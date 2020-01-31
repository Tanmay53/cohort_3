$("#submit").click(function () {
    var uname = document.getElementById("name").value
    var password = document.getElementById("password").value
    console.log(uname, password)
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: JSON.stringify({ password: password, username: uname }),
        contentType: "application/json"
    })
        .done(function (reply) {
            // alert("Done.!")
            reply = JSON.parse(reply)
            console.log(reply, typeof (reply))
            var token = reply.token
            var headers = { Authorization: token }

            $.ajax({
                url: "http://localhost:8080/user/" + uname,
                beforeSend: function (xhrRequest) {
                    xhrRequest.setRequestHeader('Authorization', 'Bearer ' + token);
                },
                contentType: "application/json"
            })
                .done(function (localReply) {
                    alert("Local host responded.!")
                    localReply = JSON.parse(localReply)
                    console.log(localReply)

                    document.getElementById("div1").style.display = "none"
                    var body = document.querySelector("body")
                    function values(o) {
                        for(key in o) {
                            var div = document.createElement("div")
                            div.textContent= key + " : " + o[key]
                            body.append(div)
                        }
                    }
                    values(localReply)
        })


})
    .fail(function (reply) {
        alert("Invalid credentails. Try again.!")
    })
})