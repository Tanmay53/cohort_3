import React from 'react'
import DrawerItem from './DrawerItem'

class Drawer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Drawer