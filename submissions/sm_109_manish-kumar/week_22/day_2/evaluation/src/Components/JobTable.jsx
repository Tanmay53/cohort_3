import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keyForEdit } from "../Redux/Action"
import { delKey } from "../Redux/Action"

class JobTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  handleDelete = (e) => {
    e.preventDefault();
    const key = e.target.getAttribute("data-key")
    const { sendKey } = this.props;
    sendKey(key)
  }

  handleEdit = (e) =>{
    e.preventDefault();
    const editKey = e.target.getAttribute("data-key")
    const { sendEditKey } = this.props;
    sendEditKey(editKey)
    this.props.history.push("/edit")
  }
  
  render() {
    const {data} = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Loaction</th>
              <th scope="col">Job Title</th>
              <th scope="col">Openings</th>
              <th scope="col">Salary</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(data => {
              return (
                <tr key = {data.id}>
                  <td>{data.name} </td>
                  <td>{data.location} </td>
                  <td>{data.jobtitle} </td>
                  <td>{data.openings} </td>
                  <td>{data.salary} </td>
                  <td><button className="btn btn-primary" onClick={this.handleEdit} data-key={data.id} >Edit</button> </td>
                  <td><button className="btn btn-danger" onClick={this.handleDelete} data-key={data.id} >Delete</button> </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data : state.companyList
})

const mapDispatchToProps = (dispatch) => ({
  sendEditKey : editKey => dispatch(keyForEdit(editKey)),
  sendKey : editKey => dispatch(delKey(editKey))
})


export default connect(mapStateToProps, mapDispatchToProps) (JobTable)
