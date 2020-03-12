import React from 'react'
const ToolBar=({children})=><div className="d-flex flex-row flex-wrap bg-primary align-items-center">{children}</div>
const SiteName=({children})=><div className="mr-auto h2 text-light">{children}</div>
const DrawerItem=({label})=><div className="pl-5 mt-2 text-light px-3">{label}</div>

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="container my-5 text-center">
                <div className="col-10 offset-1 col-md-12 offset-lg-0">
                    <ToolBar>
                        <SiteName>
                            <DrawerItem label="SiteName"/>
                        </SiteName>
                        <DrawerItem label="About Us"/>
                        <DrawerItem label="Price"/>
                        <DrawerItem label="StartPage"/>
                        <DrawerItem label="Contact"/>
                    </ToolBar>
                </div>
            </div>
        )
    }
}
export default NavigationBar