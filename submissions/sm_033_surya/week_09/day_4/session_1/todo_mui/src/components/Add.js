import React from "react"
import { Button, TextField, Box, Container, Grid } from '@material-ui/core'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }
    }
    render() {
        return (
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <TextField id="outlined-basic" fullWidth margin="dense" label="Things To Do" variant="outlined"
                            type="text"
                            value={this.state.text}
                            onChange={(e) => this.setState({
                                text: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item>
                        <Box margin={1}>
                            <Button variant="outlined" color="primary" onClick={() => this.props.add(this.state.text)}>Add</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
export default Add