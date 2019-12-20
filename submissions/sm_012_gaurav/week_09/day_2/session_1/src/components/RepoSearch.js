import React from 'react';
import RepoTable from './RepoTable';

class RepoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoQuery: '',
            langQuery: '',
            buttonClick: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
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
            repoQuery: '',
            langQuery: ''
        });
    }


    render() {
        return (
            <>
                <div className = "row mt-3">
                    <div className = "col-4 mx-auto">
                        <div className = "form-group">
                            <label htmlFor = "queryRepo">Search For Repository</label>
                            <input type = "text" className = "form-control" placeholder = "Enter Query for Repository" id = "repoQuery" value = {this.state.repoQuery} onChange = {this.handleChange}></input>
                        </div>
                        <button className = "btn btn-outline-primary mx-auto" onClick = {this.handleClick}>Search</button>
                    </div>
                    <div className = "col-4 mx-auto">
                        <div className = "form-group">
                            <label htmlFor = "queryLang">Language</label>
                            <input type = "text" className = "form-control" placeholder = "Enter Query for Language" id = "langQuery" value = {this.state.langQuery} onChange = {this.handleChange}></input>
                        </div>
                    </div>
                </div>
                <div className = "col-12">
                    {this.state.buttonClick && <RepoTable langQuery = {this.state.langQuery} repoQuery = {this.state.repoQuery} resetQuery = {this.resetQuery} />}
                </div>
            </>
        );
    }
}

export default RepoSearch;