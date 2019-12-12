import React from 'react'
import ReactDOM from 'react-dom'


class CustomCheck extends React.Component {
    constructor(props) {
        super(props)
    }

    handleOnChange = (event) => {
        if(event.target.checked) {
            this.props.actionAppendItem(event.target.name)
        }/* 
        else {
            this.props.actionRemoveItem(event.target.name)
        } */
    }

    render() {
        return (
            <div>
                <input className="form-check-input" name = {this.props.taskName} onChange = {this.handleOnChange}  type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    {this.props.taskName}
                </label>
            </div>
    )}        
}

export default CustomCheck 