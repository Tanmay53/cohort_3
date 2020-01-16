import React from "react"
import { connect } from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import { del, tog } from "./Actions"
import { Grid, Typography, IconButton, Paper, ListItem, List, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction } from "@material-ui/core"

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    list: {
        margin: "30px"
    },
    text: {
        padding: "20px"
    }
}
const ListData = (props) => {
    console.log(props.value)
    return (
        <>

            <Grid container spacing={2} xs={8}><Grid item style={styles.text}><Typography variant="h5">No.Notcompletd:</Typography></Grid><Grid item><Typography variant="h3">{props.count}</Typography></Grid></Grid>
            <List style={styles.root} xs={12}>
                {props.value.map((ele) => <ListItem key={ele.id}><ListItemIcon><Checkbox edge="start" tabIndex={-1} disableRipple type="checkbox" onChange={() => props.toggle(ele.id, ele.completed)} /></ListItemIcon><ListItemText primary={ele.item} /><ListItemSecondaryAction><IconButton onClick={() => props.delete(ele.id, ele.completed)}><DeleteIcon /></IconButton></ListItemSecondaryAction></ListItem>)}
            </List>
            Completed Todo
            <List style={styles.root} xs={12}>
                {props.value.map((ele) => {
                    if (ele.completed) {
                        return <ListItem style={styles.list} key={ele.id}><ListItemText primary={ele.item} /><ListItemSecondaryAction><IconButton onClick={() => props.delete(ele.id, ele.completed)}><DeleteIcon /></IconButton></ListItemSecondaryAction></ListItem>
                    }
                })
                }
            </List>
        </>
    )
}
const mapStateToProps = state => {
    return {
        value: state.todoReducer,
        count: state.countReducer
    }
}
const mapDispatchToProps = dispatch => {
    return ({
        delete: (id, check) => { dispatch(del(id, check)) },
        toggle: (id, check) => (dispatch(tog(id, check)))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ListData)