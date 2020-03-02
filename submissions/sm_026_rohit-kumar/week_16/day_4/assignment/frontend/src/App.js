import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Listing from './Views/Listing'
import Create from './Views/Create'
import Edit from './Views/Edit'
import Details from './Views/Details'
import Address from './Views/Address'
import Delete from './Views/Delete'
import EditAddress from './Views/EditAddress'



function App() {
  return (
    <BrowserRouter>
      <div>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-8 offset-2'>
                <Switch>
                  <Route exact path='/user/listing' component={Listing} />
                  <Route exact path='/user/create' component={Create} />
                  <Route exact path='/user/edit/:user_id' component={Edit} />
                  <Route exact path='/user/delete/:user_id' component={Delete} />
                  <Route exact path='/user/details/:user_id' component={Details} />
                  <Route exact path='/user/address/:user_id' component={Address} />
                  <Route exact path='/user/address_edit' component={EditAddress} />
                  
                  <Route render={() => <h4>404 Not Found !</h4>} />
                </Switch>
              </div>
            </div>
          </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
