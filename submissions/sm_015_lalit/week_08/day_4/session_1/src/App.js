import React from 'react';
// import InputForm from './components/InputForm'
import uuid1 from 'uuid/v4';
var DataSave=[]
var DataRec=null
var filteredDept=null
var targetSalary=""
var targetAddress=""
var targetDepartment=""
var targetName=""
var targetAge=""
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
     Name:"",
     Age:"",
     Address:"",
     Department:"",
     Salary:"" ,
     toRun:false,
     toSortInc:true,
     sortShow:false,
     generateOption:false,
     selectUsed:false,
     extraLayer:false
    }
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.Name!=="" && this.state.Age!=="" && this.state.Address!=="" && this.state.Department!=="" && this.state.Salary!==""){
    DataSave.push(this.state)
    localStorage.setItem("storedState",JSON.stringify(DataSave))
    DataRec=JSON.parse(localStorage.getItem("storedState"))
    console.log(typeof(DataRec))
    console.log(DataRec)
    // toSortInc=false
    // toRun=true
    // extraLayer=true
    // sortShow=true
    // generateOption=true
    this.setState({
      userArray:DataRec,
      Name:"",
      Age:"",
      Address:"",
      Department:"",
      Salary:"",
      toRun:true,
      extraLayer:true,
      sortShow:true,
      generateOption:true,
      deleteUsed:false,
      editTarget:false
    })
    }
  }
  handleSortInc=()=>{
    // toRun=false
    
    DataRec= DataRec.sort(function(a,b){
       return a.Salary - b.Salary
     })  
    //  toSortInc=false 
    this.setState({
      toSortInc:false 
    })
    //  this.forceUpdate();
     console.log(DataRec)
  }

  handleSortDec=()=>{
    // toRun=false
    
    DataRec= DataRec.sort(function(a,b){
       return b.Salary - a.Salary
     })   
     this.setState({
       toSortInc:true
     })
    //  toSortInc=true
    //  this.forceUpdate();
     console.log(DataRec)
     
  }

  handleSelectChange=(e)=>{
    
    let selectedOption=e.target.value
    console.log(selectedOption)
    if (selectedOption==="Show_All"){
      // this.setState({
      // selectUsed:false,
      // extraLayer:true
      // })
      this.setState({
        selectUsed:false,
        toRun:true,
        extraLayer:true,
      })
      // toRun=true
    }
    else{
      this.setState({
        toRun:true,
        selectUsed:true,
        extraLayer:false
        })
      // toRun=false
      filteredDept=DataRec.filter((e)=>{
      return e.Department===selectedOption
    })
    
    }
  }
  handleDelete=(e)=>{
    let deleteValSal=e.target.parentElement.previousSibling.textContent
    let deleteValDept=e.target.parentElement.previousSibling.previousSibling.textContent
    let deleteValAdd=e.target.parentElement.previousSibling.previousSibling.previousSibling.textContent
    let targetAge=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    let targetName=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    DataRec=DataRec.filter((e)=>{
      return e.Salary!==deleteValSal && e.Department!==deleteValDept && e.Address!==deleteValAdd && e.Name!==targetName && e.Age!==targetAge
    })
    this.setState({
      deleteUsed:true,
      extraLayer:true
      })

    if(DataRec.length<1){
      this.setState({
        toRun:false,
        sortShow:false,
        selectUsed:false
      })
    }
    console.log(deleteValSal,deleteValDept)
  }
  handleEdit=(e)=>{
    this.setState({
      extraLayer:false
    })
    targetSalary=e.target.parentElement.previousSibling.previousSibling.textContent
    targetDepartment=e.target.parentElement.previousSibling.previousSibling.previousSibling.textContent
    targetAddress=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    targetAge=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    targetName=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    console.log(targetName,targetAge,targetAddress,targetDepartment,targetSalary)
    this.setState({
      Name:targetName,
      Age: targetAge,
      Address: targetAddress,
      Department: targetDepartment,
      Salary: targetSalary,
      extraLayer:true
    })
    // let iName=document.getElementById("inputName").value
    // console.log(iName,targetName)
    // // iName=targetName
    // targetName=iName
    // console.log(iName, targetName)
    // let iAge=document.getElementById("inputAge").value
    // // iAge=targetAge
    // targetAge=iAge
    // let iAddress=document.getElementById("inputAddress").value
    // // iAddress=targetAddress
    // targetAddress=iAddress
    // let iDepartment=document.getElementById("inputDepartment").value
    // // iDepartment=targetDepartment
    // targetDepartment=iDepartment
    // let iSalary=document.getElementById("inputSalary").value
    // // iSalary=targetSalary
    // targetSalary=iSalary
    
  }

  handleUpdate=()=>{
    // targetSalary=e.target.parentElement.previousSibling.previousSibling.textContent
    // targetDepartment=e.target.parentElement.previousSibling.previousSibling.previousSibling.textContent
    // targetAddress=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    // targetAge=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    // targetName=e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent
    targetSalary=this.state.Salary
    targetDepartment=this.state.Department
    targetAddress=this.state.Address
    targetAge=this.state.Age
    targetName=this.state.Name
    this.forceUpdate();
    console.log(targetName,targetAge,targetAddress,targetDepartment,targetSalary)
  }
  forceRender=()=>{
    this.forceUpdate();
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form-group mt-5 mx-auto">
          <p className=" my-4 col mx-auto text-center display-4">Employee Database</p>
          <input onChange={this.handleInputChange} id="inputName" className="form-control m-1 col-3 mx-auto" placeholder="Enter Name here" type="text" value={this.state.Name} name="Name" />
          <input onChange={this.handleInputChange} id="inputAge" className="form-control m-1 col-3 mx-auto" placeholder="Enter Age here" type="number" value={this.state.Age} name="Age" />
          <input onChange={this.handleInputChange} id="inputAddress" className="form-control m-1 col-3 mx-auto" placeholder="Enter Address here" type="text" value={this.state.Address} name="Address" />
          <input onChange={this.handleInputChange} id="inputDepartment" className="form-control m-1 col-3 mx-auto" placeholder="Enter Department here" type="text" value={this.state.Department} name="Department" />
          <input onChange={this.handleInputChange} id="inputSalary" className="form-control m-1 col-3 mx-auto" placeholder="Enter Salary here" type="number" value={this.state.Salary} name="Salary" />
          <small className="text-danger col-3 row mx-auto " >*all fields are required</small>
          <div className="row">
          <button type="submit" className="btn btn-primary py-2 px-3 my-3 mx-auto text-center">Submit</button>
          </div>
        </form>
        {/* <button onClick={this.handleUpdate}>Update</button> */}
        <div className="container-fluid my-2">
        <div className="row">
          {(this.state.toSortInc===false && this.state.sortShow===true) ? <button type="button" onClick={this.handleSortDec} className="btn btn-success mx-auto">Sort by Salary <span role="img" aria-label="inc">⬆️</span></button> : <p></p>}
          {(this.state.toSortInc===true && this.state.sortShow===true) ? <button type="button" onClick={this.handleSortInc} className="btn btn-success mx-auto">Sort by Salary <span role="img" aria-label="dec">⬇️</span></button> : <p></p>}
          </div>
          <div className="d-flex justify-content-end container">
          {(this.state.toRun) && <select className="custom-select col-2" onChange={this.handleSelectChange}><option selected disabled>Sort by department</option><option>Choose option from below</option><option>Show_All</option>
          {(this.state.generateOption) && DataRec.map((e)=>{return <option key={uuid1()}>{e.Department}</option>})}
          </select> }
          </div>
        </div>
        <div className="container">
          <table className="table table-hover">
            {(this.state.toRun) ? <thead className="thead-dark"><tr><th>Name</th><th>Age</th><th>Address</th><th>Department</th><th>Salary</th><th>Delete</th><th>Edit</th></tr></thead> : <thead></thead>}
            <tbody>
            {/* {(toSortInc===true) ? DataRec.map((e,index)=>{return <tr key={uuid1()}><td>{e.Name}</td><td>{e.Age}</td><td>{e.Address}</td><td>{e.Department}</td><td>{e.Salary}</td></tr>}) : <tr></tr> } */}
            {(this.state.selectUsed) ? filteredDept.map((e)=>{return <tr key={uuid1()}><td>{e.Name}</td><td>{e.Age}</td><td>{e.Address}</td><td>{e.Department}</td><td>{e.Salary}</td><td><button className="btn btn-danger"  onClick={this.handleDelete}>Delete</button></td><td><button className="btn btn-warning"  onClick={this.handleEdit}>Edit</button></td></tr>}) : <tr></tr> }

            {(this.state.toRun && this.state.extraLayer) ? DataRec.map((e)=>{return <tr key={uuid1()}><td>{e.Name}</td><td>{e.Age}</td><td>{e.Address}</td><td>{e.Department}</td><td>{e.Salary}</td><td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td><td><button className="btn btn-warning"  onClick={this.handleEdit}>Edit</button></td></tr>}) : <tr></tr> }
           </tbody>         
          </table>
        </div>
      </div>
    )
  }
}

export default App;