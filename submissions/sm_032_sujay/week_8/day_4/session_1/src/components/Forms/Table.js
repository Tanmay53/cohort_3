import React from 'react'


export default class Table extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        console.log(this.props.data)
        
             let empData = this.props.data.map(ele => { 
                    return (
                        <tbody className="table table-hover shadow">
                        <tr>
           <td>{ele.name} </td>
           <td>{ele.age} </td>
           <td>{ele.address} </td>
           <td>{ele.department} </td>
           <td>{ele.salary} </td>
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
                                 <th scope="col">Department</th>
                                 <th scope="col">Salary</th>
                             </tr>
                         </thead>
                            {empData}
                     </table>
                 
            


            </div>
            
           
        )
    
}
}


   

       
    