import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.userData)
        return (
            <div>
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>UserName</th>
                            <th>UserId</th>
                            <th>ProfileLink</th>
                            <th>Profile Picture</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.userData.map((ele) => <tr ><td className="p-5">{ele.login}</td><td className="p-5">{ele.id}</td><td className="p-5">{ele.url}</td><td className="d-flex justify-content-center"><div className="img-fluid"><img className="img-fluid" src={ele.avatar_url} /></div></td><td className="p-5"><button onClick={() => this.props.singleUser(ele.login)}>More details...</button></td></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table