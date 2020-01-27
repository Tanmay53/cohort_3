import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
    }
    clickInfo=(event)=>{
        this.props.listCallback(event.target.id)
    }
    render(){
        return(
            <div>
                <table className='table'>
                            <thead>
                                <tr>
                                    <th>Profile Pictue</th>
                                    <th>Github id</th>
                                    <th>Username</th>
                                    <th>Score</th>
                                    <th>Type</th>
                                    <th>More Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.dataout.map(e=>
                                    <tr key={e.id}>
                                        <td><img src={e.avatar_url} style={{height:'100px'}} /></td>
                                        <td>{e.id}</td>
                                        <td>{e.login}</td>
                                        <td>{e.score}</td>
                                        <td>{e.type}</td>
                                        <td><button className='btn btn-primary' id={e.id} onClick={this.clickInfo}>Click Here</button></td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
            </div>
        )
    }
}

export default List