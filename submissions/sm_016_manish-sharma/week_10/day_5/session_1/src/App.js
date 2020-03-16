import React from 'react';
import './App.css';
import store from './redux/store'
import {inc,dec} from "./redux/actions";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Info from './components/Info';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={  
      input:0
    }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
           <div></div>
          <Switch>
            <Route exact path='/' 
              render={()=>
                (this.props.dataLogin==true?
                  <Login/>:
                  <Redirect to={{pathname:'/info'}}/>
                  )
              }/>
            <Route exact path='/register' render={()=><Register/>}/>
            <Route exact path='/info' render={()=><Info/> }/>
            <Route render={()=><div className='display-2'>Error $$$</div>}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }

}
const mapStateToProps = (state) => {
  return{
    dataLogin:state.dataLogin.error
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,null)(App)
