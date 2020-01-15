import React from 'react'

class Button extends React.Component {
    clickHandler = () => {                        //(event)
        // let btnClicked = event.target.id
        this.props.parentCallback(this.props.id)
    }

    render() {
        return (
            <div className='m-2'>
                <div onClick={this.clickHandler} className='btn btn-info' id={this.props.id}>{this.props.txt}</div>
            </div>
        )
    }
}

export default Button