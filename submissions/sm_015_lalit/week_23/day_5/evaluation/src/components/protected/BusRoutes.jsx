import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { deleteBus, editBusDetails, setperpage} from '../../redux/busRoutes/actions'
import {saveUserDetails} from '../../redux/authentication/actions'
import { Link, Redirect } from "react-router-dom";
import Pagination from './Pagination'
import uuid from 'uuid-random'


class BusRoutes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display:"",
        }
    }
    handleOnChange=(e)=>{
        const {setperpage}=this.props
        this.setState({
            display:e.target.value
        },()=>setperpage(this.state.display))
    }
    componentDidMount(){
        const {islogged,token,username,saveUserDetails} =this.props
        if(islogged){
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            axios({
                method:"GET",
                url:"http://localhost:8080/user/"+username
            })
            .then(res=>{
                console.log("Profile",res.data)
                saveUserDetails(res.data)
            })
            .catch(err=>{
                console.log("Error",err.message)
            })
        }
    }
    render(){
        const {cities,buses,perPage,currentPage,deleteBus,editBusDetails,islogged}=this.props
        return(
            <>
             <div className="d-flex justify-content-between">
             <Link to="/addcity"><button type="button" class="btn btn-info m-2">Add City</button></Link>
                <div class="form-group">
                  <label className="text-center mx-auto" for="limit">Change Content Limit</label>
                  <select onChange={this.handleOnChange} class="custom-select" name="limit" id="limit">
                        <option selected>Per Page Limit</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </select>
                </div>
            <Link to="/addbus"><button type="button" class="btn btn-info m-2">Add Bus</button></Link>
             </div>
            <table className="mx-2 table">
                <thead>
                    <th>
                        Source
                    </th>
                    <th>
                        Destination
                    </th>
                    <th>
                        Bus
                    </th>
                    <th>
                        Schedule
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </thead>
                <tbody>
                {buses && buses.filter((a,i)=>i>=perPage*(currentPage-1) && i<perPage*(currentPage)).map(e=>
                <tr key={uuid()}>
                    <td>
                        {e.source}
                    </td>
                    <td>
                        {e.destination}
                    </td>
                    <td>
                        {e.busNum}
                    </td>
                    <td>
                        {e.schedule}
                    </td>
                    <td>
                    <Link to={`/editDetails/?id=${e.key}`}><button type="button" class="btn btn-primary">Edit</button></Link>
                    </td>
                    <td>
                        <button onClick={()=> deleteBus(e.key)} type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
            <Pagination/>
            {!islogged ? <Redirect to="/"/> : null}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    islogged:state.authReducer.isLogged,
    token:state.authReducer.token,
    username:state.authReducer.username,
    cities:state.BusRoutesReducer.cities,
    buses:state.BusRoutesReducer.buses,
    perPage:state.BusRoutesReducer.perPage,
    currentPage:state.BusRoutesReducer.currentPage
})

const mapDispatchToProps = (dispatch) => ({
    deleteBus:(value)=>dispatch(deleteBus(value)),
    editBusDetails:(value)=>dispatch(editBusDetails(value)),
    setperpage:(value)=>dispatch(setperpage(value)),
    saveUserDetails:(value)=>dispatch(saveUserDetails(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(BusRoutes)
