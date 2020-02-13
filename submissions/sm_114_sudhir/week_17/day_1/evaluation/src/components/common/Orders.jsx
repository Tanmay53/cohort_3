import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Orders extends Component {
    render() {
        if(this.props.isLogin){
            return (
                <div className="container mt-5">
                    <div className="row py-5">
                        <div className="col">
                             <table class="table table-dark">
                                 <thead>
                                     <tr>
                                     <th scope="col">Sr.no</th>
                                     <th scope="col">Type</th>
                                     <th scope="col">Price</th>
                                     <th scope="col">Total</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {/* {this.props.state.orderedRooms.map((ele, i) => {
                                         if(ele === "undefined"){
                                             return <h1 className = "display-1 text-center">No Data</h1>
                                         }else{
                                            return (
                                                <tr key = {i+1}>
                                                    <td>{i + 1}</td>
                                                    <td>{ele.type}</td>
                                                    <td>{ele.rate}</td>
                                                    <td>{ele.total}</td>
                                                </tr>
                                            )
                                         }
                                     })} */}
                                     {this.props.state.orderedRooms === undefined ? (
                                         <h1 className = "display-1 text-center">No Data</h1>
                                     ) : (
                                        this.props.state.orderedRooms.map((ele, i) => {
                                            return (
                                                <tr key = {i+1}>
                                                    <td>{i + 1}</td>
                                                    <td>{ele.type}</td>
                                                    <td>{ele.rate}</td>
                                                    <td>{ele.total}</td>
                                                </tr>
                                            )
                                         
                                     })
                                     )
                                    }
                                 </tbody>
                                 
                             </table>
                        </div>
                    </div>
                </div> 
             )
        } else {
            return <Redirect to = "/login" />
        }
        
    }
}


const mapStateToProps = (state) => ({
    state: state,
    isLogin: state.isLogin
})

const mapDispatchToProps = ({
    
})


export default connect(mapStateToProps,
                mapDispatchToProps)(Orders)