var arr = []

$("#sub").click(function(){
	event.preventDefault()
	var name = $("#fname").val()
	var username = $("#username").val()
	var pass = $("#password").val()
	var email = $("#email").val()
	var add = $("#address").val()
	var phone = $("#mobile").val()
	
	var person = {
			fullname : name,
			username : username,
			password : pass,
			email : email,
			address : add,
			phone : phone
		}
	if(arr.length == 0){
		arr.push(person)
		$("#userList").append(`<option value="${username}"> ${name} </option>`)
	}
	else{
		for(var i = 0; i<arr.length;i++){
			if(name === arr[i].username){
				console.log(username, arr[i].username)
			}
			else{
				arr.push(person)
				$("#userList").append(`<option value="${username}"> ${name} </option>`)
			}
		}
	}
	$("#fname").val("")
	$("#username").val("")
	$("#password").val("")
	$("#email").val("")
	$("#address").val("")
	$("#mobile").val("")
})

// $("#userList").change(function(){
// 	var userNameForShow = $("#userList").val()
// 	alert(userNameForShow)
// })

