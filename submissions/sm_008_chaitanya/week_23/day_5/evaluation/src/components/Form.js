import React from 'react'
import Table from './Table'
import uuid from 'react-uuid'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            class:'',
            section:'',
            subject:'',
            id:null,
            staffData:[],
            filterData:[],
            isdata:false,
            isedit:false,
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let formData={
            name:this.state.name,
            class:this.state.class,
            section:this.state.section,
            subject:this.state.subject,
            id:uuid()
        }
        this.setState({
            staffData:[...this.state.staffData,formData],
            filterData:[...this.state.filterData,formData],
            isdata:true
        })
        let localData=[...this.state.staffData,formData]
        localStorage.setItem('data',JSON.stringify(localData))
   
        this.reset()
    }

    reset=()=>{
        this.setState({
            name:'',
            class:'',
            section:'',
            subject:'',
        })
    }
    componentDidMount(){
        if(localStorage.getItem('data')){
            this.setState({
                staffData:JSON.parse(localStorage.getItem('data')),
                filterData:JSON.parse(localStorage.getItem('data')),
                isdata:true
            })
        }
    }

    editUser=(id)=>{
        let user=this.state.filterData.find(element=>element.id===id)
        this.setState({
            name:user.name,
            class:user.class,
            section:user.section,
            subject:user.subject,
            id:user.id,
            isedit:true
        })
    }

    handleUpdate=(e)=>{
        e.preventDefault()
        let formData={
            name:this.state.name,
            class:this.state.class,
            section:this.state.section,
            subject:this.state.subject,
            id:this.state.id
        }
        const {filterData,id}=this.state
        const newUserData=filterData.map(element=>{
            if(element.id===id){
                return formData
            }
            return element
        })
        this.setState({
            staffData:newUserData,
            filterData:newUserData,
            isedit:false
        })
        localStorage.setItem('data',JSON.stringify(newUserData))
        this.reset()
    }

    deleteUser=(id)=>{
        let userData = this.state.staffData.filter(element=>element.id!==id)
        this.setState({
            filterData:[...userData]
        })
        localStorage.setItem('data',JSON.stringify(userData))
    }

    sectionFilter=(e)=>{
        (e.target.value==="all"?
        this.setState({filterData:this.state.staffData}):
        this.setState({filterData:this.state.staffData.filter(element=>element.section===e.target.value)})
        )
    }

    subjectFilter=(e)=>{
        (e.target.value==="all"?
        this.setState({filterData:this.state.staffData}):
        this.setState({filterData:this.state.staffData.filter(element=>element.subject===e.target.value)})
        )
    }

    render(){
        let buttonName=(this.state.isedit)?"UPDATE":"SUBMIT"
        let submitFunc=(this.state.isedit)?this.handleUpdate:this.handleSubmit

        return(
            <div className="container">
                <h1 className="text-center text-primary shadow my-3">Masai Teachers Dashboard</h1>
                <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-3 py-4 border shadow-lg">
                    <form onSubmit={submitFunc}>
                        <div className="form-group">
                            <label className="h5">Teacher</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter Name of the Teacher"/>
                        </div>
                        <div className="form-group">
                            <label className="h5">Class</label>
                            <select name="class" value={this.state.class} onChange={this.handleChange} className="form-control">
                                <option value="--">-- Select Class --</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="h5">Section</label>
                            <select name="section" value={this.state.section} onChange={this.handleChange} className="form-control">
                                <option value="--">-- Select Section --</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="h5">Subject</label>
                            <select name="subject" value={this.state.subject} onChange={this.handleChange} className="form-control">
                                <option value="--">-- Selec Subject --</option>
                                <option value="MATHS">MATHS</option>
                                <option value="PHYSICS">PHYSICS</option>
                                <option value="CHEMISTRY">CHEMISTRY</option>
                                <option value="COMPUTERS">COMPUTERS</option>
                                <option value="SOCIAL">SOCIAL</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary mt-3">{buttonName}</button>
                        </div>
                    </form>
                </div>
                {this.state.isdata && <Table data={this.state.filterData}
                                             handleEdit={this.editUser}
                                             handleDelete={this.deleteUser}
                                             filterSection={this.sectionFilter}
                                             filterSubject={this.subjectFilter}/>}
            </div>
        )
    }
}
export default Form