$("#search").click(function(){
    var type = $("#job").val()
    console.log(type)
    var baseUrl = "https://indreed.herokuapp.com/api/jobs?q="
    var url = baseUrl + type
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET',url);
    xhr.send()
    xhr.onload = function (){
    if(xhr.status == 200){
        var obj = JSON.parse(xhr.response)
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
    // $.ajax({
    //     url: url,
    //   })
    //   .done(function(data) {
    //     var obj = data;
    //   });
    obj.forEach(function(key)
    {
      var table = document.getElementById("table")
      var tr = document.createElement("tr")
      var td1 = document.createElement("td")
      var td2 = document.createElement("td")
      var td3 = document.createElement("td")
      var td4 = document.createElement("td")
      var td5 = document.createElement("td")
      var td6 = document.createElement("td")
      td1.innerHTML = key.id
      td2.innerHTML = key.title
      td3.innerHTML = key.url
      td4.innerHTML = key.company
      td5.innerHTML = key.location
      td6.innerHTML = key.summary
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      table.appendChild(tr)
    })
}
})

