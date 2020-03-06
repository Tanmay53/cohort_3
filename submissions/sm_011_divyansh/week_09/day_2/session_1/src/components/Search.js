import React from 'react';
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            add: this.props.add
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        console.log(this.state.username);
        return (
            <div>
                <div className="container mt-4">
                    <h1> Search Github User</h1>
                    <input className="form-control" type="text" name="name" placeholder="Search or jump to..." value={this.state.name} onChange={this.handleChange} />
                    <button className="btn border btn-danger mt-1" onClick={() => this.state.add(this.state.name)}>Submit</button>
                </div>
            </div>
        )
    }
}
export default Search;