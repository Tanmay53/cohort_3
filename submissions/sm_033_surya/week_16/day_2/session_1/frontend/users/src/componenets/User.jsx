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
            <div className="container d-flex justify-content-center">
                <div>
                    <div className="12"><h1>Name:{this.state.user.name}</h1></div>
                    <div className="12">Age:{this.state.user.age}</div>
                    <div className="12">Email:{this.state.user.email}</div>
                    <div className="12">Mobile No.{this.state.user.mobile}</div>
                </div>

            </div>
        )
    }
}
export default User