import React from "react"
import {Switch,Link,Route} from "react-router-dom"
import User from "../components/User"
import Create from "../components/Create"
import Home from "../components/Home"
import Blog from "../components/Blog"
import BlogComments from "../components/BlogComments"
import Comment from "../components/Comment"
class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/user" exact render={(props) => <User {...props} />}></Route>
                    <Route path="/create" exact render={(props) => <Create {...props} />}></Route>
                    {/* <Route path="/category/:id" exact render={(props) => <Category {...props} />}></Route> */}
                    <Route path="/blog" exact render={(props) => <Blog {...props} />}></Route>
                    <Route path="/comment/:id/:user_id/:category_id" exact render={(props) => <Comment {...props} />}></Route>
                    <Route path="/blogComment/:id/:user_id/:category_id" exact render={(props) => <BlogComments {...props} />}></Route>
                    {/* <Route path="/modify_address/:id/:add_id" exact render={(props) => <Modify_Address {...props} />}></Route> */}
                </Switch>
            </>
        )
    }
}
export default Routes