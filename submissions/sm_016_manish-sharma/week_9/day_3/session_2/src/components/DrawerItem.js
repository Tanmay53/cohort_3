import React from 'react'



class DrawerItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='row m-4'>
                <div>
                <i class="material-icons">{this.props.icon}</i>
                </div>
                <div>
                    {this.props.label}
                </div>
            </div>
        )
    }
}

export default DrawerItem