import React from 'react'
import Table from './components/Table'
import Userdetails from './components/Userdetails'
import axios from 'axios'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            data:[],
            isdata:false,
            issearch:false,
            filtereddata:[]
        }
    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick=()=>{
        axios.get('https://api.github.com/search/users?q='+this.state.name)
        .then(res=>{
            if (res){
                this.setState({
                    isdata:true,
                    data:res.data.items
                })
            }
        })
        .catch(error=>console.log(error))
    }

    handleData=(login)=>{
        this.setState({filtereddata:this.state.data.filter(elements=>elements.login===login),
                        issearch:!this.state.issearch})
        // console.log(this.state.data.filter(elements=>elements.login===login))
    }

    render(){  
        if(!this.state.issearch){
            return(
                <div>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <select name="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <button onClick={()=>this.handleClick()}>Search</button>
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