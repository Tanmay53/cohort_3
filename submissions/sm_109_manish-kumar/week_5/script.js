function butto(){
	student_name = document.getElementById("name").value
	var name_record = document.createElement("p")
	name_record.textContent = student_name
	
	student_grade = document.getElementById("grade").value
	var grade_record = document.createElement("p")
	grade_record.textContent = student_grade

	student_science = document.getElementById("science").value
	var science_record = document.createElement("p")
	science_record.textContent = student_science

	student_math = document.getElementById("math").value
	var math_record = document.createElement("p")
	math_record.textContent = student_math

	student_english = document.getElementById("english").value
	var english_record = document.createElement("p")
	english_record.textContent = student_english

	student_history = document.getElementById("history").value
	var history_record = document.createElement("p")
	history_record.textContent = student_history

	student_geo = document.getElementById("geo").value
	var geo_record = document.createElement("p")
	geo_record.textContent = student_geo

	document.getElementById("printhere").value =name_record
	//document.getElementById("printhere").appendChild(name_record)
	document.getElementById("printhere").appendChild(grade_record)
	document.getElementById("printhere").appendChild(science_record)
	document.getElementById("printhere").appendChild(math_record)
	document.getElementById("printhere").appendChild(english_record)
	document.getElementById("printhere").appendChild(history_record)
	document.getElementById("printhere").appendChild(geo_record)
}
