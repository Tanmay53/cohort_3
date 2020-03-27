import React from 'react';
import { Link,Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { editBusDetails} from '../../redux/busRoutes/actions'


class EditDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selected:"",
            ready:false,
            source:"",
            destination:"",
            busNum:"",
            schedule:"",
            key:"",
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        const {buses}=this.props
        let data = buses;
        const query = new URLSearchParams(this.props.location.search);
        let queryType = query.get("id");
        data=data.filter(e=>e.key==queryType)
        this.setState(
          {
            selected: data,
            source:data[0].source,
            destination:data[0].destination,
            busNum:data[0].busNum,
            schedule:data[0].schedule,
            key:data[0].key,
            ready: true
          }
        );
      }
      handleEdit=()=>{
          let InfoToSend={
            source:this.state.source,
            destination:this.state.destination,
            busNum:this.state.busNum,
            schedule:this.state.schedule,
            key:this.state.key,
          }
          const {editBusDetails} = this.props
          alert("Changes Finalised")
          editBusDetails(InfoToSend)
      }
      render(){
          const {islogged}=this.props
          return(
              <>
              <p className="text-center my-1 h1">Edit Details</p>
              {this.state.ready && this.state.selected.map(e=>
                <div className="d-flex flex-column justify-content-center align-items-center shadow">
                    <input className="my-1" onChange={this.handleChange} name="source" type="text" placeholder={e.source}/>
                <input className="my-1" onChange={this.handleChange} name="destination" type="text" placeholder={e.destination}/>
                <input className="my-1" onChange={this.handleChange} name="busNum" type="text" placeholder={e.busNum}/>
                <input className="my-1" onChange={this.handleChange} name="schedule" type="text" placeholder={e.schedule}/>
                    <Link to="/home"><button onClick={this.handleEdit} type="button" class="btn btn-primary">Edit</button></Link>
                </div>
                )}
                {!islogged ? <Redirect to="/"/> : null}
              </>
          )
      }
}

const mapStateToProps = (state) => ({
    islogged:state.authReducer.isLogged,
    buses:state.BusRoutesReducer.buses
})

const mapDispatchToProps =dispatch=> ({
    editBusDetails:(value)=>dispatch(editBusDetails(value))
})

export default connect (mapStateToProps,mapDispatchToProps)(EditDetails)
