import React, { Component } from 'react'
import Table from './Table'
import Repository from './Repository'

export default class GitApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            repository: "",
            isShow: false,
            repoShow: false,
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        this.setState({
            isShow: true
        })
    }

    handelRepo = (e) => {
        this.setState({
            repoShow: true
        })
    }

    render() {
        console.log(this.state.repository);
        console.log(this.state.repoShow);
        if (this.state.isShow === false && this.state.repoShow === false) {
            return (
                <div>
                    <div className="container">
                        <div className="text-center h1 p-5">Search User</div>
                        <form>
                            <input name="username" value={this.state.username} onChange={this.handelChange} type="text" className="form-control mx-5" />
                        </form>
                        <button onClick={this.handelSubmit} className='btn btn-secondary m-3 px-5'>Search User</button>
                    </div>
                    <div className="container">
                        <div className="text-center h1 p-5">Search Repository</div>
                        <form>
                            <input name="repository" value={this.state.repository} onChange={this.handelChange} type="text" className="form-control mx-5" />
                        </form>
                        <button onClick={this.handelRepo} className='btn btn-secondary m-3 px-5'>Search Repository</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.state.isShow && <Table username={this.state.username} />}
                    {this.state.repoShow && <Repository repositoryLang={this.state.repository} />}
                </div>

            )
        }
    }
}