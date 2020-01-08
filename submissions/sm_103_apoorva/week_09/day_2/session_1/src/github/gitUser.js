import React from 'react'
import axios from 'axios'
import Data from './gitUserTable'
import Repodata from './gitRepoTable'

class Git extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username : "",
            repoSearch : "",
            data : [],
            table : true
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    getUser=() =>
    {
        var user = this.state.username
        var baseUrl = "https://api.github.com/search/users?q="
        // console.log(baseUrl+user)
        axios.get(baseUrl+user)
        .then(res => {
            const data = res.data.items
            // console.log(res)
            console.log(data)
            this.setState({
                data : data,
                table : true
            })
        })
        .catch(error => console.log(error))
        this.setState({
            username : ""
        })
    }

    getRepo=() =>
    {
        var repo = this.state.repoSearch
        var baseUrl = "https://api.github.com/search/repositories?q="
        // console.log(baseUrl+repo)
        axios.get(baseUrl+repo)
        .then(res => {
            const data = res.data.items
            // console.log(res)
            console.log(data)
            this.setState({
                data : data,
                table : false
            })
        })
        .catch(error => console.log(error))
        this.setState({
            repoSearch : ""
        })
    }


    render()
    {
        return(
            <div>
                <div className="d-flex justify-content-center">
                    <img src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png" alt="github logo" height="80px" ></img>
                </div>
                <h1 className = "display-3 text-center font-weight-normal">github App</h1>
                <h5 className="text-center">Search by username or repository</h5>
                <div className="row mt-4">
                    <div className = "col">
                        <div className="form-group ml-5">
                            <label htmlFor="exampleInputEmail1" className="h3 font-weight-bold">Search for User</label>
                            <input onChange={this.handleChange} name = "username" value ={this.state.username} type="text" className="form-control border-danger w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        </div>
                        <button   type="submit" onClick={this.getUser} className="btn btn-primary ml-5">Submit</button>
                    </div>
                    <div className = "col">
                        <div className = "col">
                            <div className="form-group w-50 ml-3">
                                <label htmlFor="exampleInputEmail1" className="h3 font-weight-bold">Search for repo</label>
                                <input onChange={this.handleChange} name = "repoSearch" value ={this.state.repoSearch} type="text" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter repo" />
                            </div>
                            <button   type="submit" onClick={this.getRepo} className="btn btn-primary ml-3">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="text-center">User/Repo Table</h2>
                    {this.state.table ? ( 
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">User Image</th>
                                <th scope="col">Score</th>
                                <th scope="col">Info</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((ele)=> (
                                    <Data label={ele}/>
                                )
                            )}
                            </tbody>
                        </table>
                    ):
                    (<table className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">Repo id</th>
                                    <th scope="col">Repo Name</th>
                                    <th scope="col">Owner id</th>
                                    <th scope="col">Owner Image</th>
                                    <th scope="col">Repo Score</th>
                                    <th scope="col">Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map((ele)=> (
                                        <Repodata label={ele}/>
                                    )
                                )}
                                </tbody>
                        </table>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default Git