import React from "react"
import { Grid, Container, Paper, Checkbox, Button } from "@material-ui/core"
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
class CompletedTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classes } = this.props
        console.log(this.props.input, "com")
        return (
            <Container>
                <Grid spacing={3} xs={6}>
                    <Grid item><h3>{this.props.label}</h3></Grid>
                    {this.props.input.map((ele, index) => <Paper className={classes.paper} elevation0 style={{ display: "flex" }} key={ele.item + ele.id}><Grid xs={1}><div><Checkbox type="checkbox" defaultChecked={ele.isCompleted} onClick={() => this.props.toggle(ele.id)} color="default" /></div></Grid><Grid xs={9} className="h5" style={{ color: `${ele.isCompleted ? 'red' : "black"}`, textDecoration: `${ele.isCompleted ? "line-through" : "black"}` }}><div className={classes.itemtext}>{ele.item}</div></Grid>
                        <div className='col-2 p-3'> <Button className={classes.delete} onClick={() => this.props.del(ele.id)}><DeleteIcon /></Button></div>
                    </Paper>
                    )}</Grid>
            </Container>
        )
    }

}

export default withStyles(styles, { withTheme: true })(CompletedTodo)