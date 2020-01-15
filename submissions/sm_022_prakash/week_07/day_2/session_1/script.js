$(document).ready(function () {
    console.log("first")
    var arr = []
    var usersList = []

    $('#submit').click(function () {
        event.preventDefault();
        console.log("second");
        var first = $('#first-name').val();
        var last = $('#last-name').val();
        var username = $('#user-name').val();
        var password = $('#password').val();
        var address = $('#address').val();
        var phoneno = $('#phone-no').val();
        var type = $('#type').val();

        //appending users to the users arrays
        usersList.push(first)


        //constructor function object 
        function GetDetails(first = 'default', last = 'default', username, password, address = 'default', phoneno = 'default', type) {
            return {
                first: first,
                last: last,
                username: username,
                password: password,
                address: address,
                phoneno: phoneno,
                type: type
            }

        }
        var user = new GetDetails(first, last, username, password, address, phoneno, type)
        arr.push(user)
        console.log(arr)
        
        // for(var i=0; i<usersList.length; i++){

        // }
       
       
    })
})
