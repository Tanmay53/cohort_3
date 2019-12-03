var userdata = [];
$("#getData").click(function(){
    $.ajax({
      url: "https://reqres.in/api/users?page=2",
    })
    .done(function(data) {
        userdata = data.data;
        console.log(userdata);
       printData(userdata);
      
    });
  });

  function printData(data1){
    $('tbody').html('');   
      for(var i = 0; i < data1.length; i++){
         var tr = document.createElement('tr');
         var id =  document.createElement('td');
         id.append(data1[i].id);
         var email =  document.createElement('td');
         email.append(data1[i].email);
         var firstName =  document.createElement('td');
         firstName.append(data1[i].first_name)
         var lastName =  document.createElement('td');
         lastName.append(data1[i].last_name)
         var avatar =  document.createElement('td');
         var img = document.createElement('img');
         img.setAttribute('src', data1[i].avatar);
         avatar.append(img);
         tr.append(id);
         tr.append(email);
         tr.append(firstName);
         tr.append(lastName);
         tr.append(avatar);
         $('tbody').append(tr);
        
      }
  }


