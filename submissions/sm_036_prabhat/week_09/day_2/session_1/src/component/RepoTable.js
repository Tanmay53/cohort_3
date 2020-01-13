import React, { Component } from 'react'
import axios from 'axios'

export default class RepoTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repoData: [],
        }
    }

    componentDidMount() {
        axios.get(this.props.repoUrl)
            .then(res => {
                const repo = res.data;
                console.log(repo)
                this.setState({
                    repoData: repo
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Sr No.</th>
                            <th>Repo Name</th>
                            <th>Date Created</th>
                            <th>Git Repo Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.repoData.map((item, index) =>
                            <tr key={item + index}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.created_at}</td>
                                <td className="p-2"><a href={item.html_url} target="_blank" rel="noopener noreferrer" >Click here to Open Repository</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}