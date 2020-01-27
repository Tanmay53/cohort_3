import React from 'react'
import axios from 'axios'
import Details from './Details'
import List from './List'
import Repos from './Repos'


class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            data:[],
            info:{},
            flag:true,
            repos:[],
            lang:'',
            repoFlag:false
        }
    }

    handleClick=()=>{
        var config1={
            method:'get',
            url:'https://api.github.com/search/users',
            params:{
                q:this.state.name
            }
            
        }
        axios(config1)
        // .then(res=>console.log(res.data.items))
        .then(res=> this.setState({
            data:res.data.items,
            flag:'yes',
            repoFlag:false
        }))
        .catch(err=>console.log(err))
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    callback=(childData)=>{
        this.setState({
            flag:childData,
            repoFlag:false
        })
    }

    clickInfo=(InfoIn)=>{
        let info1=this.state.data.filter(ele=>ele.id==InfoIn)
        this.setState({
            info:info1,
            flag:'no',
            repoFlag:false
        })
        // console.log(this.state.info) 
    }

    repoClick=()=>{
        this.setState({
            repoFlag:true,
        })
        var config3={
            method:'get',
            url:`https://api.github.com/search/repositories?q=${this.state.name}+language:${this.state.lang.toLowerCase()}`
        }
        axios(config3).
        then(resp=>this.setState({
        repos:resp.data.items
            })
        )
        .catch(err=>console.log(err))

        console.log(this.state.repos)
    }

    changeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            lang:e.target.value
        })
    }

    render(){
        return(
            <div>
                
                <div className='container mt-4'>
                        <div className='form-group col-8 row ml-4'>
                            <input className='col form-control' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Enter the name here...'/>
                            <div className='col-3 btn btn-info mx-4' onClick={this.handleClick}>SEARCH USER</div>
                        </div>
                        <div className='form-group col-8 row ml-4'>
                            <select className='col-7 form-control mx-4' onChange={this.changeHandler}>
                                <option value=''>select the category</option>
                                <option value='JavaScript'>JavaScript</option>
                                <option value='Swift'>Swift</option>
                                <option value='Shell'>Shell</option>
                                <option value='C'>C</option>
                                <option value='HTML'>HTML</option>
                                <option value='Java'>Java</option>
                                <option value='Ruby'>Ruby</option>
                                <option value='Go'>Go</option>
                            </select>
                            <div className='col-4 btn btn-info' onClick={this.repoClick}>SEARCH REPOSITORY</div>
                        </div>
                    </div>

                    {(this.state.flag=='yes' && this.state.repoFlag==false) && 
                       <List dataout={this.state.data} listCallback={this.clickInfo} /> }

                    {(this.state.flag=='no' && this.state.repoFlag==false) && 
                       <Details obj={this.state.info[0]} parentCallback={this.callback} /> }   



                    {
                        this.state.repoFlag==true &&
                        <Repos lan={this.state.repos}/>
                    }
                
            </div>
        )
    }
}

export default Table