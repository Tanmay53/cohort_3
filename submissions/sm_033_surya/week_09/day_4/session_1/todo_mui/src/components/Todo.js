import React from "react"
import { Grid, Container, Checkbox, Button, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
const styles = theme => ({
    paper: {
        height: "50px",
        margin: "10px",
        borderRadius: "10px"
    },
    delete: {
        borderRadius: "50%"
    },
    itemtext: {
        margin: "10px"
    }
})
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { classes } = this.props
        return (
            <Container>
                <Grid item><h3>{this.props.label}</h3></Grid>
                <Grid spacing={2} xs={6}>
                    {this.props.input.map((ele) => <Paper elevation0><Grid container xs={12} key={ele.item + ele.id} className={classes.paper} style={{ display: "flex" }}><Grid item xs={1}><paper><Checkbox type="checkbox" defaultChecked={this.props.isCompleted} onClick={() => this.props.toggle(ele.id)} color="default" /></paper> </Grid><Grid xs={9} style={{ color: `${ele.isCompleted ? "red" : "black"}`, textDecoration: `${ele.isCompleted ? "line-through" : "black"}` }}><div className={classes.itemtext}>{ele.item}</div></Grid>
                        <Grid item><div><Button className={classes.delete} onClick={() => this.props.del(ele.id)}><DeleteIcon /></Button></div></Grid>
                    </Grid>
                    </Paper>
                    )}
                </Grid>
            </Container>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Todo)