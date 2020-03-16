import React from "react"
import { Switch, Link, Route } from "react-router-dom"
import Book from "../components/Book"
import Author from "../components/Author"
import AddBook from "../components/AddBook"
import NotFound from "../components/NotFound"
class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="btn btn-outline-warning lead"><Link to="/addBook" style={{ "color": "white", "textDecoration": "none" }}><h6>Add-Book</h6></Link></button>
                    <div><button class="btn btn- lead"><Link to="/book" style={{ "color": "white", "textDecoration": "none" }}><h4>Library</h4></Link></button></div>
                        <div><button class="btn btn-outline-warning ml-2"><Link to="/author" style={{ "color": "white" }}>Author</Link></button>
                    </div>
                </nav>
                <Switch>
                    <Route path="/book" component={Book}></Route>
                    <Route path="/author" exact render={(props) => <Author {...props} />}></Route>
                    <Route path="/addBook" exact render={(props) => <AddBook {...props} />}></Route>
                    <Route path component={NotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}
export default Routes