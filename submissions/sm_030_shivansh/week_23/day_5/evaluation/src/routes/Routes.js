import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import AddCompany from "../component/AddCompany";
import AddJobs from "../component/AddJobs";
import Edit from "../component/Edit";
// import Login from "../component/auth/Login";
// import Register from "../component/auth/Register";


const Routes = () => {

    return (

        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/addCompany"><AddCompany /></Route>
                <Route path="/addJobs"><AddJobs /></Route>
                <Route path="/edit/:id" render={(props) => <Edit {...props} />} />
                {/* <Route path="/login"> <Login /></Route>
                <Route path="/register"><Register /></Route> */}

            </Switch>
        </>

    )
}


export default Routes;