import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Container, Paper, Grid, Button } from '@material-ui/core';

class Delete_item extends Component {
    constructor() {
        super()
        this.state = {
            data: {},
            getback: false
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        axios.get("http://localhost:5000/listing")
            .then((res) => {
                this.setState({
                    data: res.data.find((ele) => ele.id == this.props.match.params.id)
                })
            })

    }
    deletedata = () => {
        axios.post(`http://localhost:5000/delete/${this.props.match.params.id}`, { "item": this.state.item, "quantity": this.state.quantity, "purchased": this.state.purchased, "id": this.state.id })
            .then((res) => console.log(res))
        this.gohome()
    }
    gohome = () => {
        this.setState({
            getback: !this.state.getback
        })
    }
    render() {
        if (!this.state.getback) {
            return (
                <Container maxWidth="sm">
                    <Paper style={{ padding: "10px", margin: "10px" }}>
                        <Grid container><Grid item xs={6}>Item</Grid><Grid xs={2} item>Quantity</Grid><Grid xs={4}></Grid></Grid>
                    </Paper>
                    <Paper style={{ padding: "10px", margin: "10px" }}>
                        <Grid container><Grid item xs={6}>{this.state.data.item}</Grid><Grid xs={2} item>{this.state.data.quantity}</Grid><Grid xs={4}><Button color="secondary" variant="contained" onClick={() => this.deletedata()}>Confirm</Button></Grid></Grid>
                    </Paper>
                    <Link to="/">Go to Home</Link>
                </Container>
            )
        }
        else {
            return (
                <Container align="center" style={{ margin: "10px" }} maxWidth="sm">
                    <Link to="/">Go to Home</Link>
                </Container>
            )
        }
    }
}
export default Delete_item