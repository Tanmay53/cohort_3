$('#click').click(function() {
    $.ajax({
            method: 'GET',
            url: "https://reqres.in/api/users/"
        })
        .done(function(obj) {
            console.log(obj.data)
            printData(obj.data);
        });
});


//function to print data
function printData(data) {

    //remove preexisting form data
    var rm = document.querySelectorAll('.rm');
    for (var i = 0; i < rm.length; i++) {
        rm[i].remove();
    }


    //append table elements
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        var id = document.createElement('td');
        id.textContent = data[i].id;
        tr.appendChild(id);
        var email = document.createElement('td');
        email.textContent = data[i].email;
        tr.appendChild(email);
        var first = document.createElement('td');
        first.textContent = data[i].first_name;
        tr.appendChild(first);
        var last = document.createElement('td');
        last.textContent = data[i].last_name;
        tr.appendChild(last);
        var avatar = document.createElement('img');
        avatar.setAttribute('src', data[i].avatar)
        tr.appendChild(avatar);
        console.log(data[i]);
        tr.setAttribute('class', 'rm')
        $('#tbody').append(tr)
    }
}

//pagination event listener
//https://reqres.in/api/users?page=3

var pageLink = document.querySelectorAll('.page-link');
for (var i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener('click', function() {
        var num = this.textContent;
        console.log(num)
        $.ajax({
                method: 'GET',
                url: "https://reqres.in/api/users/?page=" + num,
            })
            .done(function(obj) {
                console.log(obj.data)
                printData(obj.data);
            });
    });
}