import React from 'react';
class TableData extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className="col-7 mx-auto">
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <select  onChange={this.props.filter} className="form-control my-2" name="Department">
                        <option disabled>Filter By Department</option>
                        <option>All</option>
                        <option>Accounts</option>
                        <option>Sales & Marketing</option>
                        <option>Production</option>
                        <option>Engineering</option>
                        <option>HR</option>
                    </select>
                </div>
                <div className="col-lg-5 col-sm-12">
                <h1 className="text-center">Employee Table</h1>
                </div>
                <div className="col-lg-3 col-sm-6">
                <select onChange={this.props.sort} className="form-control my-2">
                        <option disabled>Sort By Salary</option>
                        <option>Ascending</option>
                        <option>Descending</option>

                    </select>
                </div>
            </div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                        {/* <th scope="col">Id</th> */}

                    </tr>
                </thead>
                <tbody>
                    {this.props.database.map((ele)=>{
                       return(
                           <tr key={ele.Id}>
                               <td>{ele.Name}</td>
                               <td>{ele.Age}</td>
                               <td>{ele.Department}</td>
                               <td>{ele.Salary}</td>
                               <td> <button value={ele.Id} onClick={this.props.upd}>Update</button></td>
                               <td><button value={ele.Id} onClick={this.props.del}className ="btn-danger btn">X</button></td>
                           </tr>
                       )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}
export default TableData;