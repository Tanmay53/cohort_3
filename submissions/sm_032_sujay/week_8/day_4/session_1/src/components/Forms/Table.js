import React from 'react'


export default class Table extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            data : []
        }
    }

    render() {
        console.log("this is prop data from table ",this.props.data)

        let empData = this.props.data.map((ele,index) => {
            return (
                <tbody key={ele.name+index} className="table table-hover shadow">
                    <tr>
                        <td>{ele.name} </td>
                        <td>{ele.age} </td>
                        <td>{ele.address} </td>
                        <td>{ele.department} </td>
                        <td>{ele.salary} </td>
                        <td> <button onClick={() =>this.props.updt()} className="badge badge-pill badge-success" >EDIT</button></td>
                        <td> <button onClick={()=> this.props.del(index)} className="badge badge-pill badge-danger">DELETE</button></td>
                    
                    </tr>
                </tbody>
            )
        })


        return (
            <div>

                <table className="table table-hover shadow">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Department <span><select className="text-info bg-dark border border-rounded "><option >Full stack</option> <option >Front End</option> <option >Back End</option></select></span></th>
                            <th scope="col">Salary <span><button onClick={() => this.props.srt()} className="badge badge-pill badge-warning">Sort</button></span></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {empData}
                </table>




            </div>


        )

    }
}





