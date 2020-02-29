import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blogs,
    state: state
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, null)(Blog)

