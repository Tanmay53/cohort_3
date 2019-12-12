import React from 'react'
import ReactDOM from 'react-dom'


class CustomCheckStrike extends React.Component {
    constructor(props) {
        super(props)
    }

    handleOnChange = (event) => {
        if(event.target.checked) {
            this.props.actionAppendItem(event.target.name)
            
        }
        else {
            this.props.actionRemoveItem(event.target.name)
        }
    }

    render() {
        return (
            <div className='d-flex justify-content-between'>
                <div>
                    <input className="form-check-input" checked name = {this.props.taskName} onChange = {this.handleOnChange}  type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted" htmlFor="defaultCheck1">
                        <strike>{this.props.taskName}</strike>
                    </label>
                </div>
                <button onClick={() => this.props.actionDeletePermanent(this.props.taskName)} className='btn btn-outline-primary btn-sm'>-</button>
            </div>
    )}        
}

export default CustomCheckStrike 