import React from "react"

/*Playlist Table which allows user to display the data ; Edit the data and delete the data*/

class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit : false
    }
    this.albumInput = React.createRef()
    this.yearInput = React.createRef()
  }

  editDataSubmit = (e)=>{
    let id = e.target.id
    console.log(id)

    this.setState(prevState=>{
      return {
        isEdit : !prevState.isEdit
      }
    })
    console.log("in table child comp ref values",this.albumInput.current.value)
    this.props.editDataSubmit(
      id,
      this.albumInput.current.value,
      this.yearInput.current.value
    )
  }

  editData = () =>{
    this.setState(prevState=>{
      return {
        isEdit : !prevState.isEdit
      }
    })
  }

  deleteData = (e) =>{
    let id = e.target.id

    this.props.deleteData(id)
  }


  render(props){

    const {playlist} = this.props

    return (
      <div className="container-fluid">
        
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">

              <div className="card-header">
                Playlist : 
              </div>

              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Artist</th>
                      <th>Album</th>
                      <th>Year</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playlist.map(item=>{
                                if (this.state.isEdit){
                                  return (
                                    <tr key={item.id}>
                        
                                      <td>
                                        {item.artist}
                                      </td>
                        
                                      <td>
                                        <input
                                          defaultValue={item.album}
                                          ref = {this.albumInput}/>
                                      </td>
                        
                                      <td>
                                        <input
                                          defaultValue={item.year}
                                          ref = {this.yearInput}/>
                                      </td>
                        
                                      <td>
                                        <i 
                                          id={item.id}
                                          className="fas fa-edit" 
                                          onClick={this.editDataSubmit}></i>
                                      </td>
                        
                                      <td>
                                        <i className="fas fa-trash-alt"></i>
                                      </td>
                        
                                    </tr>
                                  )
                                }
                                else {
                                  return  (
                                  <tr key={item.id}>
                      
                                    <td>
                                      {item.artist}
                                    </td>
                      
                                    <td>
                                      {item.album}
                                    </td>
                      
                                    <td>
                                      {item.year}
                                    </td>
                      
                                    <td>
                                      <i className="fas fa-edit" onClick={this.editData}></i>
                                    </td>
                      
                                    <td>
                                      <i 
                                        className="fas fa-trash-alt" 
                                        onClick={this.deleteData}
                                        id={item.id}></i>
                                    </td>
                      
                                  </tr>
                                )
                              }
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    )   
  }
}

export default Table