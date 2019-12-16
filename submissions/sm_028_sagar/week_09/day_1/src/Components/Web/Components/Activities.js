import React from 'react'

class Activity extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='p-2 my-3 mx-4'>
                <div className='p-2'>
                    <img src={this.props.link}/>
                </div>
                <div className='p-2'>{this.props.name}</div> 
             </div>
        )
    }
}

export default Activity