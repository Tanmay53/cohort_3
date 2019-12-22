import React from 'react'
import TableRow from './tableRow'

class DisplayTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='row mt-5'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <th>Avatar</th>
                            <th>User Name</th>
                            <th>Profile</th>
                            <th>Repository</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {this.props.userSearchResults.map((user) => {
                                return <TableRow 
                                        callbackUpdateUserProfileData = {this.props.callbackUpdateUserProfileData}
                                        user = {user} />    
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DisplayTable