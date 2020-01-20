import React from "react";
import { store } from "../../Redux/store";
import { connect } from "react-redux";
import { delUser } from "../../Redux/UserAction";
import { Link } from "react-router-dom";

function ViewProducts(props) {
  console.log(props);
  let userData = store.getState().user.user;
  if (userData.length) {
    return (
      <div>
        <h2>Show Data</h2>
        <table class="table table-striped text-light">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Cibil Score</th>
              <th scope="col">Loan Amount</th>
              <th scope="col">Type</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(item => {
              return (
                <tr key={item.name}>
                  <td>
                    <Link to={`/products/${item.name}`}>{item.name}</Link>
                  </td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.cibil}</td>
                  <td>{item.amt}</td>
                  <td>{item.type}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.delUser(item.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <h2>
        No user added <small>Login and add product first</small>
      </h2>
    );
  }
}
const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => ({
  delUser: name => dispatch(delUser(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
