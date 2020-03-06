import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './views/Home'
import Manager from './components/Manager'
import Author from './views/Author'
import Publisher from './views/Publisher'
import Category from './views/Category'

export default function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/author" component={Author} />
                <Route exact path="/publisher" component={Publisher} />
                <Route exact path="/category" component={Category}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route render={() => <h4>404 ! Resource Not Found.</h4>} />
            </Switch>
        </div>
    )
}