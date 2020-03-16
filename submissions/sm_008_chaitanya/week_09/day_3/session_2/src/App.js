import React from 'react'
import Sidebar from './components/Sidebar'
import NavigationBar from './components/NavigationBar'

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Sidebar />
                <NavigationBar />
            </div>
        )
    }
}
export default App