import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-info">Sign Off</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
