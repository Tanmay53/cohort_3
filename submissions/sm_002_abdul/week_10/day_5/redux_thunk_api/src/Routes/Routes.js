import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Registration from "../Pages/Registration"
import Login from "../Pages/Login"
import {connect} from "react-redux"


class Routes extends React.Component{
  render(){
    const {isLogged} = this.props
    // console.log(isLogged)
    return (
      <>
        <Switch>
          <Route exact path="/" 
            render = {
                      (props)=> isLogged ? <Dashboard {...props}/> : <Redirect to={{pathname : "/login"}}/>
            }
          />
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state =>{
  return {
    isLogged : state.isLogged
  }
}

export default connect(mapStateToProps,null)(Routes)