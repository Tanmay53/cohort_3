import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Table from './Components/Table'
import CreateUser from './Components/CreateUser'
import Update from './Components/Update'
import Show from './Components/Show'
import Delete from './Components/Delete'


export default function Routes(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/users/listing' render={(props)=><Table {...props}/>} />
                {/* <Route exact path='/users/listing?per_page=:value&page=:value' /> */}
                <Route path='/users/create' render={(props)=><CreateUser {...props} />} />
                <Route path='/users/show/:id' render={(props)=><Show {...props} />} />
         k       <Route path='/users/edit/:id' render={(props)=><Update {...props} />} />
                <Route path='/users/delete/:id' render={(props)=><Delete {...props} />} />
                <Redirect to='/users/listing'/>
            </Switch>
        </div>
    )
}
