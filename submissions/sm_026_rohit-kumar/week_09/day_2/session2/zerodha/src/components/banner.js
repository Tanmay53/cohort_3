import React from 'react'

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='text-center border-bottom pb-5'>
                {this.props.children}
            </div>
        )
    }
}
export default Banner

