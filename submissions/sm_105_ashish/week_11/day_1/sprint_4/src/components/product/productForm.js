import React from 'react';
import TableData from './productTable'
class InputDetail  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            newItem:{
                Name:'',
                Id:'',
                Description:'',
                Material:'',
                Category:'',
                Price:0,
            },
            newArr:[],
            isAppliances:false

        };
      }
        getDetail=()=>{ 
            let list=[...this.state.arr,{...this.state.newItem}]
            this.setState(()=>({
               arr:list,
               newArr:list
            }));
        }
        handleChange=(e)=>{
            let isapp = this.state.isAppliances;
            if(e.target.value=="Appliances"){
                  isapp = true;
            }
            else{
                isapp = false;
            }
            this.setState({isAppliances:isapp})
            let obj={...this.state.newItem,[e.target.name] : e.target.value}

            this.setState(()=>({
                newItem:obj
            }))
            
        }
        filterData=(val)=>{
            let list=[...this.state.arr]
            let newList=
           list.filter((ele)=>{
                if(ele.Category==val.target.value){
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
       filterByMaterial =(val) => {
        let list=[...this.state.arr]
        let newList=
       list.filter((ele)=>{
            if(ele.Material==val.target.value){
               // if
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

      render(){
        return (
        <div className="row border m-2">
            <div className="col-5 m-auto">
                <h1 className="text-center">Add New Item</h1>
                <form className="border bg-info p-3" onSubmit={(e)=>e.preventDefault()}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Item Name</label>
                        <input name="Name" onChange ={this.handleChange} type="text" className="form-control" id="name"  placeholder="Enter Item Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Item id</label>
                        <input  name="Id" onChange ={this.handleChange} type="text" className="form-control" id="age" placeholder="Enter item id"/>
                    </div>
                </div>
                <div className="form-row">
                 <div className="form-group col-md-6">
                        <label htmlFor="department">Category:</label>
                        <select name="Category" onChange ={this.handleChange} className="form-control" id="category">
                            <option   disabled>Select category</option>
                            <option>Bedroom</option>
                            <option>Living Room</option>
                            <option>Dining</option>
                            <option>Appliances</option>
                        </select>
                    </div>
                <div className="form-group col-md-6">
                        <label htmlFor="department">Material</label>
                        <select  name="Material" onChange ={this.handleChange} className="form-control" id="category" disabled={this.state.isAppliances}>
                            <option>Select Material</option>
                            <option>Teak</option>
                            <option>Oak</option>
                            <option>Walnut</option>
                            <option>Maple</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                  
                     <div className="form-group col-md-6">
                    <label htmlFor="address">Description</label>
                    <input name="Description" onChange ={this.handleChange} type="text" className="form-control" id="address" placeholder="description"/>
                </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="salary">Price</label>
                        <input type="text" onChange ={this.handleChange} name="Price" className="form-control" id="salary" placeholder="Enter item price"/>
                    </div>
                </div> 
                <div className="text-center">
                    <button type="submit" onClick={this.getDetail} className="btn btn-primary">Add Item</button>
                </div>
                </form>
            </div>
                 <TableData data={this.state.newArr} filter={this.filterData} filterM={this.filterByMaterial}/>
        </div>
        );
    }
}
export default InputDetail;