import React from 'react';
import MobileOps from './mobileOps.js'
import MobileMan from './mobileMan.js'
import JoinUs from './joinUs.js'
import Login from './login.js'
import Home from './home.js'
import Help from './help.js'
import Download from './download.js'
import Search from './search.js'
import Setting from './settings.js'
import ContactUs from './contactUs.js'
import StaticCard from './staticCard.js'
import './index.css'

class MobDesc extends React.Component{
    render(){
        return (
         <div>   
            <div id='cont'>
                <h1>Mobile Operating System</h1>
                <MobileOps />
                <h1>Mobile Manufactures</h1>
                <MobileMan />
            </div>    
            <div id="btns">   
                <div>
                    <JoinUs /> 
                </div> 
                <div>    
                    <Setting />  
                </div>
                <div>
                    <Login /> 
                </div>
                <div>     
                    <ContactUs />  
                </div>
                <div>
                    <Search />  
                </div>
                <div>                    
                    <Help />  
                </div>
                <div>
                    <Home />  
                </div>
                <div>    
                    <Download />  
                </div>
            </div>
            <StaticCard />
        </div>
        );
    }
}

export default MobDesc