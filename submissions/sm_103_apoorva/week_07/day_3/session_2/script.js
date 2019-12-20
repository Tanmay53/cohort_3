var data
var masterData = []
window.addEventListener('load',function(){
    console.log('loading')
    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://localhost:8000/students')
    xhr.onload = function(){
        if(xhr.status == 200)
        {
            data = JSON.parse(xhr.response)
            master(data)
            createTable(masterData,0,100)
        }
        else
        {
            console.log("error occured-" + xhr.status)
        }
    }
    xhr.send()
})
console.log(masterData)
function master(arr)
{
    arr.forEach(function(ele)
    {
        masterData.push(ele)
    })

    return arr
}

//------------------------------------------------------------//

function createTable(data,start,end)
{
    $("#table").empty()
    for(i = start; i < end; i++ )
    {
        $("#table").append(`<tr><td>${data[i].id}</td><td>${data[i].first_name}</td><td>${data[i].last_name}</td><td>${data[i].email}</td><td>${data[i].gender}</td><td>${data[i].english}</td><td>${data[i].maths}</td><td>${data[i].science}</td><td>${parseInt(data[i].maths) + parseInt(data[i].science) +parseInt(data[i].english)}<td></tr>`)
    }
     
}
function pagination(num)
{
    return `<ul class="pagination float-left">
       <li class="page-item"><button class="page-link "  value="${num+1}">page-${num +1}</button></li>
    <ul>`
}

$(document).on("click",".page-link",function(){

    var value = $(this).val()
    var index = $("#pageControl").val()
    //alert(value)
    var end = parseInt(value)*parseInt(index)
    var start = (end - parseInt(index)) 
    createTable(masterData,start,end)
    
})

$("#pageControl").change(function(){
    $("#page").empty()
    var index = $("#pageControl").val()
    //console.log(index)
    var num = 100/parseInt(index)
    //console.log(num)
    for(var i = 0; i < num; i++)
    {
        $("#page").append(pagination(i))
    }
})
$("#submit").click(function(){
    event.preventDefault()
    $("#table").empty()
    var searchVal = $("#search").val().toLowerCase()
    masterData.forEach(function(elm){
        if(elm.first_name.toLowerCase().includes(searchVal) || elm.email.toLowerCase().includes(searchVal))
        {
            // alert(elm.first_name.toLowerCase())
            // alert(searchVal)
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${parseInt(elm.maths) + parseInt(elm.science) +parseInt(elm.english)}<td></tr>`)
        }
    })
})

function toLower(user)
{
    user.forEach(function(elm){
        elm.firstName = elm.first_name.toLowerCase()

        return elm
    })
    return user
}

function ascSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.first_name
        nameB = b.first_name
        if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        // return nameA - nameB
    })
    return user
}
function dscSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.first_name
        nameB = b.first_name
        if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
    })
    return user
}

$("#userSort").change(function()
{
    event.preventDefault()
    input1 = document.getElementById("userSort").value
    // alert(input1)
    if(input1 == "asc")
    {
        $("#table").empty()
        var obj = toLower(masterData)
        console.log(obj)
        var res = ascSort(obj)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${parseInt(elm.maths) + parseInt(elm.science) +parseInt(elm.english)}<td></tr>`)
        })

    }

    else if(input1 == "dsc")
    {
        $("#table").empty()
        var obj = toLower(masterData)
        console.log(obj)
        var res = dscSort(obj)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${parseInt(elm.maths) + parseInt(elm.science) +parseInt(elm.english)}<td></tr>`)
        })
    }
})

$("#genderSort").change(function()
{
    event.preventDefault()
    $("#table").empty()
    var searchVal = document.getElementById("genderSort").value
    masterData.forEach(function(elm){
        if(elm.gender.includes(searchVal))
        {
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${parseInt(elm.maths) + parseInt(elm.science) +parseInt(elm.english)}<td></tr>`)
        }
        else if(searchVal == "all")
        {
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${parseInt(elm.maths) + parseInt(elm.science) +parseInt(elm.english)}<td></tr>`)
        }
    })
})

function newMaster(user)
{
    user.forEach(function(ele){
        console.log(ele)
        var totalval = parseInt(ele.maths) + parseInt(ele.science) +parseInt(ele.english)
        ele.total = totalval
    })

    return user
}

function lowToHighSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.total
        nameB = b.total
        if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        // return nameA - nameB
    })
    return user
}

function highToLowSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.total
        nameB = b.total
        if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        // return nameA - nameB
    })
    return user
}

$("#marksSort").change(function()
{
    event.preventDefault()
    var newArr = newMaster(masterData)
    console.log(newArr)
    input1 = document.getElementById("marksSort").value
    // alert(input1)
    if(input1 == "lowToHigh")
    {
        $("#table").empty()
        var res = lowToHighSort(newArr)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${elm.total}<td></tr>`)
        })

    }

    else if(input1 == "highToLow")
    {
        $("#table").empty()
        var res = dscSort(newArr)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(`<tr><td>${elm.id}</td><td>${elm.first_name}</td><td>${elm.last_name}</td><td>${elm.email}</td><td>${elm.gender}</td><td>${elm.english}</td><td>${elm.maths}</td><td>${elm.science}</td><td>${elm.total}<td></tr>`)
        })
    }

})