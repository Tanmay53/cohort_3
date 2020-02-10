import React from 'react'
import { connect } from 'react-redux'
import { update } from "./Common/Actions"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom"

const styles = ({
    input: {
        margin: "5px"
    }
})
class Vehicle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            model_no: "",
            model_name: "",
            manufacture: "",
            mileage: "",
            price: "",
            quantity: "",
            id: 0,
            dataAv: true
        }
    }
    componentDidMount() {
        let temp = this.props.value.find((ele) => ele.id == this.props.match.params.id)
        if (temp) {
            this.setState({
                model_no: temp.model_no,
                model_name: temp.model_name,
                manufacture: temp.manufacture,
                mileage: temp.mileage,
                price: temp.price,
                quantity: temp.quantity,
                id: temp.id
            })
        }
        else {
            this.setState({
                dataAv: false
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            id: this.state.id + 1
        })
        let temp = {
            model_no: this.state.model_no,
            model_name: this.state.model_name,
            manufacture: this.state.manufacture,
            mileage: Number(this.state.mileage),
            price: Number(this.state.price),
            quantity: Number(this.state.quantity),
            id: this.state.id
        }
        this.props.dispatch(update(temp, temp.id))
    }
    render() {

        if (this.props.check) {
            if (this.state.dataAv) {
                return (
                    <>
                        <Container maxWidth="sm">
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField variant="outlined" fullWidth style={styles.input} label="Model No" name="model_no" value={this.state.model_no} onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Model Name" style={styles.input} fullWidth name="model_name" value={this.state.model_name} onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" style={styles.input} label="Manufacture" fullWidth name="manufacture" value={this.state.manufacture} onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Mileage" style={styles.input} fullWidth name="mileage" value={this.state.mileage} onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Price" fullWidth name="price" style={styles.input} value={this.state.price} onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Quantity" fullWidth name="quantity" style={styles.input} value={this.state.quantity} onChange={this.handleChange} />
                                </Grid>
                                <Grid container xs={12} justify="center">
                                    <Button variant="outlined" color="primary" onClick={this.handleClick}>UPDATE</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </>
                )
            }
            else {
                return (
                    <div>No data found</div>
                )
            }
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.addReducer.maindata,
        check: state.userLogin.login
    }
}
export default connect(mapStateToProps)(Vehicle)