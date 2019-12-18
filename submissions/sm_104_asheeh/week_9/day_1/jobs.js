$(document).ready(function(){
    getQueryList();
});

// function to get query from the API through a GET request//
function getQueryList()
{
    var queryList = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://indreed.herokuapp.com/api/jobs?q=Web%20Developer");
    xhr.send();
    xhr.onload = function()
    {
        if(xhr.status == 200)
        {
            queryList = JSON.parse(xhr.response);
            console.log(queryList);
            appendQueryList(queryList);
        }
        else
        {
            console.log("Error code is :" + xhr.status);
        }
    }
}

// appending data to select box//
function appendQueryList(queryList)
{
    queryList.forEach(function(val){
        // console.log(val);
        $("#selectJob").append("<option value = \"" + val.title + "\">" + val.title + "</option>");
        
    });
}

// display job details on clicking the search button//
var btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", displayJobs);

function displayJobs(choice)
{
    choice = document.getElementById("selectJob").value;
    // console.log(choice);
    queryList.forEach(function(ele){
        for(key in ele)
        {
            if(ele["key"] == choice)
            {
                var jobs = ele;
                console.log(jobs)
                var para = document.getElementById("displayJobs");
                para.innerHTML = jobs;
            }
        }
    })
    
}