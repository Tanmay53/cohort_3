function addData() {
    var prod = document.getElementById('prd').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('qty').value;
    var table1 = document.querySelector('table');
    var tr1 = document.createElement('tr');
    tr1.innerHTML = '<td>' + prod + '<td>' + price + '<td>' + quantity
    table1.appendChild(tr1);
    document.getElementById('prd').value="";
    document.getElementById('price').value="";
    document.getElementById('qty').value="";
}
function changeFsize(){
    var change1=document.getElementById('fsize').value;
    var td1=document.querySelectorAll('td')
    for(var i=0;i<td1.length;i++)
    {
        var td2=td1[i];
        td2.style.fontSize=change1;
    }
}
function changeFcolor(){
    var change1=document.getElementById('fcolor').value;
    var td1=document.querySelectorAll('td')
    for(var i=0;i<td1.length;i++)
    {
        var td2=td1[i];
        td2.style.color=change1;
    }
}
function changebgcolor(){
    var change1=document.getElementById('bgcolor').value;
    var tr1=document.querySelectorAll('tr')
    for(var i=2;i<tr1.length;i++)
    {   if(i%2==0){
        var tr2=tr1[i];
        tr2.style.backgroundColor=change1;
    }
    }
}
var button=document.querySelectorAll('button')
for(var i=0;i<button.length;i++)
{
    var btn=button[i]
    btn.setAttribute('class','buttons')
}