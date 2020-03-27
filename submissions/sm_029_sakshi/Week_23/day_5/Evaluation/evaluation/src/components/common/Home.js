import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortbysalary, changePage} from "./../../redux/action"

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            datalist:[]
        }
    }
    componentDidMount(){
        const all=this.props.mainData
        this.setState({
            datalist:all
        })
    }

    // ================functionss=====================

    filterDepartment=(e)=>{
        const all=this.props.mainData
        if(e.target.value===""){
            this.setState({
                datalist:all
            })
        }
        else{
            let newData=[]
            for(let i=0;i<all.length;i++){
                if(all[i].department===e.target.value){
                    newData.push(all[i])
                }
            }
            this.setState({
                datalist:newData
            })
        }
    }
 
    filterGender=(e)=>{
        const all=this.props.mainData
        if(e.target.value===""){
            this.setState({
                datalist:all
            })
        }
        else{
            let newData=[]
            for(let i=0;i<all.length;i++){
                if(all[i].gender===e.target.value){
                    newData.push(all[i])
                }
            }
            this.setState({
                datalist:newData
            })
        }
    }

    handleSortSalary=(e)=>{
        const all=this.props.mainData
        if(e.target.value==='lowtohigh'){
            this.setState({
                datalist:all.sort((a,b)=>a.salary-b.salary)
            })
        }
        else{
            this.setState({
                datalist:all.sort((a,b)=>b.salary-a.salary)
            })
        }
    }
    // handleSortSalary = (e) => {
    //     let valuee=e.target.value
    //     console.log(valuee)
    //     this.props.sortbysalary(valuee)
    //    };
 
   




    // ========================================================RENDER FUNCTION==================================================
    render() {
      console.log(this.props.mainData)
      const {mainData, page, perPage, changePage}=this.props
      const length = mainData.length
      const pages = Math.ceil(length/perPage)
      const pageList = []
    
      // pages
      
      for(let i = page-1; i>=0 && i<=page+1 && i<=pages &&page<=pages ; i++){
       
        if(i===page-1){
          if(i!==0)
            pageList.push(<div key={i} className="btn btn-lg p-2 " onClick={()=>changePage(page-1)}>Previous</div>)
          continue;
        }
        if(i===page+1 ){
          pageList.push(<div key={i} className="btn btn-lg bg-success " onClick={()=>changePage(page+1)} >More</div>)
          continue;
        }
       
      }
    



        return (
            <div>
                <div className="container-fluid bg ">
                    <h1 className="text-center p-2 text-danger">Employee Database</h1>
                </div>

                {/* =====Filter Dep/Gender============= */}
                <div className='conatainer row d-flex '>

                    <div className='col-4'> Filter by DEPARTMENT
                        <select onChange={this.filterDepartment} className='custom-select'>
                            <option value="">All</option>  
                            {this.props.departmentData.map(e=>(
                                <option key={e} value={e}>{e}</option>
                            ))}
                        </select>
                    </div>

                    <div className='col-4'> Filter by GENDER
                        <select onChange={this.filterGender} className='custom-select'>
                            <option value="">All</option>  
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>                        
                        </select>
                    </div>

                    {/* =============Sort by salary=========== */}
                    <div className=" col-4 ">
                 <div className=" ">Sort by SALARY :</div>
                   <select  name="sortByCategory"  value="a"   className="form-control "   onChange={this.handleSortSalary} >
                        ALL
                              <option value="All">All</option>
                              <option value="lowtohigh">LOW TO HIGH</option>
                              <option value="hightolow">HIGH TO LOW</option>
                   </select>
               </div>
                
                

                </div>
                <div className="container">
                    <div className="d-flex justify-content-around p-4">
                        <Link to="/department">
                            <button className="btn btn-success">Add new department</button>
                        </Link>
                        <Link to="/addempData">
                            <button className="btn btn-success">Add new Data</button>
                        </Link>
                    </div>
                   { /* ========================MOre Data(20 limit per page)================== */}
                <div className="float-right ml-5 bg-danger">{pages!==0 && pageList }</div>

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr no.</th>
                                <th scope="col">Employee name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Department</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {this.state.datalist.filter((a,i)=>i>=perPage*(page-1)&&i<perPage*page).map((item,i)=>
                            <tr key={item.id}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.department}</td>
                                <td>{item.salary}</td>
                               
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mainData : state.mainData,
    departmentData:state.departmentData,
    data: state.data,
    page: state.page,
    perPage: state.perPage,
})

const mapDispatchToProps = dispatch => ({
    sortbysalary:(payload)=>dispatch((sortbysalary(payload))),
    changePage: (payload)=>dispatch(changePage(payload))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)