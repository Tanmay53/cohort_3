/** @format */

import React, { Component } from "react";
class Repos extends Component {
  render() {
    return (
      <>
        <main className="container-fluid bg-danger text-light">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Open Issues</th>
                <th>Description</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody id="tBody" className="text-light">
              {this.props.items.map(ele => {
                return (
                  <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.open_issues}</td>
                    <td>{ele.description}</td>
                    <td>{ele.language}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </>
    );
  }
}

export default Repos;
