function press(){
     val = document.getElementById("os").value
    var xhr = new XMLHttpRequest();
    xhr. open('GET', 'http://localhost:8080/codenames/' + val,);
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200){
            var objects= JSON.parse(xhr.response)
            var result = objects.codenames[0].name
            document.getElementById("print1").innerHTML = result;
            var result1 = objects.codenames[0].version
            document.getElementById("ver").innerHTML = result1;

            var result2 = objects.codenames[1].name
            document.getElementById("print2").innerHTML = result2;
            var result3 = objects.codenames[1].version
            document.getElementById("ver1").innerHTML = result3;

            var result4 = objects.codenames[2].name
            document.getElementById("print3").innerHTML = result4;
            var result5 = objects.codenames[2].version
            document.getElementById("ver2").innerHTML = result5;
        }
        else{
            document.getElementById("print").innerHTML ="the error code is ",xhr.status;
        }
    }
}