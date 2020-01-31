import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Listings from './Views/Listings'
import AddItem from './Views/AddItem'
import EditItem from './Views/EditItem'
import DeleteItem from './Views/DeleteItem'
import Navbar from './components/Navbar'
import MarkItem from './Views/MarksItem'
import DoneItems from './Views/DoneItem'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = '/home' component={Listings} />  
          <Route exact path = '/add' component={AddItem}/>
          <Route exact path = '/change/:index' component={EditItem}/>
          <Route exact path = '/delete/:index' component={DeleteItem}/>
          <Route exact path = '/mark/:index' component={MarkItem}/>
          <Route exact path = '/done' component={DoneItems}/>
          <Route render={() => <h1>404 Not Found!</h1>} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
