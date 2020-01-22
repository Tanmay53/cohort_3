import React from 'react'

class Repos extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div><table className='table'>
            <thead>
                <tr>
                    <th>avatar_url</th>
                    <th>id</th>
                    <th>full_name</th>
                    <th>language</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.lan.map(e=>
                    <tr key={e.id}>
                        <td><img src={e.owner.avatar_url} style={{height:'100px'}} /></td>
                        <td>{e.id}</td>
                        <td>{e.full_name}</td>
                        <td>{e.language}</td>
                        <td>{e.score}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        )
    }
}

export default Repos