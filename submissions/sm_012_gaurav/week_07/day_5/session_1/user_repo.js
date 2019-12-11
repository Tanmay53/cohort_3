let apiLink = localStorage.getItem("link");

window.onload = () => {
    fetch(apiLink).then(response => response.json()).then(response => createTable(response));
};

function createTable(obj) {
    console.log(obj[0]);
    let table = document.querySelector('.table');
    let html = `<thead>
                <th>ID</th>
                <th>Name</th>
                <th>Github Link</th>
                <th>Description</th>
                <th>Open Issues</th>
                </thead>
                <tbody>`;
    obj.forEach(element => {
        html += `<tr><td>${element.id}</td>
                 <td>${element.name}</td>
                 <td><a href=${element.html_url} target = "_blank">Link</a></td>
                 <td>${element.description}</td>
                 <td>${element.open_issues}</td>
                 </tr>`;
    });
    html += '</tbody>';
    table.innerHTML = html;
}