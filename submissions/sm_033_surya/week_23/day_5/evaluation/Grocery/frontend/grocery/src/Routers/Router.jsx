import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Addproducts from '../components/Addproducts'
import Login from '../common/Login'
import Registration from '../common/Registration'
import { logout } from '../Redux/actions'
import { connect } from 'react-redux'

const Nomatch =()=>{
    return(
        <>
        <div className="container">
        <h1>404 Page not Found</h1>
        </div>
        </>
    )
}

export class Router extends Component {
    handleclick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value)
        return (
            <>
                <div className="container-fluid p-4 mb-5 border">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-3"><Link to="/"><button className="btn btn-primary">Home</button></Link></div>
                            {this.props.value.login && this.props.value.isadmin != "false" && <div className="col-2"><Link to="/addproduct"><button className="btn btn-primary">Add Products</button></Link></div>}
                            {!this.props.value.login && <div className="col-2"><Link to="/login"><button className="btn btn-primary">Login</button></Link></div>}
                            {this.props.value.login && <div className="col-3"><button className="btn btn-primary">{this.props.value.username}</button></div>}
                            {this.props.value.login && <div className="col-2"><button className="btn btn-danger" onClick={() => this.handleclick()}>Logout</button></div>}
                            <div className="col-2"><Link to="/register"><button className="btn btn-warning">Register</button></Link></div>
                        </div>
                        <div className="text-right pt-3">
                            {this.props.value.login && (this.props.value.isadmin != "false" ? <div className="col-12"><h4>{`Welcome Admin ${this.props.value.username}`}</h4></div> : <div className="col-12"><h4>{`Welcome User ${this.props.value.username}`}</h4></div>)}
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact render={(props) => <Home {...props} />} />
                    <Route path="/home" exact render={(props) => <Home {...props} />} />
                    <Route path="/login" exact render={(props) => <Login {...props} />} />
                    <Route path="/register" exact render={(props) => <Registration {...props} />} />
                    <Route path="/addproduct" exact render={(props) => <Addproducts {...props} />} />
                    <Route exact component={Nomatch} />
                </Switch>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.loginreducer
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(Router)
