


$("#submit").click(function () {

    var search = $("#search").val()
    console.log(search)

    $.ajax({



        //   url: "http://www.omdbapi.com/?s="+search+"&apikey=5d18c3cd",

        //   url: "http://www.omdbapi.com/?s=sherlock&type=movie&apikey=5d18c3cd",

        url: "http://www.omdbapi.com/?apikey=5d18c3cd&s=" + search,

    })
        .done(function (data) {
            console.log(data);
            showdata(data)



        })

        .fail(function (data) {
            // alert( "error" );
            // result = JSON.parse(data)
            // console.log(result)
            console.log(data)
            console.log("error message is: " + data.responseText + " and " + " error code is : " + data.status)
            var err = "error message is: " + data.responseText + " and " + " error code is : " + data.status

            showerr(err)

        })
});


function showdata(data) {


console.log(data)
// data=JSON.parse(data)
// console.log(data)
$("#selectPages").change(function () {
    var selpage = $("#selectPages").val()
    console.log(selpage)


    var totalPages = Math.ceil(data.length / selpage)
    console.log(totalPages)


    var div = document.getElementById("pageNum")

    div.innerHTML = ""

    for (var i = 1; i <= totalPages; i++) {

        var button = document.createElement('button');
        button.setAttribute("value", i)
        button.addEventListener("click", displayPages)

        button.textContent = i;
        div.append(button);

    }
})

}
