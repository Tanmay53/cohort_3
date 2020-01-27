import React from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { del, cart, adminlogin } from "../Common/actions"
import "../App.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: true
        }
    }
    admin = () => {
        this.setState({
            isAdmin: false
        })
    }
    render() {
        if (this.state.isAdmin) {
            return (

                <>
                    <div className="row d-flex justify-content-center">
                        <button className="m-2 btn btn-danger" onClick={this.admin}>Adminmode</button>
                        {this.props.check && <Link to="/addproducts"><button className="m-2 btn btn-success"> ADDProducts</button></Link>}
                        {`${this.props.cartfull.length != 0}` && <Link to="/cart"><button className="m-2 btn btn-dark">Cart</button></Link>}
                        <Link to="/orders"><button className="m-2 btn btn-info">Orders</button></Link>
                    </div>
                    <div className="container m-2">
                        <div className="row">
                            {this.props.value.map((ele) => {
                                return (

                                    <div className="col-4 p-2 text-center card" key={ele.id}>
                                        <div className="d-flex justify-content-center"><img src={ele.imageurl} ></img></div>
                                        <div>Name:{ele.Name}</div>
                                        <div>UUID:{ele.UUID}</div>
                                        <div>Price:{ele.Cost}</div>
                                        <div>Description:{ele.Description}</div>
                                        <div>Category:{ele.Category}</div>
                                        {this.props.check && <div><button className="btn btn-info m-2" onClick={() => this.props.delete(ele.id)}>Delete</button>
                                            <Link to={`/${ele.id}`}><button className="btn btn-info">Edit</button></Link>
                                        </div>}
                                        <button className="btn btn-warning" onClick={() => this.props.cart(ele.id)}>AddtoCart</button>
                                    </div>

                                )
                            })
                            }
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.addReducer.displayData,
        check: state.addReducer.adminlogin,
        cartfull: state.addReducer.cartData
    }
}
const mapDispatchToprops = (dispatch) => {
    return ({
        delete: (id) => (dispatch(del(id))),
        cart: (id) => (dispatch(cart(id))),
        login: () => (dispatch(adminlogin(true)))
    })
}
export default connect(mapStateToProps, mapDispatchToprops)(Home)