//developer mode
const verbose = 1;

//array  containg data of all the blog posts
let data = [];

//adding data to  the main data array on  click
document.getElementById("submit").addEventListener("click", function () {

    console.log("hello");
    let obj = {};

    obj["avatar"] = document.getElementById("avatar").value;
    obj["date"] = document.getElementById("date").value;
    obj["title"] = document.getElementById("title").value;

    console.log(obj);

    //adding data object
    data.push(obj);

    console.log(data);
})


console.log(data);
