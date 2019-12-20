import React, { Suspense } from 'react'
import axios from 'axios'




class TableRow extends React.Component {
    constructor(props) {
        super(props)
    }

    loadProfile = (url) => {
        let response = this.hitApi(url)
        response.then((res) => this.props.callbackUpdateUserProfileData(res))
        
    }

    render() {
        return (
            <tr>
                <td>
                    <img style={{height:'100px', width:'100px'}} src={`${this.props.user.avatar_url}`} alt = 'user image' ></img>
                </td>
                <td> {this.props.user.login} </td>
                <td> {this.props.user.url} </td>
                <td> {this.props.user.repos_url} </td>
                <td><button onClick={() => this.loadProfile(`${this.props.user.url}`)} className='btn btn-primary'>View Profile</button></td>
            </tr>
        )
    }

    hitApi = async(url) => {
        console.log(url)
        let response = await axios.get(url)
                      .then(res => {
                          if(res.status === 200)
                            return res.data
                      })
                      .catch(err => null)

        return response
        
    }
}

export default TableRow
