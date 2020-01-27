import React from "react";

export default class Table  extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

 

    render() {
        return (
           
            <div className ="container">
                <div className ="row">
                    <div className ="col">
                        <table className ="table">
                            <thead className = "thead-dark">
                                <tr>
                                    <th scope = "col">Name</th>
                                    <th scope = "col">Id</th>
                                    {/* <th scope = "col">Desc</th> */}
                                    <th scope = "col">Category</th>
                                    <th scope = "col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                              {this.props.arrd.map(ele=>{
                                  return(
                                      <tr key={ele.id}>
                                          <td>{ele.Name}</td>
                                          <td>{ele.Id}</td>
                                          <td>{ele.Cat}</td>
                                          <td>{ele.Price}</td>
                                      </tr>
                                  )
                              })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}