$("#post-Btn").click(function(){
    alert('working')
    var e = $("#Email").val();
    console.log(e)
    var p = $("#inputPassword").val();
    console.log(p)
    $.ajax({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:{'email':e,
                'password':p}
    })
    .done(function(data){
        console.log(data)
    });
    $("#form").hide();
});

$("#get-btn1").click(function(){
    $.ajax({
      url: "https://reqres.in/api/users?page=1",
    })
    .done(function(data) {
      console.log(data);
      var d = data.data
      console.log(d)

      for(i=0;i<d.length;i++){
          var tr = document.createElement('tr')
          var th = document.createElement('th')
          th.setAttribute('scope','col')
          th.innerText = d[i] + 1
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)

          var tr = document.createElement('tr')
          var th = document.createElement('th')
          th.setAttribute('scope','col')
          th.innerText = d[i]['id']
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)

          var tr = document.createElement('tr')
          var th = document.createElement('th')
          th.setAttribute('scope','col')
          th.innerText = d[i]['email']
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)

          var tr = document.createElement('tr')
          var th = document.createElement('th')
          th.setAttribute('scope','col')
          th.innerText = d[i]['first_name']
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)

          var tr = document.createElement('tr')
          var th = document.createElement('th')
          th.setAttribute('scope','col')
          th.innerText = d[i]['last_name']
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)

          var tr = document.createElement('tr')
          var th = document.createElement('th')
          var im = document.createElement('img')
          th.setAttribute('scope','col')
          im.setAttribute('src',d[i]['avatar'])
          var t = document.getElementById('#table1')
          t.append(tr)
          tr.append(th)
          im.append(th)
      }
    });
  });

  $("#get-btn2").click(function(){
    $.ajax({
      url: "https://reqres.in/api/users?page=2",
    })
    .done(function(data) {
      console.log(data);
    });
  });

//   $('#page1').hide()
  $('#page2').hide()
