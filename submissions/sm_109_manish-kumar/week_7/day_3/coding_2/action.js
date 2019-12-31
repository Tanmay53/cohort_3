$("#tabhead").hide()
var arr = []
$("#click").click(function(){
	$.ajax({
		url:"http://localhost:8000/students"
	})
	.done(function(data){
		var data = JSON.stringify(data)
		var obj = JSON.parse(data)
		arr.push(obj)
		$("#tabhead").show()
	 	for(var i = 0; i<obj.length;i++){
			$("#tab").append(`<tr><td>${obj[i].id}</td><td>${obj[i].first_name}</td>
				<td>${obj[i].last_name}</td><td>${obj[i].email}</td><td>${obj[i].gender}</td>
				<td>${obj[i].english}</td><td>${obj[i].maths}</td><td>${obj[i].science}</td>
				<td>${obj[i].science + obj[i].maths + obj[i].english}</td></tr>`)
		}
	})
})

$("#sel").click(function(){
	$("#page").empty()
	var value = $("#sel").val()
	if (value == "ten") {
		$("#tab").empty()
		for(var i = 1; i < 11; i++){
			$("#page").append(`<option value = "ten${i}">${i}</option>`)
		}
	}
	else if (value == "twofive") {
		$("#tab").empty()
		$("#page").empty()
		for(var i = 1; i < 5; i++){
			$("#page").append(`<option value = "twofive${i}">${i}</option>`)
		}
	}
	else if (value == "fifty") {
		$("#page").empty()
		$("#tab").empty()
		for(var i = 1; i < 3; i++){
			$("#page").append(`<option value = "fifty${i}">${i}</option>`)
		}
	}
	else{
		$("#page").empty()
		$("#tab").empty()
		for(var i = 1; i < 2; i++){
			$("#page").append(`<option value = "hundred${i}">${i}</option>`)
		}
	}
})

$("#page").click(function(){
	var valuePage = $("#page").val()
	if(valuePage == "ten1"){
		$("#tab").empty()
		for(var i = 0; i < 10; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten2"){
		$("#tab").empty()
		for(var i = 10; i < 20; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten3"){
		$("#tab").empty()
		for(var i = 20; i < 30; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten4"){
		$("#tab").empty()
		for(var i = 30; i < 40; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten5"){
		$("#tab").empty()
		for(var i = 40; i < 50; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten6"){
		$("#tab").empty()
		for(var i = 50; i < 60; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten7"){
		$("#tab").empty()
		for(var i = 60; i < 70; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten8"){
		$("#tab").empty()
		for(var i = 70; i < 80; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten9"){
		$("#tab").empty()
		for(var i = 80; i < 90; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "ten10"){
		$("#tab").empty()
		for(var i = 90; i < 100; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}

	else if(valuePage == "twofive1"){
		$("#tab").empty()
		for(var i = 0; i < 25; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "twofive2"){
		$("#tab").empty()
		for(var i = 25; i < 50; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "twofive3"){
		$("#tab").empty()
		for(var i = 50; i < 75; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "twofive4"){
		$("#tab").empty()
		for(var i = 75; i < 100; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}

	else if(valuePage == "fifty1"){
		$("#tab").empty()
		for(var i = 0; i < 50; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
	else if(valuePage == "fifty2"){
		$("#tab").empty()
		for(var i = 50; i < 100; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}

	else if(valuePage == "hundred1"){
		$("#tab").empty()
		for(var i = 0; i < 100; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
})

//filter on the basis of gender "male"

$("#filter").click(function(){

	var gen = []
	var male = []
	for(var i = 0; i < arr[0].length; i++){
		if(arr[0][i].gender === "Female"){
			gen.push(arr[0][i])
		}
		else{
			male.push(arr[0][i])
		}
	}


	var valGender = $("#filter").val()
	if(valGender == "female"){
		$("#tab").empty()
		for(var i = 0; i < gen.length; i++){
			$("#tab").append(`<tr><td>${gen[i].id}</td><td>${gen[i].first_name}</td>
				<td>${gen[i].last_name}</td><td>${gen[i].email}</td><td>${gen[i].gender}</td>
				<td>${gen[i].english}</td><td>${gen[i].maths}</td><td>${gen[i].science}</td>
				<td>${gen[i].science + gen[i].maths + gen[i].english}</td></tr>`)
		}
	}
	else if(valGender == "male"){
		$("#tab").empty()
		for(var i = 0; i < male.length; i++){
			$("#tab").append(`<tr><td>${male[i].id}</td><td>${male[i].first_name}</td>
				<td>${male[i].last_name}</td><td>${male[i].email}</td><td>${male[i].gender}</td>
				<td>${male[i].english}</td><td>${male[i].maths}</td><td>${male[i].science}</td>
				<td>${male[i].science + male[i].maths + male[i].english}</td></tr>`)
		}
	}
	else{
		$("#tab").empty()
		for(var i = 0; i < 100; i++){
			$("#tab").append(`<tr><td>${arr[0][i].id}</td><td>${arr[0][i].first_name}</td>
				<td>${arr[0][i].last_name}</td><td>${arr[0][i].email}</td><td>${arr[0][i].gender}</td>
				<td>${arr[0][i].english}</td><td>${arr[0][i].maths}</td><td>${arr[0][i].science}</td>
				<td>${arr[0][i].science + arr[0][i].maths + arr[0][i].english}</td></tr>`)
		}
	}
})

