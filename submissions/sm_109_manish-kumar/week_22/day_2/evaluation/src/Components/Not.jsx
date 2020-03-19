import React, { Component } from 'react'

class Not extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.history.push("/")
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

export default Not