import React from 'react'
import axios from 'axios'
import { resolve } from 'dns'


class SearchControl extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    handleSearch = () => {
        let response = this.hitApi(this.state.username)
        response.then((users) => {
            this.props.callbackUpdateSearchResults(users)
        })
    }


    render() {
        return(
            <div className='row'>
                <div className='col-7'>
                    <input name='username' value={this.state.username} onChange={this.handleChange} className='form-control' type='text' placeholder='Enter Username'></input>
                </div>
                <div className='col-5'>
                    <button onClick = {this.handleSearch} className='btn btn-primary'>search</button>
                </div>
            </div>
        )
    }

    hitApi = async (username) => {
        console.log('hitApi :- username : ', username)
        // replace spaces by +
        username = username.replace(' ', '+')
        let url = `https://api.github.com/search/users?q=${username}`

        let result = await axios.get(url)
                    .then(res => {
                            if(res.status == 200) {
                                return res.data.items
                            }
                    })
                    .catch(err => null)
        
        //console.log(result)
        return result

    }

}

export default SearchControl