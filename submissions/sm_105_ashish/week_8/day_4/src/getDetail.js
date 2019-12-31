import React from 'react';
import TableData from './table';
class InputDetail  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            newEmployee:{
                Name:'',
                Age:0,
                Address:'',
                Department:'',
                Salary:0,
            },
            newArr:[]
        };
      }
      componentDidMount(){
          let localData=localStorage.getItem('empList')
          if(localData!==null){
            this.setState({
                newArr:JSON.parse(localData),
                arr:JSON.parse(localData)
            })
          }
      }
        getDetail=()=>{ 
            let list=[...this.state.arr,{...this.state.newEmployee}]
            this.setState(()=>({
                newArr:list,
               arr:list
            }));
         let localData= localStorage.getItem('empList')
         if(localData==null){
            localStorage.setItem('empList',JSON.stringify([...list]))
         }
         else{
             localStorage.removeItem('empList')
             localStorage.setItem('empList',JSON.stringify([...list]))
         }
        }
        handleChange=(e)=>{
            let obj={...this.state.newEmployee,[e.target.name] : e.target.value}
            obj.Id=Date.now()
            this.setState(()=>({
                newEmployee:obj
            }))
        }
        filterData=(val)=>{
            let list=[...this.state.arr]
            let newList=
           list.filter((ele)=>{
                if(ele.Department==val.target.value){
                    return ele

                }
                else if(val.target.value=="All"){
                    return ele
                }
            })
            this.setState({
                newArr:newList
            })
        }
        deleteData=(e)=>{
        let list = [...this.state.newArr]
         let newlist= list.filter((ele)=>{
            if(ele.Id != e.target.value){
              return ele
            }
        })
        let localData= localStorage.getItem('empList')
         if(localData==null){
            localStorage.setItem('empList',JSON.stringify([...newlist]))
         }
         else{
             localStorage.removeItem('empList')
             localStorage.setItem('empList',JSON.stringify([...newlist]))
         }
        this.setState({
            newArr:newlist,
            arr:list
        })
        }
        sortData = (e) =>{
            let list =[...this.state.newArr]
            if(e.target.value=="Ascending"){
                list.sort(function(a,b){
                    return Number(a.Salary)-Number(b.Salary)
                })
              
            }
            else if(e.target.value=="Descending"){
                list.sort(function(a,b){
                    return Number(b.Salary)-Number(a.Salary)
                })
            }
            this.setState({
                newArr:list
            })
        }
        updateData =()=>{
            alert('hello')
        }
      render(){
        return (
        <div className="row">
            <div className="col-5">
                <h1 className="text-center">Add New Employee</h1>
                <form className="border bg-info p-3" onSubmit={(e)=>e.preventDefault()}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input name="Name" onChange ={this.handleChange} value={this.state.Name} type="text" className="form-control" id="name"  placeholder="Enter your Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input  name="Age" onChange ={this.handleChange} type="text" className="form-control" id="age" placeholder="Enter your Age"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input name="Address" onChange ={this.handleChange} type="text" className="form-control" id="address" placeholder="Enter your Address"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="department">Department:</label>
                        <select  name="Department" onChange ={this.handleChange} className="form-control" id="department">
                            <option  value="" disabled>Select your Department</option>
                            <option value="Accounts">Accounts</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                            <option value="Production">Production</option>
                            <option value="Engineering">Engineering</option>
                            <option value="HR">HR</option>


                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="salary">Salary</label>
                        <input  name="Salary" onChange ={this.handleChange} type="text" className="form-control" id="salary" placeholder="Enter your salary"/>
                    </div>
                </div> 
                <div className="text-center">
                    <button type="submit" onClick={this.getDetail} className="btn btn-primary">Add Employee</button>
                </div>
                </form>
            </div>
          <TableData database={this.state.newArr} filter={this.filterData} sort={this.sortData} del = {this.deleteData} upd={this.updateData}/>
        </div>
        );
    }
}
export default InputDetail;