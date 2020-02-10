import React, { Component } from 'react'
import UserInfo from './UserInfo'
import axios from "axios";
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles : [],
            name : [],
            showTable: true
        }
    }
    
    componentDidMount = () => {
        axios.get('https://api.github.com/search/users', {
            params: {
              q: this.props.userSearch
            }
          }).then(response => {
            this.setState({profiles : response.data.items})
            console.log(this.state.profiles)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    showUser = (data) => {
        this.setState({
            name : data,
            showTable : false
        })
        
    }
    
    render() {
        const style = {
            width : "50px",
            height : "50px"
            
        }
        return (
            <div>
                {this.state.showTable &&
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Login Name</th>
                                <th scope="col">Profile Pic</th>
                                <th scope="col">Type</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.profiles.map((e) => {
                                return( 
                                    <tr key = {e.id}>
                                        <td>{e.id} </td>
                                        <td>{e.login} </td>
                                        <td ><img onClick = {()=>{this.showUser(e)}} style = {style} src={e.avatar_url} /></td>
                                        <td> {e.type} </td>
                                        <td>{e.score} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
                {!this.state.showTable &&
                    <UserInfo name = {this.state.name} />
                }
            </div>
        )
    }
}
