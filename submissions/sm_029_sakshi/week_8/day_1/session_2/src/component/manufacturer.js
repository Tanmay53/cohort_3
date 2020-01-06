import React from 'react'


class Manufecturers extends React.Component {
    render() {
        return (
            <div>
            <h1>Mobile Manufecturers</h1>   
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

export default Manufecturers