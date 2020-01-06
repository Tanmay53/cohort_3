import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div className="m-auto">
                <form onSubmit = {this.props.sub} className="form-inline md-form mb-4">
                    <input name = "search" onChange = {this.props.inp} value={this.props.val} className="form-control mr-sm-2" type="text" placeholder={this.props.search} aria-label="Search"/>
                    <button className="btn aqua-gradient btn-rounded btn-sm my-0" type="submit">{this.props.search}</button>
                </form>
            </div>
        )
    }
}
