$('#submit').click(function(){
  var osName=$('#osName').val();

  $.ajax({
    method:"GET",
    url:"http://localhost:8080/codenames/"+osName,
  })
  .done(function(data){

    var osDetails=JSON.parse(data)
    var body=document.querySelector('body');
    var table=document.createElement('table');

    for (var i=0;i<osDetails['codenames'].length;i++){
      var versionDetails=osDetails['codenames'][i];
      console.log(versionDetails);
      for (values in versionDetails){
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');         
        
        
        var version=versionDetails['version'];
        var name=versionDetails['name'];
        
        col1.textContent=version;
        col2.textContent=name;
        row.appendChild(col1);
        row.appendChild(col2);
      }
      table.appendChild(row);
    }
    body.appendChild(table);
    $('body').addClass('table')
  })
})
