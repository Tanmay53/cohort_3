function fetchRepoData() {
    let url = localStorage.getItem('url')
    // fetch the data
    fetch(url).then((res) => {
        return res.json()
    }).then((res) => {
        $('#idUrl').text(url)
        loadData(res)
    })
}

function loadData(repos) {
    let rows = ''
    repos.forEach(row => {
        rows = rows + `<tr>
                            <td >${row.name}</td>
                            <td >${row.created_at}</td>
                            <td >${row.default_branch}</td>
                            <td >${row.forks_count}</td>
                            <td >${row.has_wiki}</td>
                            <td >${row.open_issues}</td>
                       </tr>`
    });
    let table = `<table class='table'>
                    <tr>
                        <th>Repository Name</th>
                        <th>Created At</th>
                        <th>Default Branch</th>
                        <th>Forks Count</th>
                        <th>Has Wiki</th>
                        <th>Open Issues</th>
                    </tr>
                    ${rows}
                 </table>`

    $('#tableRepos').html(table)                 
}


$(document).ready(() => {
    fetchRepoData()
})