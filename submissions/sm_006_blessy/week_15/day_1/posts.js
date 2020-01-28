$('#submit').click(function () {

    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos"
    })
        .done(function (data) {
        
         console.log(JSON.stringify(data))
            // var table = document.querySelector(".table")
            //  for (var i = 0; i < data["todos"]; i++) {
            //     var tr = document.createElement("tr")
            //     table.append(tr)
            //     var th = document.createElement("#userid")
            //     th.innerHTML = data["todos"][i].userId
            //     table.appendChild(th)
            //     var th1 = document.createElement("#id")
            //     th.innerHTML = data["todos"][i].id
            //     table.appendChild(th1)
            //     var th2 = document.createElement("#title")
            //     th.innerHTML = data["todos"][i].title
            //     table.appendChild(th2)
            //     var th3 = document.createElement("#completed")
            //     th.innerHTML = data["todos"][i].completed
            //     table.appendChild(th3)
            // };
            var id = $('<th></th>').text('user id')
            $('#table').append(id);
            var data1 = $('<th></th>').text(data);
            $('#table').append(data1);
            var id1 = $('<th></th>').text('id')
            $('#table').append(id1);
            var label3 = $('<th></th>').text('title')
            $('#table').append(label3);
            var id3 = $('<th></th>').text('completed')
            $('#table').append(id3);
            
           
        })
})