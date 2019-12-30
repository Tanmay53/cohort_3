import React from 'react'

class UserProfile extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        //console.log(this.props)
        return (
            <div className='row'>
                <div className='col-4'>
                    <table className='table'>
                        <tr>
                            <td>
                                <img style={{height:'200px', width:'200px'}} src={`${this.props.profile.avatar_url}`} ></img>

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Name:</b></td>
                            <td>{this.props.profile.name}</td>
                        </tr>
                        <tr>
                            <td><b>Username:</b></td>
                            <td>{this.props.profile.login}</td>
                        </tr>
                        <tr>
                            <td><b>Location:</b></td>
                            <td>{this.props.profile.location}</td>
                        </tr>
                        <tr>
                            <td><b>Email:</b></td>
                            <td>{this.props.profile.email}</td>
                        </tr>
                        <tr>
                            <td><b>Repos Count:</b></td>
                            <td>{this.props.profile.public_repos}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserProfile