import React from 'react'

function Subtab(props){
    return (
        <tr>
        <td>{props.company}</td>
        <td>{props.loc}</td>
        <td>{props.title}</td>
        <td>{props.openings}</td>
        <td>{props.salary}</td>
        <td><button onClick={props.edit} className="btn btn-primary px-3">Edit</button></td>
        <td><button onClick={props.delete} className="btn btn-danger px-3">Delete</button></td>
      </tr> 
    )
}

class Table extends React.Component{
    render(){
        console.log(this.props.tabdata)
        return(
            <div className="text-center mb-5">
                <select onChange={this.props.performFilter} className="py-2 px-5 bg-dark text-light h5 ml-3">
                    <option value="--">-- Choose Company --</option>
                    <option value="all">All</option>
                    <option value="GOOGLE">GOOGLE</option>
                    <option value="FACEBOOK">FACEBOOK</option>
                    <option value="AMAZON">AMAZON</option>
                    <option value="MICROSOFT">MICROSOFT</option>
                    <option value="ORACLE">ORACLE</option>
                    <option value="FLIPKART">FLIPKART</option>
                    <option value="GENPACT">GENPACT</option>
                    <option value="SUTHERLANDS">SUTHERLANDS</option>
                    <option value="TCS">TCS</option>
                </select>
                <select onChange={this.props.performSort} className="py-2 px-5 bg-dark text-light h5 ml-3">
                    <option value="--">-- Select --</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select> 
                <div className="container">
                    <table className="table thead-dark table-responsive col-10 offset-0 col-md-8 col-lg-9 offset-lg-2 mt-5 table-warning">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Job Title</th>
                                <th>Openings</th>
                                <th>Salary</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.tabdata.map(element=> <Subtab key={element.id} company={element.cmpname} loc={element.location}
                            title={element.jobtitle} openings={element.openings} salary={element.salary} 
                            delete={()=>this.props.performDelete(element.id)}
                            edit={()=>{this.props.performEdit(element.cmpname)}}
                            />)}
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
}
export default Table