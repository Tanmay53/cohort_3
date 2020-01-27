import React from 'react'

function GithubTable(props) {
    return (
        <div className="mt-4">
            <table class="table table-striped">
  <thead className="thead-dark mt-4">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
      <th scope="col">More</th>
    </tr>
  </thead>
  <tbody>
    {
        props.arr.map((user,i) => {
            return <tr key={user.id}>
            <th scope="row">{i+1} </th>
            <td>{user.id}</td>
            <td>
                <img src={user.avatar_url} alt="User" height="120px" />
            </td>
            <td>{user.login}</td>
            <td>{user.score}</td>
            <td>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  More Info
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">More Details Of User</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>User name : {user.login}</p>
        <p><a href={user.html_url} className="text-dark">Go To User Profile</a></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </td>
          </tr>
        })
    }
    
  </tbody>
</table>
        </div>
    )
}

export default GithubTable
