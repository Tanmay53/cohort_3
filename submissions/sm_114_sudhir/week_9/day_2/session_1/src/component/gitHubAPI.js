import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import SearchBar from './searchBar'
import Table from './table'
import axios from 'axios'
import Modal from './modal'


export default class GitHubAPI extends Component {
    constructor(props){
        super(props)
        this.state = {
            tableHead : ['Id', 'Url' ,'Image', 'Score', 'Repos URL'],
            tableRepoSearch : ['Id', 'Full Name', 'Langauge', 'Description'],
            searchBtn : 'Search',
            searchRepo : 'Repos Search',
            gitHubUserURL : 'https://api.github.com/search/users?q=',
            gitHubRepo : 'https://api.github.com/search/repositories?q=',
            query : '',
            lang : '',
            users : [],
            userRepos : [],
            langUser : [],
            isUser : false
        }
    }

    handleChange = (e) => {
        // alert('Hello')
        let q = this.state.query
        let l =this.state.lang
        q = e.target.value
        l = e.target.value
        this.setState(() => ({
            query : q,
            lang : l
        }));
    }

    submit = (e) => {
        e.preventDefault()
        let s = this.state.gitHubUserURL
        let q = this.state.query
        let baseURL = s+q
        // console.log(baseURL)
        axios.get(baseURL,{},true)
        .then(res => {
            const data = res.data.items
            this.setState(() => ({
                users : data,
                isUser : false
            }));
        })
        .catch(err => alert(err.mesaage))        
    }

    submitLang = (e) => {
        e.preventDefault()
        let l = this.state.lang
        let repl = this.state.gitHubRepo
        let baseURL = repl + l
        // console.log(l, repl, baseURL)
        axios.get(baseURL,{},true)
        // .then(res => console.log(res))
        .then(res => {
            let lArr = [...res.data.items]
            this.setState(() => ({
                langUser : lArr,
                isUser : true
            }));
            console.log(this.state.langUser)
        })
        .catch(err => console.log(err.message))

    }

    getUserRepos = (e) => {
        let reposLink = e.target.value
        alert(reposLink)
        axios.get(reposLink)
        .then(res => {
            let newArr =  [...res.data]
            this.setState(() => ({
                userRepos : newArr
            }));
            console.log(this.state.userRepos)
        })
        .catch(err => console.log(err.message))
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-12">
                            <h1 className="text-center font-weight-bold">GitHub User Search</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 text-center">
                            <SearchBar sub={this.submit} 
                                       inp = {this.handleChange} 
                                       val = {this.state.query} 
                                       search = {this.state.searchBtn}
                                       />
                        </div>
                        <div className="col-4">
                            <SearchBar search={this.state.searchRepo}
                                       inp = {this.handleChange}
                                       sub = {this.submitLang}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" id="table">
                            {if(isUser == false){
                                <Table tbl = {this.state.tableHead} 
                                       tbd={this.state.users} 
                                       getRepos = {this.getUserRepos}
                                        />    
                            }
                            else{
                                <Table tbl = {this.state.tableRepoSearch}
                                       tbd = {this.state.langUser}/>
                            }}
                            
                        </div>
                        <Modal userrep={this.state.userRepos}/>
                    </div>
                </div>
            </div>
        )
    }
}
