import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Loging extends Component {
    render() {
        return (
            <div>
                Loging
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Loging)
