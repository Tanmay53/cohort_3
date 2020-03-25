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
import UpdateBlog from "../components/UpdateBlog"
import Allcomments from "../components/Allcomments"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"
import axios from "axios"
class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    Logout = () => {
        this.setState({
            name: ""
        })
        this.props.logout()
    }
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/getName`,
            headers: { 'Authorization': `Bearer ${token}` },
        })
            .then(res => this.setState({
                name: res.data[0]["name"]
            }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <div><button class="btn btn-outline-primary lead"><Link to="/user" style={{ "color": "white", "textDecoration": "none" }}>{this.state.name}</Link></button></div>
                    <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><span class=" 	d-none d-sm-block text-center">Blogger</span></Link></h3>
                    <div><button class="btn btn-outline-primary lead"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>Write</Link></button>
                        <button class="btn btn-outline-warning ml-2"><Link to="/blog" style={{ "color": "white" }}>Blog</Link></button>
                        {this.props.token ? <button class="btn btn-outline-danger ml-2" onClick={this.Logout}>Logout</button> : null}
                    </div>
                </nav>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/user" exact render={(props) => <User {...props} />}></Route>
                    <Route path="/update/:blog_id/:user_id/:category_id" exact render={(props) => <UpdateBlog {...props} />}></Route>
                    <Route path="/navbar" exact render={(props) => <Navbar {...props} />}></Route>
                    <Route path="/create" exact render={(props) => <Create {...props} />}></Route>
                    <Route path="/blog" exact render={(props) => <Blog {...props} />}></Route>
                    <Route path="/comment/:id/:user_id/:category_id" exact render={(props) => <Comment {...props} />}></Route>
                    <Route path="/blogComment/:id/:user_id/:category_id" exact render={(props) => <BlogComments {...props} />}></Route>
                    <Route path="/Allcomments/:id/:user_id/:category_id" exact render={(props) => <Allcomments {...props} />}></Route>
                    <Route path component={NotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)