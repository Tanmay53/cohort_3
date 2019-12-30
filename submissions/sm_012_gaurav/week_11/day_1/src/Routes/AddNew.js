import React from 'react';
import {TextField, Button, Icon} from '@material-ui/core';
import styles from '../Components/common/app.module.css';

class AddNew extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {styles.flex_col}>
                <TextField id = "name" variant = "outlined" label = "Name" required></TextField>
                <TextField id = "email" variant = "outlined" label = "Email" type = "email" required></TextField>
                <TextField id = "phone" variant = "outlined" label = "Phone Number" type = "number" required></TextField>
                <TextField id = "sales" variant = "outlined" label = "Sales FY2019-2020" type = "number" required></TextField>
                <Button variant = "outlined" color = "primary" startIcon = {<Icon>add</Icon>}>Add</Button>
            </div>
        );
    }
}

export default AddNew;