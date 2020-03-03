import React from 'react'
import Table from './components/Table'
import Userdetails from './components/Userdetails'
import axios from 'axios'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            repository:'',
            category:'',
            data:[],
            isinputshow:false,
            isdata:false,
            issearch:false,
            filtereddata:[]
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSelectChange=(e)=>{
        if(e.target.value==="urepository"){
            this.setState({
                [e.target.name]:e.target.value,
                isinputshow:true
            })
        }
        else{
            this.setState({
                [e.target.name]:e.target.value,
                isinputshow:false
            })
        }
    }

    handleClick=()=>{
        if(this.state.category==="uname"){
        axios.get('https://api.github.com/search/users?q='+this.state.name)
        .then(res=>{
            // console.log(res.data.items)
            if (res){
                this.setState({
                    isdata:true,
                    data:res.data.items
                })
            }
        })
        .catch(error=>console.log(error))
        this.reset()
        }else if(this.state.category==="urepository"){
            axios.get('https://api.github.com/search/repositories?q='+this.state.repository+'language:'+this.state.name+'&sort=stars&order=desc')
            .then(res=>{
                // console.log(res.data.items)
                if(res){
                    this.setState({
                        isdata:true,
                        data:res.data.items.map(element=>element['owner'])
                    })
                }
            })
            .catch(error=>console.log(error))
            this.reset()
        }
    }
    reset=()=>{
        this.setState({
            name:'',
            repository:'',
            category:'', 
        })

    }

    handleData=(login)=>{
        this.setState({filtereddata:this.state.data.filter(elements=>elements.login===login),
                        issearch:!this.state.issearch})
    }

    render(){
        if(!this.state.issearch){
            return(
                <div className="container bg-primary py-3">
                    <h1 className="text-center text-white font-weight-bold mb-5"><u>Github User Search Application</u></h1>
                    <select name="category"  onChange={this.handleSelectChange} className="form-control col-lg-6 offset-lg-3">
                        <option value="">-- Select --</option>
                        <option value="uname">By Name</option>
                        <option value="urepository">By Repository</option>
                    </select><br/>
                    
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Search by username/Repository" className="form-control col-lg-6 offset-lg-3"/><br/>
                    {this.state.isinputshow && <input name="repository" value={this.state.repository} onChange={this.handleChange} placeholder="Search by programming Language" className="form-control col-lg-6 offset-lg-3"/>}<br/>

                    <button onClick={()=>this.handleClick()} className="btn btn-warning form-control offset-lg-3 col-lg-6 mb-3">Search</button>
                    {this.state.isdata && <Table tabdata={this.state.data} moredata={this.handleData}/>}
                </div>
            )  
        }  
        else{ 
        return(
            <div>
                <Userdetails userinfo={this.state.filtereddata[0]}/>
            </div>
            )
        }
    }
}
export default App