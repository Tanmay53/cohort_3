import React, { Component } from 'react'
import axios from "axios"

export default class Repository extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repositoryData: [],
            isRepoShow: "showWaiting"
        }
    }

    componentDidMount() {
        console.log("hi")
        axios.get("https://api.github.com/search/repositories?q=tetris+language:" + this.props.repositoryLang)
            .then(res => {
                var repoData = res.data.items
                this.setState({
                    repositoryData: repoData,
                    isRepoShow: "showAll"
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.props.repositoryLang)
        console.log(this.state.repositoryData)
        if (this.state.isRepoShow === "showWaiting") {
            return (<div><p className="h3">Waiting for data to show</p></div>)
        }
        if (this.state.isRepoShow === "showAll") {
            return (
                <div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr No.</th>
                                <th>Profile Picture</th>
                                <th>Language Name</th>
                                <th>User Name</th>
                                <th>Created At</th>
                                <th>Score</th>
                                <th>Repos Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.repositoryData.map((item, index) =>
                                <tr key={item + index}>
                                    <td className="p-5">{index + 1}</td>
                                    <td><img src={item.owner.avatar_url} height="100px" alt={item.name} /></td>
                                    <td className="p-5">{item.language}</td>
                                    <td className="p-5">{item.owner.login}</td>
                                    <td className="p-5">{item.created_at}</td>
                                    <td className="p-5">{item.score}</td>
                                    <td className="p-5"><a href={item.html_url} target="_blank" rel="noopener noreferrer">Click Here to visit Page</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}