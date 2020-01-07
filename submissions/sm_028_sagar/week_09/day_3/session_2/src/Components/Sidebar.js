import React from 'react'
import Style from  './sidebar.module.css'


const Drawer = ({children}) =>{
    return (
        <div className='d-flex flex-column border-secondary border-top border-bottom'>
            {children}
        </div>
    )
}

const DrawerItem = ({label,icon}) =>{
    return <div className={`d-flex px-2 ${Style.hover}`}>
                <div><i className={icon} aria-hidden="true"></i></div>
                <div className='ml-2 bord'>{label}</div>
           </div>
}


export default function Sidebar() {
    return (
        <div className='border-top-0 border border-secondary' >
            <h4>Sidebar</h4>
            <p className=' my-1'>All Inboxes</p>
            <Drawer>
                <DrawerItem label='All Email' icon='fa fa-envelope-open' />
                <DrawerItem label='Inbox' icon="fa fa-inbox" />
                <DrawerItem label='Primary' icon="fa fa-chevron-circle-right" />
                <DrawerItem label='Sent' icon='fa fa-paper-plane' />
            </Drawer>
            <p className=' my-1'>Extra Activities</p>
            <Drawer>
                <DrawerItem label='Trash' icon='fa fa-trash-o ' />
                <DrawerItem label='Social' icon='fa fa-share-square-o' />
                <DrawerItem label='Drafts' icon='fa fa-pencil-square ' />
            </Drawer>
            <p className=' my-1'>Settings</p>
            <Drawer>
                <DrawerItem label='Settings' icon='fa fa-cog' />
            </Drawer>
                
            {/* Starred, Send email, Drafts, All email, Trash, Social, Primary, settings */}
        </div>
    )
}
