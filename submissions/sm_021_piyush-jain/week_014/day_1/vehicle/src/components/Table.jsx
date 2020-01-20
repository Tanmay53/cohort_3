import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link,Route} from 'react-router-dom'
import { del, fill,edit } from './action'
import Edit from './Edit'
import $ from 'jquery'
class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      array: props.array,
      type: '',
      filter: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      type: e.target.value
    })
    if (this.state.type == "asc") {
      this.setState({
        array: this.state.array.sort((a, b) => a.price - b.price)
      })
    }
    else if (this.state.type == "desc") {
      this.setState({
        array: this.state.array.sort((a, b) => b.price - a.price)
      })
    }
    else if (this.state.type == "masc") {
      this.setState({
        array: this.state.array.sort((a, b) => a.manufacturer > b.manufacturer)
      })
    }
    else {
      this.setState({
        array: this.state.array.sort((a, b) => b.manufacturer > a.manufacturer)
      })
    }
  }
  handleSelect = (e) => {
    console.log(this.state.array)
    this.setState({
      filter: e.target.value
    })
    if (this.state.filter == "first") {
      this.props.fill("first")
    }
    else if (this.state.filter == "second") {
      this.props.fill("second")

    }
    else if (this.state.filter == "third") {
      this.props.fill("third")

    }
    else {
      this.props.fill("last")

    }
  }
  render() {
    console.log(this.state.filter)
    return (
      <React.Fragment>
        <div>
          <select onChange={this.handleChange}>
            <option>Sort</option>
            <option value="asc">Price DESC</option>
            <option value="desc">Price ASC</option>
            <option value="masc">Manufacturer DESC</option>
            <option value="mdesc">Manufacturer ASC</option>
          </select>
          <select onChange={this.handleSelect}>
            <option>Filter</option>
            <option value="first">0-10</option>
            <option value="second">11-20</option>
            <option value="third">21-30</option>
            <option value="last">>30</option>
          </select>
          <table class="table">
            <tr><th>No</th><th>Name</th><th>Manufacturer</th><th>Mileage</th><th>Price</th><th>Quantity</th><th>Edit</th><th>Delete</th></tr>
            {this.props.array.map(item => (
              <tr>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>{item.manufacturer}</td>
                <td>{item.mileage}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <Link to={`Table/${item.id}`}>Edit</Link>
                <Route path="/Table/:id" exact render={props=><Edit data={props.array} {...props}/>}></Route>
                <button onClick={() => this.props.del(item.id)}>Delete</button>
              </tr>
            ))}
          </table>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  array: state.sorted
})

const mapDispatchToProps = dispatch => {
  return ({
    del: (data) => dispatch(del(data)),
    fill: (data) => dispatch(fill(data)),
    edit:(data)=>dispatch(edit(data))
  })
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(Table)