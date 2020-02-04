import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Grid, Select, TextField, Button, Container } from "@material-ui/core"

const styles = ({
    spaces: {
        margin: "10px"
    }
})
export default class Edit_item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            quantity: "",
            purchased: false,
            id: "",
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
                this.checkit(this.state.data)
            })
        // console.log(this.state.data,"")       

    }
    checkit = (data) => {
        this.setState({
            item: data.item,
            quantity: data.quantity,
            purchased: data.purchased,
            id: data.id,
        })
        console.log(this.state)
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
        axios.post(`http://localhost:5000/edit/${this.props.match.params.id}`, { "item": this.state.item, "quantity": this.state.quantity, "purchased": this.state.purchased, "id": this.state.id })
            .then((res) => console.log(res))
        this.setState({
            goback: !this.state.goback
        })
    }
    render() {
        if (!this.state.goback) {
            return (
                <>
                    <Grid xs={12} container justify="center">
                        <Grid item xs={6} >
                            <TextField fullWidth style={styles.spaces} variant="outlined" label="please enter item name" name="item" value={this.state.item} onChange={this.handleChange} />

                            <Select fullWidth align="center" style={styles.spaces} name="quantity" value={this.state.quantity} onChange={this.handleChange}>
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Select>

                            <Grid item={12} align="center">
                                <Button style={styles.spaces} xs={12} onClick={this.handleClick}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )
        }
        else {
            return (
                <Container maxWidth="sm" align="center" style={{ margin: "10px" }}>
                    <Link to="/">Go to Home</Link>
                </Container>
            )
        }
    }
}
