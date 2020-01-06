import React from 'react'

const SiteName = ({name}) =>{
    return (
        <p className='m-2 text-white font-weight-bold'>{name}</p>
    )
}

const Drawer = ({children}) =>{
    return (
        <div className='d-flex ml-auto'>
            {children}
        </div>
    )
}

const DrawerItem = ({itemName}) => {
    return (
    <p className='m-2 '><a style={{textDecoration:'none',color:'white'}} href='#'>{itemName}</a></p>
    )
}

export default function Navbar() {
    return (
        <nav className='p-2 d-flex bg-secondary shadow'>
            <SiteName name = 'Masai' />
            <Drawer>
                <DrawerItem itemName = 'About Us' />
                <DrawerItem itemName = 'Prices' />
                <DrawerItem itemName = 'Sign In' />
                <DrawerItem itemName = 'Others' />
            </Drawer>
        </nav>
    )
}
