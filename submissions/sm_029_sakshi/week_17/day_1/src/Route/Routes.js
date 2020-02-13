import React from 'react'
import Registration from '../component/auth/Registration'
import Login from '../component/auth/Login'
import Home from '../component/common/Home'
import { Route, Switch } from "react-router-dom"
import ConfirmRoom from '../component/common/ConfirmRoom'
import Finalpage from '../component/common/Finalpage'



class Routers extends React.Component {
    render() {
        // console.log(arraydata)
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                      <Route path="/register" exact component={ Registration } /> 
                    <Route path="/login" exact component={Login} />
                 
                    <Route path="/confirm"  exact component={ConfirmRoom}/>
                     <Route path="/finalpage" exact component={Finalpage}/>
           
                </Switch>
            </>
        )
    }
}
export default Routers