import React from 'react';
import {connect} from 'react-redux'
import {logoutSuccess} from '../../redux/authentication/actions'

class Navbar extends React.Component {
    render() {
        const {islogged,logoutSuccess}=this.props
      return (
        <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-dark bg-warning justify-content-between  ">
            <p>Bus Routes</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
           
          </button>
          <div  className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          {islogged?<button type="button" onClick={()=>logoutSuccess()} class="btn btn-success">Logout</button>:null}
          </div>
        </nav>
      );
    }
  }

  const mapStateToProps = (state) => ({
      islogged:state.authReducer.isLogged
  })
  
  const mapDispatchToProps =dispatch=> ({
    logoutSuccess:()=>dispatch(logoutSuccess())
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
  