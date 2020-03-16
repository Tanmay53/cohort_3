import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Create from './view/Create'
import Listing from './view/Listing'
import Show from './view/Show'
import Edit from './view/Edit'
import Delete from './view/Delete'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/user/create' component={Create}></Route>
            <Route exact path='/user/listing' component={Listing}></Route>
            <Route exact path='/user/show/:id' component={Show}></Route>
            <Route exact path='/user/delete/:id' component={Delete}></Route>
            <Route exact path='/user/edit/:id' component={Edit}></Route>
            <Route render={() => <h2>404 Not Found !</h2>} />
          </Switch>    
        </div>
      </BrowserRouter>
    );
}

export default App;
