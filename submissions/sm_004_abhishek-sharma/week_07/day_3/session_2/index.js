$(document).ready(function () {
    // your code goes here
    var data
    $("#show").click(callApi)
    function callApi() {
        console.log('loading')
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8000/students');
        xhr.send()
        xhr.onload = function () {
            if (xhr.status == 200) {
                var temp = xhr.response
                data = JSON.parse(temp)
                console.log(data)
                createTable(data)

            }
            else {
                console.log("Error Code is:" + xhr.status)
            }
        }
    }

    // Calculates The Total marks of each student
    function calculateTotal(eng, math, sci){
        return (eng + math + sci)
    }

    function createTable(data){
        $("#userTable").empty()
        for(var i = 0; i < data.length; i++){
            // console.log(data[i])

            var {id, first_name, last_name, email, gender, english, maths, science} = data[i]
            var total = calculateTotal(english, maths, science)
            $("#userTable").append(`<tr id = ${i}>
                                        <td> ${id} </td>
                                        <td> ${first_name} </td>
                                        <td> ${last_name} </td>
                                        <td> ${email} </td>
                                        <td> ${gender} </td>
                                        <td> ${english} </td>
                                        <td> ${maths} </td>
                                        <td> ${science} </td>
                                        <td> ${total} </td>
                                        <td> <button type="submit" class="btn btn-danger deleteUser">Delete User</button> </td>
                                    </tr>`)
        }
    }
    let perPage = 10
    let activePage = 1

    // function pagination(page){
    //     let total = data.length
    //     let pageCount = Math.ceil(total/perPage)
        
    // }

    // function changePage(){

    // }




    window.addEventListener("load", ()=>{
        $("#pageSelect").change(()=>{
            perPage = Number($("#pageSelect").val())
            pagination(activePage)
        })
    })

    // $(".deleteUser").click(function(){
    //     console.log("123")
    //     var tr = this.$("tr")
    //     var id = this.tr.id
    //     console.log(id)
    // })

});