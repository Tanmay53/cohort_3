import React from 'react'
import MoreUserInfoModal from './MoreUserInfo'

export default function DisplayTable(props) {
    return (
       <React.Fragment>
           {
            props.info.showUserSearchResultTable && !props.info.showMoreUserInfo ?
            <div>
                {/* {console.log(props.data.items)} */}
                <table className="table table-bordered table-secondary table-striped text-center ">
                    <thead>
                    <tr>
                        <th scope="col">User Avatar</th>
                        <th scope="col">Username</th>
                        <th scope="col">User ID</th>
                        <th scope="col">User Type</th>
                        <th scope="col">Visit User Profile</th>
                        <th scope='col'>Explore More</th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
                        {props.data.items.map(e=> {
                            return (
                                <tr key={e.id}>
                                    <td>
                                        <img style={{width:'80px'}} src={e.avatar_url} className='rounded' alt="user avatar"/>
                                    </td>
                                    <td>{e.login}</td>
                                    <td>{e.id}</td>
                                    <td>{e.type}</td>
                                    <td><a href={e.html_url}>{e.html_url}</a></td>
                                    <td>
                                        <button className='btn btn-primary' onClick={()=>props.handleMoreInfoClick(e)}>Explore More!</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            :
            <MoreUserInfoModal data={props.info.moreUserInfoNeeded}/>
        }
        </React.Fragment>
    )
}
