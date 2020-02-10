import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Bookings extends Component {
    render() {
        return (
            <div>
                Bookings
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings)
