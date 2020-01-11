import React, { Component } from 'react'
import RepoTable from './RepoTable'
import axios from "axios"

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileData: [],
            repoUrl: "",
            isProfileShow: "showWaiting"
        }
    }

    showRepos = (url) => {
        this.setState({
            repoUrl: url
        })
        this.setState({
            isProfileShow: "showIndividualProfile"
        })
    }

    componentDidMount() {
        axios.get('https://api.github.com/search/users?q=' + this.props.username)
            .then(res => {
                var apiData = res.data.items;
                console.log(apiData)
                if (apiData.length !== 0) {
                    this.setState({
                        profileData: apiData,
                        isProfileShow: "showAll"
                    })
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        if (this.state.isProfileShow === "showWaiting") {
            return (<div><p className="h3">Waiting for data to show</p></div>)
        }
        else if (this.state.isProfileShow === "showAll") {
            return (
                <div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr No.</th>
                                <th>Profile Picture</th>
                                <th>User Name</th>
                                <th>Score</th>
                                <th>Repos Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.profileData.map((item, index) =>
                                <tr key={item + index}>
                                    <td className="p-5">{index + 1}</td>
                                    <td><img src={item.avatar_url} height="100px" alt={item.name} /></td>
                                    <td className="p-5">{item.login}</td>
                                    <td className="p-5">{item.score}</td>
                                    <td className="p-5" onClick={() => this.showRepos(item.repos_url)} ><button>Show Repos</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }
        else if (this.state.isProfileShow === "showIndividualProfile") {
            return (
                <div>
                    {this.state.isProfileShow && <RepoTable repoUrl={this.state.repoUrl} />}
                </div>
            )
        }
    }
}