import React, { Component } from 'react'
//import Modal from './modal'

export default class Table extends Component {
    constructor(props){
        super(props)

    }

    render() {
       // console.log(this.props.tbd)
        return (
            <div>
                <table className="table">
                    <thead className="black white-text text-center">
                        <tr>
                            {this.props.tbl.map(val => {
                                return (
                                    <th scope="col" key={val}>{val}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {this.props.tbd.map((val,index) => {
                            return(
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>
                                        <a href={val.name}>Go to profile</a>
                                    </td>
                                    <td>
                                        <img style={{width:'100px', height:"100px"}} src={val.avatar_url} />
                                    </td>
                                    <td>{val.score}</td>
                                    <td>
                                        {/* <button id="centralModalSm" onClick={this.props.getRepos} value={val.repos_url} className="btn btn-outline-primary">Go to Repos</button> */}
                                        <button type="button" onClick={this.props.getRepos}
                                                              value={val.repos_url} 
                                                              className="btn btn-outline-primary" 
                                                              data-toggle="modal" 
                                                              data-target="#exampleModal"
                                                              b={this.props.a}
                                                             
                                                              >
                                        Go to Repos
                                        </button>
                         
               
                                    </td>
                                </tr>
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>
        )
    }
}
