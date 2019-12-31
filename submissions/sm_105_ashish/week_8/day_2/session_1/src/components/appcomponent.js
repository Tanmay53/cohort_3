import React from 'react';
import SimpleList from './SimpleList.js'
import Join from './join.js'
import Settings from './setting.js'
import Login from './login.js'
import Contact from './contact.js'
import Search from './search.js'
import Help from './help.js'
import Home from './home.js'
import Download from './download.js'
import Profile from './ricky.js'

import './app.css'


class App extends React.Component{
    render(){
        return (
            <div> 
                <div>
                    <SimpleList/>
                </div>
                <div class="grid">
                    <div>
                        <Join/>
                    </div>
                    <div>
                        <Settings/>
                    </div>
                    <div>
                        <Login/>
                    </div>
                    <div>
                        <Contact/>
                    </div>
                    <div>
                        <Search/>
                    </div>
                    <div>
                        <Help/>
                    </div>
                    <div>
                        <Home/>
                    </div>
                    <div>
                        <Download/>
                    </div>
                </div>
                <Profile/>
            </div>
        );
    }
}

export default App