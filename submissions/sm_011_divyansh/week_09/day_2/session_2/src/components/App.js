import React from 'react'
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom'
import Route from 'react-router-dom/Route';
// const User = (params) => {
//     return (<h1>hi {params.username}</h1>)
// }
class App extends React.Component {
    // state = {
    //     loggedIn: false
    // }
    // loginHandle = () => {
    //     this.setState({
    //         loggedIn: !this.state.loggedIn
    //     })
    // }
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar bg-info">
                        <NavLink className=" navbar-brand" to="/"><img style={{ height: "20px" }} src="https://zerodha.com/static/images/logo.svg" alt="" /></NavLink>
                        <NavLink className="navbar-brand" to="/about" exact activeStyle={{ color: 'green' }}>about</NavLink>
                        <NavLink className="navbar-brand" to="/products" exact activeStyle={{ color: 'green' }}>products</NavLink>
                        <NavLink className="navbar-brand" to="/pricing" exact activeStyle={{ color: 'green' }}>pricing</NavLink>
                        <NavLink className="navbar-brand" to="/support" exact activeStyle={{ color: 'green' }}>support</NavLink>
                    </div>
                    {/* <li><NavLink to="/user/manu" exact activeStyle={{ color: 'green' }}>manu</NavLink></li>
                        <li><NavLink to="/user/boss" exact activeStyle={{ color: 'green' }}>boss</NavLink></li> */}

                    {/* <Prompt when={!this.state.loggedIn} message={(location) => { return location.pathname.startsWith('/user') ? "please log in first" : true }} />
                    <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)}></input> */}

                    <Route path="/about" exact strict render={
                        () => {
                            return (
                                <h1>About</h1>
                            )
                        }
                    } />
                    <Route path="/products" exact strict render={
                        () => {
                            return (
                                <h1>Products</h1>
                            )
                        }
                    } />
                    <Route path="/pricing" exact strict render={
                        () => {
                            return (
                                <h1>Pricing</h1>
                            )
                        }
                    } />
                    <Route path="/support" exact strict render={
                        () => {
                            return (
                                <h1>support</h1>
                            )
                        }
                    } />
                    {/* <Route path="/user/:username" exact strict render={({ match }) => (
                        this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/" />)
                    )} /> */}
                </div>
            </Router >
        )
    }
}
export default App
