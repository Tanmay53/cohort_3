import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'
import Delete from './Delete'
import Purchase from './Purchase'
import Done from './Done'

export default function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path='/home' render={(props)=><Table {...props}/>}/>
                <Route path='/add' render={(props)=><Add {...props}/>}/>
                <Route path='/edit/:item_no' render={(props)=><Edit {...props}/>}/>
                <Route path='/delete/:item_no' render={(props)=><Delete {...props}/>}/>
                <Route path='/mark/:item_no' render={(props)=><Purchase {...props}/>}/>
                <Route path='/done' render={(props)=><Done {...props}/>}/>
                <Redirect to='/home' />
            </Switch>
        </div>
    )
}
