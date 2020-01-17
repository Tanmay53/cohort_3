import React  from 'react'
import {Redirect , Link} from 'react-router-dom'
import {loggingOut} from '../../Redux/actions'
import {connect} from 'react-redux'

function Dashboard(props){
    if(props.state.isAuthenticated ===true){
        return (
            <div className ="container-fluid m-auto text-center">
                <h1 className ="text-center">Welcome to admin page</h1>
                <Link to ="/AddStaff"><button className="m-2 btn btn-primary">ADD STAFF</button></Link>
               <Link to="/ShowStaff"><button className="m-2 btn btn-secondary">SHOW ALL STAFF</button></Link>
                <button onClick={props.loggingOut} className="m-2 btn btn-danger">Logout</button>
            </div>
        )
    }
    else return <Redirect to = "/auth" />
  }


  const mapStateToProps = (state) => ({
      state:state
  })
  

  const mapDispatchToProps = (dispatch) =>({
    loggingOut:()=>dispatch(loggingOut())
  })

  export default connect (mapStateToProps ,mapDispatchToProps) (Dashboard);

  


