import React from 'react'
import axios from 'axios'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        await axios.get(`http://localhost:5000/show/${this.props.match.params.id}`)
            .then((res) => this.set_Data(res))
    }

    set_Data(res) {
        this.setState({
            user: res.data
        })
    }
    render() {
        console.log(this.state.user)
        return (
            <div>
                <div>{this.state.user.name}</div>
                <div>{this.state.user.age}</div>
                <div>{this.state.user.email}</div>
                <div>{this.state.user.mobile}</div>


            </div>
        )
    }
}
export default User