import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import {removeTodo,sortbysalary,sortbyopenings,filtercompany,filterlocation} from '../Redux/action'

class Home extends Component {
  
    handleSortSalary = (e) => {
       let valuee=e.target.value
       console.log(valuee)
       this.props.sortbysalary(valuee)
      };
    
    handleSortOpenings =(e)=>{
        let valuee=e.target.value
       console.log(valuee)
       this.props.sortbyopenings(valuee)
    }

    handlecompanyfilter=(e)=>{
        let valuee=e.target.value
        console.log(valuee)
        this.props.filtercompany(valuee)
    }

    handlecompanylocation=(e)=>{
        let valuee=e.target.value
        console.log(valuee)
        this.props.filterlocation(valuee)
    }
    
    render()
     {
        //  let varr=this.props.alldata.sort((a,b)=> a.name > b.name ? 1 : -1 )
        //  console.log(varr)
        //console.log(this.props.login)

        console.log(this.props.alldata)
        let lengthh=this.props.alldata.length
        console.log(lengthh)

        return (
          
            <div>
              <h4 className="text-center text-danger mt-2">Companies list</h4> 
              {!this.props.login  ?
              (<Redirect to='/login'></Redirect>):
      
              (<div>
                  {/* ===============table data codes================ */}
                  
                  <div className="mt-2 row d-flex justify-content-between mb-2 ">
                
                       <div className="m-1 col-3">
                       <Link className="btn btn-lg mt-2 mb-2 bg-success" to='/add'>ADD NEW DATA</Link>
                        </div>
                       <div className=" col-5">
                       <h3>Total nos of job: <h3 className="text-danger">{lengthh}</h3></h3>
                         </div>
                  </div>
                 

             

                  <div className="row d-flex justify-content-between" >
                  {/* ================SORT BY SALARY============ */}
                  <div className=" col-3 ">
                 <div className="m-2 ">Sort by SALARY :</div>
                   <select  name="sortByCategory"  value="a"   className="form-control w-50 mt-2 ml-3"   onChange={this.handleSortSalary} >
                        ALL
                              <option value="All">All</option>
                              <option value="lowtohigh">LOW TO HIGH</option>
                              <option value="hightolow">HIGH TO LOW</option>
                   </select>
               </div>
               
  {/* =========================filter by location name==================== */}
               <div className=" col-3 ">
                 <div className="m-2 ">filter by Company :</div>
               <select name="filter" value="aa" className="form-control" onChange={this.handlecompanylocation}>
                            <option value="">Filter( company )</option>
                            <option value="all">all</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                           
                        </select>
                 </div>

              
  {/* =========================filter by cmpny name==================== */}
  <div className=" col-3 ">
                 <div className="m-2 ">Sort by SALARY :</div>
               <select name="filter" value="aa" className="form-control" onChange={this.handlecompanyfilter}>
                            <option value="">Filter( company )</option>
                            <option value="all">all</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Accenture">Accenture</option>
                            <option value="Nikon">Nikon</option>
                            <option value="Panasonic">Panasonic</option>
                            <option value="Philip">Philip</option>
                           
                        </select>
                 </div>
 {/* ================SORT BY OPENING============ */}
                  <div className=" col-3 ">
                 <div className="m-2 ">Sort by OPENINGS :</div>
                   <select  name="sortByCategory"  value="a"   className="form-control w-50 mt-2 ml-3"   onChange={this.handleSortOpenings} >
                        ALL
                              <option value="All">All</option>
                              <option value="lowtohigh">LOW TO HIGH</option>
                              <option value="hightolow">HIGH TO LOW</option>
                   </select>
               </div>

           

</div>
               {/* ==================TABLEE START FROM HERE================= */}
                  <div className="display col-12">
                            <table class="table mt-2 text-dark">
                                <thead>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Job Title</th>
                                    <th>Openings</th>
                                    <th>Salary</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                  
                                </thead>
                                {this.props.alldata.map(e => {
                                    return (
                                        <tbody key={e.id}>
                                            <tr>
                                                <td>{e.name}</td>
                                                <td>{e.location}</td>
                                                <td>{e.jobtitle}</td>
                                                <td>{e.opening}</td>
                                                <td>{e.salary}</td>
                                                <td><button onClick={()=> this.edit(e.id)}> EDIT</button></td>
                                                <td><button className="ml-4 btn-sm bg-danger " onClick={()=>this.props.delete(e.id)}>REMOVE</button></td>
                                             
                                            </tr>
                                        </tbody>
                                    )

                                })}
                                                
                            </table>
                        </div>
  

              </div>)
              }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login : state.isloggedin,
    profileedata:state.profiledata,
    alldata:state.maindata
})

const mapDispatchToProps = dispatch => ({
    delete:(del)=>dispatch((removeTodo(del))),
    sortbysalary:(payload)=>dispatch((sortbysalary(payload))),
    sortbyopenings:(payload)=>dispatch((sortbyopenings(payload))),
    filtercompany:(payload)=>dispatch((filtercompany(payload))),
    filterlocation:(payload)=>dispatch((filterlocation(payload))),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)