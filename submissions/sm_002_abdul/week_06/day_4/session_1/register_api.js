$('#submit').click(function(){
  var userDetails={};
  userDetails['name']=$('#name').val();
  userDetails['email']=$('#email').val();
  userDetails['password']=$('#password').val();
  userDetails['username']=$('#username').val();
  userDetails['mobile']=$('#mobile').val();
  userDetails['description']=$('#description').val();
 
  $.ajax({
    method:'POST',
    url:"http://localhost:8080/auth/register",
    data:JSON.stringify(userDetails),
    contentType:"application/json"
  })
  .done(function(data) {
    var display=JSON.parse(data);

    $('#displayMessage').text(display['message']);
    $('#displayMessage').addClass('text-danger')
  })
})