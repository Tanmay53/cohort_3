import React from 'react'
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            address:'',
            department:'',
            salary:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toUpperCase()})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.parentFunc(this.state)
        this.reset()
        
    }

    reset=()=>{
        this.setState({
            name:'',
            age:'',
            address:'',
            department:'',
            salary:''
        })
    }

    render(){
        return(
           <div className="container my-3">
              <h3 className="text-center text-primary display-4">Employee Details</h3>
              <hr/>
              <div className="row">
                 <div className="col-10 offset-1 col-md-8 col-lg-6 offset-lg-3 border border-primary py-2">
                     <form onSubmit={this.handleSubmit}>

                        <div className="form-group h4">
                           <label>Name</label>
                           <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group h4">
                           <label>Age</label>
                           <input type="text" name="age" value={this.state.age} onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group h4">
                           <label>Address</label>
                           <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group h4">
                           <select name="department" value={this.state.department} onChange={this.handleChange} className="form-control">
                                 <option value="--">--Select--</option>
                                 <option value="ECE">ECE</option>
                                 <option value="EEE">EEE</option>
                                 <option value="CSE">CSE</option>
                                 <option value="MECH">MECH</option>
                                 <option value="CIVIL">CIVIL</option>
                           </select>
                        </div>

                        <div className="form-group h4">
                           <label>Salary</label> 
                           <input type="text" name="salary" value={this.state.salary} onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="text-center">
                           <input type="submit" value="Submit" className="btn btn-primary"/>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
        )
    }
}
export default Form 