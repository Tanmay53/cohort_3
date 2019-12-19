import React from 'react';
import axios from 'axios';


class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: ''
        };
    }

    componentDidMount = () => {
        axios({
            method: "GET",
            url: "https://api.github.com/users/"+this.props.username
        }).then(response => {
            this.setState({
                userData: response.data
            });
        });
    }

    render() {
        return (
            <div className="modal fade" id={this.props.username} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{`Name: ${this.state.userData.name}`}</p>
                        <p>{`Location: ${this.state.userData.location}`}</p>
                        <p>{`Public Repos: ${this.state.userData.public_repos}`}</p>
                        <p>{`Followers: ${this.state.userData.followers}`}</p>
                        <p>{`Following: ${this.state.userData.following}`}</p>
                        <a href = {this.state.userData.blog} target = {'_blank'}>Blog Link</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;