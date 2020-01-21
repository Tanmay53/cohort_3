
// var btn = document.getElementById("#subbtn")
// btn.addEventListener('click',getuserData)
function subbtn() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
	xhr.send()
	var result = null;
	var arr = null;
	xhr.onload = function () {

		if (xhr.status == 200) {
			console.log(xhr.response)
			var result = JSON.parse(xhr.response);
			var arr = result
			// console.log(arr)
			var body = document.querySelector("body")
			var table = document.createElement("table")

			var row = document.createElement("tr")

			var user_id = document.createElement("th")
            user_id.textContent = "userId"
            user_id.style.border = "3px solid red";
            user_id.style.color = "green";

			row.append(user_id)

			var id = document.createElement("th")
            id.textContent = "id"
            id.style.border = "3px solid red";
            id.style.color = "green";

            row.append(id)
            
            var title = document.createElement("th")
            title.textContent = "title"
            title.style.border = "3px solid red";
            title.style.color = "green";

			row.append(title)

			var pbody = document.createElement("th")
            pbody.textContent = "body"
            pbody.style.border = "3px solid red";
            pbody.style.color = "green";

			row.append(pbody)

			table.append(row)
			body.append(table)

			for (var i = 0; i < arr.length; i++) {
				var row2 = document.createElement("tr")

				var col1 = document.createElement("td")
                col1.textContent = arr[i].userId
                col1.style.border = "2px solid blue";
				row2.append(col1)

				var col2 = document.createElement("td")
                col2.textContent = arr[i].id
                col2.style.border = "2px solid blue";

                row2.append(col2)
                
                var col3 = document.createElement("td")
                col3.textContent = arr[i].title
                col3.style.border = "2px solid blue";

				row2.append(col3)

				var col4 = document.createElement("td")
                col4.textContent = arr[i].body
                col4.style.border = "2px solid blue";

				row2.append(col4)


				table.append(row2)
				body.append(table)
            }
            

		}
		else {
			console.log("Error Code is:" + xhr.status);
		}
	}
}
