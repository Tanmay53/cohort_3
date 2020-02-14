import React from 'react'
import { connect } from 'react-redux'

class Info extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3 className='mx-auto'>User Details</h3>
                {
                    this.props.info.map(e=>
                        <div className='m-5' key={e.token}>
                            <div className='h5'>Name: {e.name}</div>
                            <div className='h5'>Email: {e.email}</div>
                            <div className='h5'>Username: {e.username}</div>
                            <div className='h5'>Mobile: {e.mobile}</div>
                            <div className='h5'>Description: {e.description}</div>
                        </div>
                        )
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        info:state.info
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,null)(Info)