import React from 'react'
import DirList from '../components/DirList'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <DirList baseURL={'http://localhost:5000/dir/list/all'} />  
            </>
        )
    }
}

export default Dashboard