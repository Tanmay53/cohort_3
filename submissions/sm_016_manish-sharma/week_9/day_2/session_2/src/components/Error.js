import React from 'react'

class Error extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container m-5 p-5 text-center'>
                <div className='display-2 text-danger'>Error:404</div>
                <div className='display-3 text-warning'>Content Not Found</div>
            </div>
        )
    }
}

export default Error