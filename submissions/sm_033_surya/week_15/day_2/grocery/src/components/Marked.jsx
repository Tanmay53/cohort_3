import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Container, Checkbox, Grid, Paper, Button } from '@material-ui/core';

const styles = ({
    paper: {
        margin: "10px",
        padding: "10px",
    }
})
export default class Marked extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            goback: false
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get("http://localhost:5000/listing")
            .then((res) => {
                this.setState({
                    data: res.data.find((ele) => ele.id == this.props.match.params.id)
                })
            })
        // console.log(this.state.data,"")       

    }
    marksubmit = () => {
        if (document.getElementById("box").checked == true) {
            axios.post(`http://localhost:5000/mark/${this.props.match.params.id}`, { "item": this.state.data.item, "quantity": this.state.data.quantity, "purchased": true, "id": this.state.data.id })
                .then((res) => console.log(res))
        }
        else {
            alert("please mark the item")
        }
        this.setState({
            goback: !this.state.goback
        })
    }
    render() {
        if (!this.state.goback) {
            return (
                <Container maxWidth="sm">
                    <Paper style={styles.paper}>
                        <Grid container>
                            <Grid item>
                                <Checkbox type="checkbox" id="box" />
                            </Grid>
                            <Grid item xs={6} align="center" style={{ paddingTop: "10px" }}>
                                {this.state.data.item}
                            </Grid>
                            <Grid item xs={3} align="right">
                                <Button color="primary" onClick={this.marksubmit}>Confirm</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Link style={styles.paper} to="/">Go to Home</Link>
                </Container>
            )
        }
        else {
            return (
                <Container maxWidth="sm" align="center" style={{ margin: "10px" }}>
                    <Link to="/done">Go to purchased</Link>
                </Container>
            )
        }
    }
}
