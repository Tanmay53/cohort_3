$(document).ready(function () {
    
    $("#btn_post").click(function () {
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/",
        })
            .done(function (output) {

                var tab = document.createElement('table')
                for (var i = 0; i < output.length; i++) {
                    var row_1 = document.createElement('tr')
                    var col_1 = document.createElement('th')
                    col_1.textContent = "userId"
                    var col_2 = document.createElement('td')
                    col_2.textContent = output[i]["userId"]
                    var row_2 = document.createElement('tr')
                    var col_3 = document.createElement('th')
                    col_3.textContent = "id"
                    var col_4 = document.createElement('td')
                    col_4.textContent = output[i]["id"]
                    var row_3 = document.createElement('tr')
                    var col_5 = document.createElement('th')
                    col_5.textContent = "body"
                    var col_6 = document.createElement('td')
                    col_6.textContent = output[i]["body"]
                    var row_4 = document.createElement('tr')
                    var col_7 = document.createElement('th')
                    col_7.textContent = "title"
                    var col_8 = document.createElement('td')
                    col_8.textContent = output[i]["title"]
                    row_1.append(col_1)
                    row_1.append(col_2)
                    row_2.append(col_3)
                    row_2.append(col_4)
                    row_3.append(col_5)
                    row_3.append(col_6)
                    row_4.append(col_7)
                    row_4.append(col_8)
                    tab.append(row_1, row_2, row_3, row_4)
                }
                tab.setAttribute('class', 'table table-dark table-bordered table-responsive table-responsive-sm table-responsive-md table-responsive-lg  m-5 col-lg-10 col-md-10 col-12')
                $("#data_here").append(tab)

            });
    });

});

