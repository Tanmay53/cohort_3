import React from 'react'
const Drawer=({children})=>
    <div className="border col-10 offset-1 col-md-6 col-lg-3 offset-lg-4  mt-5">{children}</div>


const DrawerItem=({icon,label})=>{
    return(
        <div className="d-flex flex-row mb-5 mt-2">
            <div className="mr-5"><img src={icon} alt="logo" height="40" width="40"/></div>
            <div className="h5 pt-2">{label}</div>
        </div>
    )
}

class Sidebar extends React.Component{
    render(){
        return(
            <div className="container">
                <Drawer>
                    <DrawerItem label="Inbox" icon="/inbox.png"/>
                    <DrawerItem label="Starred" icon="/starred.png"/>
                    <DrawerItem label="Send email" icon="/inbox.png"/>
                    <DrawerItem label="Drafts" icon="/starred.png"/>
                </Drawer>
            </div>
        )
    }
}
export default Sidebar