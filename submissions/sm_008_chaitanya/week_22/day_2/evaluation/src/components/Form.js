import React from 'react'
import Table from './Table'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cmpname:'',
            location:'',
            jobtitle:'',
            openings:'',
            salary:'',
            isedit:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.parentFunc(this.state)
        this.reset()
    }

    reset=()=>{
        this.setState({
            cmpname:'',
            location:'',
            jobtitle:'',
            openings:'',
            salary:'',
        })
    }

    handleEdit=(name)=>{
        var editdata1=this.props.filtereddata.filter(element=>element.cmpname===name)
        this.setState({
           cmpname : editdata1[0].cmpname,
           location:editdata1[0].location,
           jobtitle:editdata1[0].jobtitle,
           openings:editdata1[0].openings,
           salary:editdata1[0].salary,
           isedit:!this.state.isedit,
           id:editdata1[0].id
        })
    }

    handleUpdate=(e)=>{
        e.preventDefault()
        this.props.updateFunc(this.state)
        this.reset()
    }
    render(){
        let editing=(this.state.isedit)?"Update":"Submit"
        let submitFunction=(this.state.isedit)?(this.handleUpdate):(this.handleSubmit)
        return(
            <React.Fragment>
                <div className="container">
                <h1 className="text-center mt-4 text-info font-weight-bold shadow">Employement Form</h1>
                    <div className="row my-5">
                        <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 border rounded p-5 shadow">
                            <form onSubmit={submitFunction}>
                                <div className="form-group h5">
                                    <select name="cmpname" value={this.state.cmpname} onChange={this.handleChange} className="form-control">
                                        <option value="--">-- Company Name --</option>
                                        <option value="GOOGLE">GOOGLE</option>
                                        <option value="FACEBOOK">FACEBOOK</option>
                                        <option value="AMAZON">AMAZON</option>
                                        <option value="MICROSOFT">MICROSOFT</option>
                                        <option value="ORACLE">ORACLE</option>
                                        <option value="FLIPKART">FLIPKART</option>
                                        <option value="GENPACT">GENPACT</option>
                                        <option value="SUTHERLANDS">SUTHERLANDS</option>
                                        <option value="TCS">TCS</option>
                                    </select>
                                </div>
                                <div className="form-group"> 
                                    <label className="h5">Location</label>
                                    <input type="text" name="location" onChange={this.handleChange} value={this.state.location} className="form-control" placeholder="Enter Location"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Job Title</label>
                                    <input type="text" name="jobtitle" onChange={this.handleChange} value={this.state.jobtitle} className="form-control" placeholder="Enter Job Title"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Openings</label>
                                    <input type="text" name="openings" onChange={this.handleChange} value={this.state.openings} className="form-control" placeholder="Enter Total Openings"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Salary</label>
                                    <input type="text" name="salary" onChange={this.handleChange} value={this.state.salary} className="form-control" placeholder="Enter Salary"/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-info px-5 mt-3">{editing}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Table tabdata={this.props.filtereddata}
                           performSort={this.props.sortChange}
                           performFilter={this.props.filterChange}
                           performDelete={this.props.handeldel}
                           performEdit={this.handleEdit}/>
            </React.Fragment>
        )
    }
}
export default Form