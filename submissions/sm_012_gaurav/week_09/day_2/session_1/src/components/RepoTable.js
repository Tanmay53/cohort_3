import React from 'react';
import axios from 'axios';

function RepoTableRow(props) {
    return (
        <>
            <tr>
                <td>{props.obj.name}</td>
                <td>{props.obj.id}</td>
                <td>{props.obj.description}</td>
                <td>{props.obj.forks}</td>
                <td>{props.obj.open_issues}</td>
                <td>{props.obj.score}</td>
                <td><a href = {props.obj.html_url} target = {'_blank'}>Github Link</a></td>
            </tr>
        </>
    );
}


class RepoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoData: []
        };
    }

    componentDidMount = () => {
        let repoApiUrl = '';
        if (this.props.langQuery.trim().length === 0) {
            repoApiUrl = `https://api.github.com/search/repositories?q=${this.props.repoQuery.trim()}`;
        }
        else {
            repoApiUrl = `https://api.github.com/search/repositories?q=${this.props.repoQuery.trim()}+language:${this.props.langQuery.trim()}`;
        }
        axios({
            method: "GET",
            url: repoApiUrl
        }).then(response => {
            this.setState({
                repoData: response.data.items
            });
            this.props.resetQuery();
        });
    }

    render() {
        return (
            <>
                <table className = "table table-dark text-left mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Forks</th>
                            <th>Open Issues</th>
                            <th>Score</th>
                            <th>Repo Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.repoData.map(e => <RepoTableRow obj = {e} key = {e.id} />)}
                    </tbody>
                </table>
            </>
        );
    }
}



export default RepoTable;