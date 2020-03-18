import React, { Component } from 'react'

class NotFound extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        <center>
        <h2>
          page not found
        </h2>
        <button className="btn btn-success" onClick={this.back}>
          back
        </button>
        </center>
      </div>
    )
  }
}

export default NotFound
