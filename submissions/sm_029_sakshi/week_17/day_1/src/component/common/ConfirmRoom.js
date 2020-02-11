import React, { Component } from 'react'
import {connect} from 'react-redux'

class ConfirmRoom extends Component {
    

    handleconfirm=()=>{
        this.props.history.push('./finalpage')
    }
    render() {
        console.log(this.props.ordersPlaced)
        return (
            <div>
                <h1 className="text-danger mt-5 text-center">Please confirm your meeting room booking</h1>

                {this.props.ordersPlaced.map(e=>{
                    return (
                        <React.Fragment>
                             <h3 className="text-center text-success">BOOKING BILL</h3>
                       
                        <div className="bg-info col-11 offset-1 border border-drak row">
                            
                             <br></br>
                             <br></br>
                          <div className="col-6">
                                <img src= {e.img} alt="imggg" style={{width:"400px",height:"400px"}}/>
                             </div>
                             <div className="col-6  text-warning display-4">
                              Name:{e.name}
                              <br></br>
                              Price:{e.price}
                              <br></br>
                              Floor:{e.floor}
                              <br></br>
                              Capacity:{e.capacity} Seats
                              <br></br>
                            
                             </div>
                             <br></br>
                             <div className="text-center">
                               <h3> Click to confirm</h3>
                             <button  className="mt-4 float-right p-2 " onClick={this.handleconfirm}>CONFIRM BOOKING</button>
                             </div>
                             
                            
                        </div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    maindata:state.maindata,
    ordersPlaced:state.ordersPlaced
  
  });
  const mapDispatchToProps = dispatch => ({
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRoom);