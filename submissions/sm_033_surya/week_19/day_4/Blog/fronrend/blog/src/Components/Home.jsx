import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth: true,
            islogin: false
        }
    }
    // componentDidMount(){
    //     let token =  localStorage.getItem('token')
    //         console.log(token)
    //         if (token == "error"|| token == null){
    //             this.setState({
    //                 // isAuth:true,
    //                 // islogin:false
    //             })
    //         }
    // }

    handleclick = () => {
        this.setState({
            isAuth: false,
            islogin: true
        })
        localStorage.clear()
    }
    render() {
        console.log(this.props.value, "HOme")
        return (

            <div className="container-fluid">

                <div className="row bg-primary p-4">
                    <div className="col-3"> <Link to="/"><button className="btn btn-light">Home</button></Link></div>
                    {this.props.status && <div className="col-3"><Link to="/login"><button className="btn btn-light">Login</button></Link></div>}
                    <div className="col-3"><Link to="/CreatePost"><button className="btn btn-light">Create Post</button></Link></div>
                    {!this.props.status && <div className="col-3"><button className="btn btn-light" onClick={this.handleclick}>Logout</button></div>}
                    {this.state.islogin && <Redirect to="/login" />}
                    {/* <div className="col-3"><button className="btn btn-light" onClick={this.handleclick}>Logout</button></div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    value: state.loginreducer
})

export default connect(mapStateToProps)(Home)
