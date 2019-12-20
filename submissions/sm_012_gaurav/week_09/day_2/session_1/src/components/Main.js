import React from 'react';
import UserSearch from './UserSearch';
import RepoSearch from './RepoSearch';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: '',
            buttonClicked: false
        };
    }

    handleChange = (e) => {
        this.setState({
            searchType: e.target.value,
            buttonClicked: false
        });
    }

    handleClick = () => {
        this.setState({
            buttonClicked: true
        });
    }

    render() {
        let element = null;
        if (this.state.searchType === "user") {
            element = <UserSearch />;
        }
        else {
            element = <RepoSearch />;
        }
        return (
            <div className = "container-fluid">
                <div className = "col-6 mx-auto text-center">
                    <select className = "custom-select mt-3" id = "typeSelect" onChange = {this.handleChange}>
                        <option value = "">Select a Search Type</option>
                        <option value = "user">User</option>
                        <option value = "repo">Repository</option>
                    </select>
                    {this.state.searchType.length !== 0 && <button className = "btn btn-primary mx-auto mt-3" onClick = {this.handleClick}>Submit</button>}
                </div>
                {this.state.buttonClicked && element}
            </div>
        )
    }
}

export default Main;