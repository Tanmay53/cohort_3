import React from 'react'



class ToolBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='row mx-4 text-white'>
                {this.props.children}
            </div>
        )
    }
}

export default ToolBar