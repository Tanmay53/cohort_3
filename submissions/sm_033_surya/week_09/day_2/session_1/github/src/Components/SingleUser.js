import React, { Component } from 'react'

class SingleUser extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
        
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Cloneurl</th>
                            <th>git_url</th>
                            <th>created_at</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.userdata.map((ele)=><tr><td>{ele.name}</td><td>{ele.clone_url}</td><td>{ele.git_url}</td><td>{ele.created_at}</td></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default SingleUser