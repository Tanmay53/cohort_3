import React from 'react'

class Arrow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
    
                <div className='col-5 d-flex '>
                 <a href='#' className='text-dark border-bottom border-dark py-4'><h1>{this.props.name}</h1></a>
                    <div className='ml-5 py-4'><h1>-></h1></div>
                </div>
         
        )
    }
}

export default Arrow