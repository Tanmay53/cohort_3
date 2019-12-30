import React from 'react';
import { Button, Icon } from '@material-ui/core';
import styles from './app.module.css';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import {connect} from 'react-redux';
 
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {styles.flex_row}>
                <Button variant = "outlined" color = "primary" startIcon = {<Icon>add</Icon>}>Add new staff</Button>
                <Button variant = "outlined" color = "primary" startIcon = {<ViewCarouselIcon />}>View all staff</Button>
            </div>
        );
    }
}

export default Dashboard;