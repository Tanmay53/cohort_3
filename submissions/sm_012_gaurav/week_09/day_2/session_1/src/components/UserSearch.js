import React from 'react';
import UserTable from './UserTable';


class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            buttonClick: false
        };
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value,
            buttonClick: false
        });
    }

    handleClick = () => {
        this.setState({
            buttonClick: true
        });
    }

    resetQuery = () => {
        this.setState({
            query: ''
        });
    }


    render() {
        return (
            <>
                <div className = "col-4 mx-auto">
                    <div className = "form-group">
                        <label htmlFor = "queryUser">Search For User</label>
                        <input type = "text" className = "form-control" placeholder = "Enter Query for User" id = "queryUser" value = {this.state.query} onChange = {this.handleChange}></input>
                    </div>
                    <button className = "btn btn-outline-primary mx-auto" onClick = {this.handleClick}>Search</button>
                </div>
                <div className = "col-12">
                    {this.state.buttonClick && <UserTable searchQuery = {this.state.query} resetQuery = {this.resetQuery} />}
                </div>
            </>
        );
    }
}

export default UserSearch;