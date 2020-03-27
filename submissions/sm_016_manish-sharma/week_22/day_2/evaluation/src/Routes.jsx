import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { connect } from "react-redux";

class Routes extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const {notLoggedIn, notReg}=this.props
        return(
            <div>
                <Switch>
                    <Route exact path='/' render={()=>
                            (notLoggedIn===false?
                            <Home/>:
                            <Redirect to='/login' />)
                            }/>
                    <Route exact path='/addentry' render={()=><AddEntry/>}/>
                    <Route exact path='/edit/:album' render={(props)=><EditEntry {...props} />}/>
                    <Route exact path='/register' render={()=>
                            (notReg===true?
                            <Register/>:
                            <Redirect to='/login' />)
                            }/>
                    <Route exact path='/login' render={()=>(notLoggedIn===true?
                            <Login/>:
                            <Redirect to='/' />)
                            }/>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    notLoggedIn:state.notLoggedIn,
    notReg:state.notReg
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps,null) (Routes)