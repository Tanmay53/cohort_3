import React from 'react';


class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    render() {
        console.log(this.state.username);
        return (
            <div className="App">
                <div className="container my-5">
                    <h1 className="display-3"><i className="fab fa-github"></i> Search Github User</h1>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search User..."
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-lg btn-dark my-4" onClick={() => this.props.add(this.state.username)}>Submit</button>
                </div>

            </div>
        )
    }
}



export default User;