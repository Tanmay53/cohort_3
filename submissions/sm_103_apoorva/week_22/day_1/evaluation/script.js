$(document).ready(function()
{
    var departments = [
        {
            role : "Painting",
            description1 : "Even all the powerfull",
            description2 : "Poining has no control",
            description3 : "about the blind texts it is an",
            description4 : "almost unorthographic."
        },
        {
            role : "Architectural Design",
            description1 : "Even all the powerfull",
            description2 : "Poining has no control",
            description3 : "about the blind texts it is an",
            description4 : "almost unorthographic."
        },
        {
            role : "Construction",
            description1 : "Even all the powerfull",
            description2 : "Poining has no control",
            description3 : "about the blind texts it is an",
            description4 : "almost unorthographic."
        },
        {
            role : "House Renovation",
            description1 : "Even all the powerfull",
            description2 : "Poining has no control",
            description3 : "about the blind texts it is an",
            description4 : "almost unorthographic."
        }
    ]

    departments.forEach(function(ele,index)
        {
            // console.log(ele)
            $("#describe").append(displayCards(ele.role, ele.description1, ele.description2, ele.description3, ele.description4,index))
        })
    $("#add").click(function(){
        let role = document.getElementById("new_role").value
        if(role != ""){
            let new_obj = {
                role : role,
                description1 : "Even all the powerfull",
                description2 : "Poining has no control",
                description3 : "about the blind texts it is an",
                description4 : "almost unorthographic."
            }
            departments.push(new_obj)
            console.log(departments)
        }
        $("#describe").empty()
        departments.forEach(function(ele,index)
        {
            $("#describe").append(displayCards(ele.role, ele.description1, ele.description2, ele.description3, ele.description4,index))
        })
    })
    $(document).on("click","#delete",function(){
        var index = $(this).val()
        // alert(index)
        departments.splice(index,1)
        $("#describe").empty()
        departments.forEach(function(ele,index)
        {
            $("#describe").append(displayCards(ele.role, ele.description1, ele.description2, ele.description3, ele.description4,index))
        })
    })
})

function displayCards(role,description1,description2,description3,description4,index){
    var card = "";
    card = `<div class="card">
                <img src="https://farmersfreshco.com/wp-content/uploads/2016/06/placeholder-round.png" alt="place">
                <h1>${role}</h1>
                <h2 class="muted">${description1}</h2>
                <h2 class="muted">${description2}</h2>
                <h2 class="muted">${description3}</h2>
                <h2 class="muted">${description4}</h2>
                <button type="button" class = "btn" id = "delete" value="${index}">Delete</button>
            </div>`;
    return card;
}





