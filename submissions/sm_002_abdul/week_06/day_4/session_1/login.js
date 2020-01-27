$('#submit').click(function(){
  var body=document.querySelector('body');
  
  var table=document.createElement('table');
  var password=$('#password').val();
  var username=$('#username').val();

  var user={};

  user['password']=password;
  user['username']=username;

  $.ajax({
    method:'POST',
    url:'http://localhost:8080/auth/login',
    data:JSON.stringify(user),
    contentType:"application/json"
  })
  .done(function(data){
    var result=JSON.parse(data);
    var token=result['token'];

    $.ajaxSetup({
      beforeSend(jqXHR,somevalue){
        somevalue=token;
        jqXHR.setRequestHeader('Authorization','Bearer'+' '+somevalue);
      }
    }) 
      
    $.ajax({
      method:'GET',
      url:'http://localhost:8080/user/'+username,
    })
    .done(function(data){
      var profile=JSON.parse(data);
      body.innerHTML='';
      

      for (values in profile){
        console.log(values);
        console.log(profile[values])
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');

        col1.textContent=values;
        col2.textContent=profile[values];

        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
        body.appendChild(table);

        $('table').addClass('table text-primary')
      }
    })
  })
})