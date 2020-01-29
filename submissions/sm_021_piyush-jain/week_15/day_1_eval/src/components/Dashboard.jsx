import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Add from './Add'
import Table from './Table'
import App from '../App'
import { log, add } from './action'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    handleClick = () => {
        this.props.log()
    }
    render() {
        if (this.props.login) {
            return (
                <React.Fragment>
                    <div style={{ margin: "20px" }}>
                        <div style={{textAlign:"center"}}>
                            <Link to="/add"><Button variant="contained" color="primary">Add_New_Topic</Button></Link>
                            <Link to="/Table"><Button style={{marginLeft:"50px"}}variant="contained" color="primary">View_Topic</Button></Link>
                        </div>
                        <div style={{marginTop:"30px",textAlign:"center"}}>
                            <Link><Button variant="contained" color="primary" onClick={this.handleClick}>LOG OUT</Button></Link>
                        </div>
                    </div>
                </React.Fragment>
            )
            }
        else {
            return (
                <React.Fragment>
                    <div>
                        <Redirect to="/"></Redirect>
                        <Route path="/" component={App}></Route>
                    </div>
                </React.Fragment>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    login: state.isAuth
})

const mapDispatchToProps = dispatch => {
    return ({
        log: () => dispatch(log())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
