import React from "react";
import Repos from "./repos";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.info
    };
    console.log(this.state);
  }

  showReposHandler = () => {
    alert("hello");
  };

  render() {
    return (
      <div className="md-col-10">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">score</th>
              <th scope="col">Show Repos</th>
              <th scope="col">View more</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td scope="col">
                    <img id="img_repos" src={item.owner.avatar_url} />
                  </td>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.score}</td>
                  <td scope="col">
                    <Repos data={item.owner.repos_url} />
                  </td>
                  <td scope="col">
                    {/* modal */}
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target={"#" + item.id}
                    >
                      Launch demo modal
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      class="modal fade"
                      id={item.id}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              <p className="lead">{item.name}</p>
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <small>{item.description}</small>
                          </div>
                          <div class="modal-footer">
                            <p>Created at:{item.created_at}</p>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
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
}

export default Table;
