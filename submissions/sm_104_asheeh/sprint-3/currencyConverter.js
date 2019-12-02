$(document).ready(function(){
    getCurrency();
  });
function getCurrency(){
    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.apilayer.net/api/list?access_key=c83745d9fc73fdfb1e5a3ab022c61e6b&format=1');
    xhr.send()
    xhr.onload = function (){
        if(xhr.status == 200)
        {
           result = JSON.parse(xhr.response);
           console.log(result);
           appendCurrency(result);
        }
        else{
            console.log('Error code is:'+ xhr.status);
        }
    }
}

function appendCurrency(input)
{
    var currency = input.currencies
    for(key in currency)
    {
        $("#inputCurrency").append("<option value = "+key+">"+key+" "+currency[key]+"</option>");
    }
    for(key in currency)
    {
        $("#outputCurrency").append("<option value = "+key+">"+key+" "+currency[key]+"</option>");
    }
    var input = document.getElementById("input")
}