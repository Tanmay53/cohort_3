import React from "react"
import { Switch, Link, Route } from "react-router-dom"
import User from "../components/User"
import Create from "../components/Create"
import Home from "../components/Home"
import Blog from "../components/Blog"
import BlogComments from "../components/BlogComments"
import Comment from "../components/Comment"
import NotFound from "../components/NotFound"
import Navbar from "../components/Navbar"
class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    Logout=()=>{
        localStorage.clear()
        this.props.histoy.push("/home")
      }
    render() {
        return (
            <>
                <nav class="navbar navbar-dark bg-primary">
                    <div><button class="btn btn-primary lead"><Link to="/user" style={{ "color": "white", "textDecoration": "none" }}>PIYUSH</Link></button></div>
                    <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><span class=" 	d-none d-sm-block">ULTRA HIGH</span></Link></h3>
                    <div><button class="btn btn-primary lead"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>CREATE</Link></button>
                        <button class="btn btn-warning ml-2"><Link to="/blog" style={{ "color": "white" }}>Blog</Link></button>
                        <button class="btn btn-danger ml-2" onClick={this.Logout}>Logout</button>
                    </div>
                </nav>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/user" exact render={(props) => <User {...props} />}></Route>
                    <Route path="/navbar" exact render={(props) => <Navbar {...props} />}></Route>
                    <Route path="/create" exact render={(props) => <Create {...props} />}></Route>
                    <Route path="/blog" exact render={(props) => <Blog {...props} />}></Route>
                    <Route path="/comment/:id/:user_id/:category_id" exact render={(props) => <Comment {...props} />}></Route>
                    <Route path="/blogComment/:id/:user_id/:category_id" exact render={(props) => <BlogComments {...props} />}></Route>
                    <Route path component={NotFound} />
                </Switch>
            </>
        )
    }
}
export default Routes