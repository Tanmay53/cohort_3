
// var btn = document.getElementById("btn")
// btn.addEventListener('click',getOsData)
function sub() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8080/codenames/' + document.getElementById("os_name").value);
	xhr.send()
	// var result = null;
	// var arr = null;
	xhr.onload = function () {

		if (xhr.status == 200) {
			console.log(xhr.response)
			var result = JSON.parse(xhr.response);
			var arr = result
			// console.log(result)
			var body = document.querySelector("body")
			var table = document.createElement("table")

			var row = document.createElement("tr")

			var version = document.createElement("th")
			version.textContent = "version_number"
			row.append(version)

			var name = document.createElement("th")
			name.textContent = "version_name"
			row.append(name)

			table.append(row)
			body.append(table)

			for (var i = 0; i < arr.length; i++) {
				var row2 = document.createElement("tr")

				var col1 = document.createElement("td")
				col1.textContent = arr[i].version
				row2.append(col1)

				var col2 = document.createElement("td")
				col2.textContent = arr[i].name
				row2.append(col2)

				table.append(row2)
				body.append(table)
			}

		}
		else {
			console.log("Error Code is:" + xhr.status);
		}
	}
}
