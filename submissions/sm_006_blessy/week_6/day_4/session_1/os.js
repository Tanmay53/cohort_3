
  $("#btn").click(function () {
    var os = $('#os').val();
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/codenames/' + os
    })
        .done(function (data) {
            var osdata = JSON.parse(data)
            var tble = document.querySelector(".table")
            for (var i = 0; i < osdata["codenames"].length; i++) {
                var tr = document.createElement("tr")

                tble.append(tr)
                var th = document.createElement("th")
                th.innerHTML = osdata["codenames"][i].name
                tble.appendChild(th)
                var th1 = document.createElement("th")
                th1.innerHTML = osdata["codenames"][i].version
                tble.appendChild(th1)
            };
        });
});