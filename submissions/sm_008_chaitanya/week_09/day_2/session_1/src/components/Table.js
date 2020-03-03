import React from 'react'
class Table extends React.Component{
   render(){
      return(
         <div>
            <div className="container">
               <table className="table table-responsive col-10 offset-1 col-md-8 col-lg-5 offset-lg-4 table-dark mt-2">
                  <thead>
                        <tr>
                        <th>Username</th>
                        <th>Image</th>
                        <th>Button</th>
                        </tr>
                  </thead>
                  <tbody>
                     {this.props.tabdata.map(elements=> <tr key={elements.id}>
                           <td>{elements.login}</td>
                           <td><img src={elements.avatar_url} height="100px"/></td>
                           <td><button onClick={()=>this.props.moredata(elements.login)} className="btn btn-danger mt-4 ml-3">Profile</button></td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      )
    }
}
export default Table