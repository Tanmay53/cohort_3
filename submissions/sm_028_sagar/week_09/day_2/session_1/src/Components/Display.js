import React, { Component } from 'react'
const axios = require('axios');

export default class Display extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:JSON.parse(localStorage.getItem('github_user'))
        }
       this.componentDidMount()
    }

    callProfile = user => {
        console.log('user ',user)
        this.props.returnProfile(user)
    }
    
    getProfileData = (username) =>{
        axios.get(`https://api.github.com/users/${username}/repos`)
                .then(res => this.callProfile(res))
                // .then(res => console.log(res,this))
                .catch(err => console.log(err))
        
    }

    componentDidMount = () =>{
        if(this.props.value[0] === 'username'){
            const request = axios.get("https://api.github.com/search/users",{
                params:{
                    q:this.props.value[1]
                }
            })
              .then(console.log(this.props.value))
              .then(res => 
                {
                localStorage.setItem('github_user',JSON.stringify(res.data.items));
                this.setState({
                    data:res.data.items
                })}
               )
              .catch(err => console.log(err))
        }else if(this.props.value[0] === 'repos'){
            axios.get(`https://api.github.com/search/repositories?q=${this.props.value[1]}+language:${this.props.value[2]}`)
            .then(res => 
                    {
                        localStorage.setItem('github_user',JSON.stringify(res.data.items));
                        this.setState({
                            data:res.data.items
                        })
                    }
               )
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
            
      }

    render() {
        console.log(this.state.data)
        if(this.props.value[0] === 'username'){
            return (
                <div className='container mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Profile</th>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Score</th>
                            <th scope="col">Check Repo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(user =>
                               <tr key={user.id}>
                                   <td><img src={user.avatar_url} alt={user.login} className='rounded' width='100px'></img></td>
                                   <td>{user.id}</td>
                                   <td>{user.login}</td>
                                   <td>{user.score}</td>
                                   <td><button className='btn btn-outline-primary' onClick={()=>this.getProfileData(user.login)}>Show repo</button></td>
                               </tr>
                               )}
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return (
            <div className='container'>
                <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">id</th>
                                    <th scope="col">forks</th>
                                    <th scope="col">open_issues</th>
                                    <th scope="col">watchers</th>
                                    <th scope="col">Check Repo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(({name,html_url,forks,open_issues,watchers,id}) =>
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{id}</td>
                                    <td>{forks}</td>
                                    <td>{open_issues}</td>
                                    <td>{watchers}</td>
                                    <td><a href={html_url}>Check repo</a></td>
                                </tr>
                                )}
                            </tbody>
                        </table>
            </div>
           )
        }
        
    }
}
