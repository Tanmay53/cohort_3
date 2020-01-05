import React from 'react'

export default function UserProfile(props) {
    console.log('userprofile',props.data)
    if(props.data.data !== null){
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6' key={props.data.data[0].id}>
                        <h1>Id: {props.data.data[0].owner.id}</h1>
                        <h1>{props.data.data[0].owner.login}</h1>
                        <img src={props.data.data[0].owner.avatar_url} alt={props.data.data[0].owner.login} className='rounded' width='200px' />
                    </div>
                    <div className='col-6'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Repo Name</th>
                                    <th scope="col">forks</th>
                                    <th scope="col">open issues</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.data.map(user =>{
                                    return (<tr key={user.id}>
                                        <td><a href={user.html_url}>{user.name}</a></td>
                                        <td>{user.forks}</td>
                                        <td>{user.open_issues}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }else{
        return <h1>No Data Found !!!</h1>
    }
    
}
