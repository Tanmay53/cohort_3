import React from 'react'
import { connect } from "react-redux"
import { add } from "./Actions";
import { Grid, TextField, InputAdornment, IconButton, Icon } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            id: 1
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    addData = () => {
        this.setState({
            id: this.state.id + 1
        })
        this.props.dispatch(add(this.state.text, this.state.id))
        this.setState({ text: "" })
    }
    render() {
        return (
            <>
                <Grid xs={8} sm={8} md={8} lg={8}>
                    <Grid item xs={12}>
                        <TextField fullWidth variant="outlined" label="ADD Things" value={this.state.text} onChange={this.handleChange}
                            InputProps={{
                                endAdornment: (<InputAdornment position="end">
                                    <IconButton onClick={this.addData}><Icon style={{ color: green[500] }}>add_circle</Icon></IconButton>
                                </InputAdornment>),
                            }} /></Grid>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.todoReducer
    }
}
export default connect(mapStateToProps)(Todo)