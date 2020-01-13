import React from "react";

function GithubTable(props) {
  console.log("Table >", props.result);
  return (
    <div className="mt-5 pt-5" style={{ height: "400px", width: "70vw" }}>
      <table className="table table-hover table-dark offset-2 ">
        <thead>
          <tr>
            <td className="font-weight-bold">#</td>
            <td className="font-weight-bold">User Name</td>
            <td className="font-weight-bold">Id</td>
            <td className="font-weight-bold">Score</td>
            <td className="font-weight-bold">Profile Image</td>
            <td className="font-weight-bold">More Details</td>
          </tr>
        </thead>
        <tbody>
          {props.result.map((val, i) => {
            return (
              <tr>
                <th key={val.id} scope="row font-weight-bold">
                  {i + 1}
                </th>
                <td key={val.id} className="mt-5">
                  {val.login}
                </td>
                <td key={val.id} className="mt-5">
                  {val.id}
                </td>
                <td key={val.id} className="mt-5">
                  {val.score}
                </td>
                <td key={val.id} className="mt-5">
                  <img src={val.avatar_url} alt="No Image" height="120px" />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Click Here
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-dark"
                            id="exampleModalLabel"
                          >
                            See GitHub Profile...
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <a href={val.html_url}>Go to GitHub Profile</a>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GithubTable;
