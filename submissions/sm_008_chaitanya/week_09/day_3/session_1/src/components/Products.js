import React from 'react'
import {Link} from 'react-router-dom'
class Products extends React.Component{
    render(){
         return(
            <div className="container">
                <div className="row text-center">
                     {this.props.productData.map(element=>
                        <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-4 mt-2 h5" key={element.id}>
                           <div className="card">
                              <div className="card-header">
                                 Name:{element.name}
                              </div>
                              <div className="card-body">
                                    <Link to={`${this.props.match.url}/${element.id}`}>More Details</Link>
                              </div>
                           </div>
                        </div>
                     )}
                </div>
            </div>
         )
    }
}
export default Products