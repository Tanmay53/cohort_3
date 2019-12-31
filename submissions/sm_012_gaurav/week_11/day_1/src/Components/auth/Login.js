import React from 'react';
import styles from '../common/app.module.css';
import {TextField, Button} from '@material-ui/core';
import {validateLogin} from '../../redux/action';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClick = () => {
        this.props.validateLogin(this.state);
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className = {styles.flex_col}>
                <TextField variant = "outlined" id = "username" label = "Username" value = {this.state.username} onChange = {this.handleChange} required></TextField>
                <TextField variant = "outlined" id = "password" label = "Password" type = "password" value = {this.state.password} onChange = {this.handleChange} required></TextField>
                <Button variant = "outlined" color = "primary" onClick = {this.handleClick}>Login</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({isLogged: state.isLogged});

const mapDispatchToProps = (dispatch) => ({
    validateLogin: (data) => dispatch(validateLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);