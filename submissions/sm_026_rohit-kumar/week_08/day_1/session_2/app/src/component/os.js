import React from 'react'
import ReactDOM from 'react-dom'

class Os extends React.Component {
    render() {
        return (
            <div>
            <h1>Mobile Operating System</h1>   
                <ul>
                    <li>{this.props.value[0]}</li>
                    <li>{this.props.value[1]}</li>
                    <li>{this.props.value[2]}</li>
                    <li>{this.props.value[3]}</li>
                </ul>
            </div>
        )
    }
}

export default Os