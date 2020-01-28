import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { sort, filler, edit } from './action'
import Select from '@material-ui/core/Select';
import Edit from './Edit'
class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      array: [],
      type: '',
      filter: ''
    }
  }
  handleChange = (e) => {
       if(e.target.value=="asc")
       {
        this.props.sort("asc")
       }
       else if(e.target.value=="desc")
       {
        this.props.sort("desc")
       }
       else if(e.target.value=="tasc")
       {
        this.props.sort("tasc")
       }
       if(e.target.value=="tdesc")
       {
        this.props.sort("tdesc")
       }
  }
  handleSelect = (e) => {
    console.log(this.state.array)
    if (e.target.value == "all") {
      this.props.filler("all")
    }
    else if (e.target.value == "rand") {
      this.props.filler("rand")
    }
    else if (e.target.value == "gen") {
      this.props.filler("gen")

    }
    else if (e.target.value == "prog") {
      this.props.filler("prog")

    }
    else if (e.target.value == "algo"){
      this.props.filler("algo")
    }
    else {
      this.props.filler("sugg")

    }
  }
  render() {
    console.log(this.state.filter)
    return (
      <React.Fragment>
        <div>
          <label>Sort</label>
          <Select onChange={this.handleChange}>
            <option selected>Sort</option>
            <option value="asc">Date ASC</option>
            <option value="desc">Date  DESC</option>
            <option value="tasc">Title ASC</option>
            <option value="tdesc">Title DESC</option>
          </Select>
          <label style={{marginLeft:"40px"}}>Filter</label>
          <Select onChange={this.handleSelect}>
            <option selected>Filter</option>
            <option value="all">All</option>
            <option value="rand">Random</option>
            <option value="gen">General</option>
            <option value="prog">Programming</option>
            <option value="algo">Algorithm</option>
            <option value="sugg">Suggestions</option>
          </Select>
          <table class="table">
            <tr><th>Title</th><th>Description</th><th>Date</th><th>Category</th><th>Name</th><th>Place</th><th>Edit</th><th>View</th></tr>
            {this.props.array.map(item => (
              <tr>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.date}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td><Link to={`Table/${item.id}`}>Edit Comment</Link></td>
                <td>{item.comment}</td>
                <Route path="/Table/:id" exact render={props => <Edit data={props.array} {...props} />}></Route>
              </tr>
            ))}
          </table>
          <Link to="/add">Go to Add page</Link>
          <div style={{marginLeft:"20px"}}><Link to="/">Go to Dasboard</Link></div>
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
    sort:(data)=>dispatch(sort(data)),
    filler: (data) => dispatch(filler(data)),
    edit: (data) => dispatch(edit(data))
  })
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(Table)