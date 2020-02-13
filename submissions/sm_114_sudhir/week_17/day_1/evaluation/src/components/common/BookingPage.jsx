import React, { Component } from 'react'
import { connect } from 'react-redux'



class BookingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Transation Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                              <div className="col">
                                  {/* {this.props.state.bookingDetails.map(ele => {
                                      return (
                                          <div>
                                                <h4>Transation Id:- {ele.transactionId}</h4>
                                                <h4>Booking Id:- {ele.bookingId}</h4>
                                          </div>
                                      )
                                  })} */}
                                  {this.props.state.bookingDetails === undefined ? (
                                      <h1 className="display-1">No Details</h1>
                                  ):(
                                    this.props.state.bookingDetails.map(ele => {
                                        return (
                                            <div>
                                                <h4>Transation Id:- {ele.transactionId}</h4>
                                                <h4>Booking Id:- {ele.bookingId}</h4>
                                            </div>
                                        )
                                    })
                                  )}
                                
                              </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
  state: state,  
  isLogin: state.isLogin
})


export default connect(mapStateToProps)(BookingPage)
