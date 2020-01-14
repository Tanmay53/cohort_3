import React from 'react'
import { connect } from "react-redux"

class User extends React.Component {
    constructor({ match }) {
        super({ match })
        this.state = {
            user: ""
        }
    }
    componentDidMount() {
        let data = this.props.match
        console.log(data)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        value: state.addReducer,
        status: state.loginReducer
    }
}
export default connect(mapStateToProps)(User)
