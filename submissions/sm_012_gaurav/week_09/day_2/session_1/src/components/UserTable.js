import React from 'react';
import axios from 'axios';
import UserTableRow from './UserTableRow';
import UserInfo from './UserInfo';

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: []
        };
    }

    componentDidMount = () => {
        let baseUrl = "https://api.github.com/search/users";
        axios({
            method:"GET",
            url: baseUrl,
            params: {q: this.props.searchQuery.trim()}
        }).then(response => {
            this.setState({searchData: response.data.items});
            this.props.resetQuery();
        });
    }

    render() {
        return (
            <>
                <table className = "table table-dark text-left mt-3">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>ID</th>
                            <th>Profile Link</th>
                            <th>Profile Pic</th>
                            <th>Score</th>
                            <th>Info Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.searchData.map(e => <UserTableRow obj = {e} key = {e.login} />)}
                    </tbody>
                </table>
                {this.state.searchData.map(e => <UserInfo username = {e.login} key = {e.login} />)}
            </>
        );
    }
}

export default UserTable;