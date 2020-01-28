var data
    window.addEventListener('load',function(){
        console.log('loading')
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/users')
        xhr.onload = function(){
            data = JSON.parse(xhr.response);
            console.log(data)
        }
        xhr.send()
    })


$('#searchByName').click(function(){
  var name=$('#name').val();
  console.log(name);

  var nameSearchResult=[];

  for (var i=0;i<data.length;i++){
    if(name==data[i].firstname || name==data[i].lastname){
      nameSearchResult.push(data[i]);
    }
  }
  console.log('name search result is',nameSearchResult)
  printData(nameSearchResult);
  
})

$('#searchByDomain').click(function(){
  var domain=$('#domain').val();
  console.log('search for value',domain);

  var domainSearchResult=[];

  for (var i=0;i<data.length;i++){
    var dataDomainArr=data[i].email.split('@')[1].split('.');
    var dataDomain=dataDomainArr[dataDomainArr.length-1];

    if (domain==dataDomain){
      domainSearchResult.push(data[i]);
    }
    
  }
  console.log('domain search result is',domainSearchResult)
  printData(domainSearchResult);
})

$('#searchByEmail').click(function(){
  var email=$('#email').val();
  console.log('searching for email',email);

  var emailSearchResult=[];

  for (var i=0;i<data.length;i++){
    if (email==data[i].email){
      emailSearchResult.push(data[i]);
    }
    
  }
  console.log('email search result is',emailSearchResult)
  printData(emailSearchResult);
})

function printData(input){
  var body=document.querySelector('body');

  var table=document.createElement('table');

  $(table).html('');

  var emailHeading=document.createElement('th');
  var firstNameHeading=document.createElement('th');
  var idHeading=document.createElement('th');
  var lastNameHeading=document.createElement('th');
  var typeHeading=document.createElement('th');

  $(emailHeading).text('E Mail');
  $(firstNameHeading).text('First Name');
  $(idHeading).text('ID');
  $(lastNameHeading).text('Last Name');
  $(typeHeading).text('User Type');

  var HeadingRow=document.createElement('tr');
  
  $(HeadingRow).append(emailHeading);
  $(HeadingRow).append(firstNameHeading);
  $(HeadingRow).append(idHeading);
  $(HeadingRow).append(lastNameHeading);
  $(HeadingRow).append(typeHeading);

  $(table).append(HeadingRow);
  $(table).addClass('table');

  for (var i=0;i<input.length;i++){
    var resEmail=document.createElement('td');//input[i].email;
    var resFirstname=document.createElement('td')//input[i].firstname;
    var resId=document.createElement('td')//input[i].id;
    var reslastname=document.createElement('td')//input[i].lastname;
    var restype=document.createElement('td')//input[i].type;

    $(resEmail).text(input[i].email);
    $(resFirstname).text(input[i].firstname);
    $(resId).text(input[i].id);
    $(reslastname).text(input[i].lastname);
    $(restype).text(input[i].type);

    var row=document.createElement('tr');

    $(row).append(resEmail);
    $(row).append(resFirstname);
    $(row).append(resId);
    $(row).append(reslastname);
    $(row).append(restype);

    $(table).append(row);
  }
  $(body).append(table);
}

