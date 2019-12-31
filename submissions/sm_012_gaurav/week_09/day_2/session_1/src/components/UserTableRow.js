import React from 'react';
import axios from 'axios';

class UserTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: ''
        };
    }

    componentDidMount = () => {
        axios({
            method: "GET",
            url: "https://api.github.com/users/"+this.props.obj.login,
        }).then(response => {
            this.setState({
                userData: response.data
            });
        });
    }

    render() {
        return (
            <>
                <tr>
                    <td>{this.props.obj.login}</td>
                    <td>{this.props.obj.id}</td>
                    <td><a href = {this.props.obj.html_url} target = {'_blank'}>Profile Link</a></td>
                    <td>
                        <img src = {this.props.obj.avatar_url} className = "rounded-circle" alt = {this.props.obj.login} height = "80" width = "80"></img>
                    </td>
                    <td>{this.props.obj.score}</td>
                    <td><button className = "btn btn-primary" data-toggle = {"modal"} data-target = {`#${this.props.obj.login}`}>Show Info</button></td>
                </tr>
            </>
        );
    }
}

export default UserTableRow;