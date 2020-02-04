import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Grid, Paper, Container, IconButton, Button } from "@material-ui/core"

const styles = ({
    paper: {
        margin: "10px",
        padding: "10px",
    }
})
export default class Purchased extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list_data: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/purchased")
            .then((res) => {
                this.setState({
                    list_data: res.data
                })
            })
    }
    render() {
        console.log(this.state.list_data)
        return (
            <Container maxWidth="sm">
                {this.state.list_data.map((ele) => <Paper style={styles.paper}><Grid align="center" container xs={12}>
                    <Grid item xs={6} style={{ paddingTop: "20px" }}>
                        {ele.item}
                    </Grid>
                    <Grid item xs={1} style={{ paddingTop: "20px" }}>
                        {ele.quantity}
                    </Grid>
                </Grid>
                </Paper>
                )}
                <Link style={styles.paper} to="/">Go to Home</Link>
            </Container>
        )
    }
}
