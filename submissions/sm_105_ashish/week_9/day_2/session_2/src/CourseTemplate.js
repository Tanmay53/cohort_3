import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Course from './Course';

export default class CourseTemplate extends Component {
    render() {
        const match =this.props.match
            return (
                <React.Fragment>
                    <h1> Courses </h1>
                    <ol>
                        <li><Link to={`${match.url}/fullstack`}>Full-Stack Development</Link></li>
                        <li><Link to={`${match.url}/android`}>Android Development</Link></li>
                    </ol>
                    <Route path = {`${match.path}/fullstack`} render = {() => <Course name = "fullstack" /> } />
                    <Route path = {`${match.path}/android`} render = {() => <Course name = "android" /> } />
                </React.Fragment>
            );
    }
}
