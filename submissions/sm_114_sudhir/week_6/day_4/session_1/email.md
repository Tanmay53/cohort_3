$('#btnValidate').click(function() {
    
var sEmail = $('#txtEmail').val();

if ($.trim(sEmail).length == 0) {

alert('Please enter valid email address');

e.preventDefault();

}

if (validateEmail(sEmail)) {

alert('Email is valid');

}

else {

alert('Invalid Email Address');

e.preventDefault();

}

});