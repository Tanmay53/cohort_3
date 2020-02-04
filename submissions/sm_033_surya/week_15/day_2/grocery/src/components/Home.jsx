import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Grid, Paper, Container, IconButton, Button } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = ({
    menubar: {
        margin: "20px"
    },
    paper: {
        margin: "10px",
        padding: "10px",
    }
})
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/listing")
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        return (
            <>
                <Grid container align="center" style={styles.menubar}>
                    <Grid item xs={6} align="center">
                        <Link to="/additem">ADD ITEM</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/done">Ordered List</Link>
                    </Grid>
                </Grid>
                {/* <Link to ="/edit">Edit</Link> */}
                <Container maxWidth="sm">
                    <Paper style={styles.paper} align="center" style={{ color: "red", fontSize: "20px" }}> <Grid container > <Grid xs={6} item>Item name</Grid><Grid xs={1} item>Quantity</Grid></Grid></Paper>
                    {this.state.data.map((ele) => <Paper style={styles.paper}><Grid align="center" container xs={12}>
                        <Grid item xs={6} style={{ paddingTop: "20px" }}>
                            {ele.item}
                        </Grid>
                        <Grid item xs={1} style={{ paddingTop: "20px" }}>
                            {ele.quantity}
                        </Grid>
                        <Grid item xs={1}>
                            <Link to={`edit/${ele.id}`}><IconButton><CreateIcon /></IconButton></Link>
                        </Grid>
                        <Grid item xs={1}>
                            <Link to={`delete/${ele.id}`}><IconButton><DeleteIcon /></IconButton></Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to={`mark/${ele.id}`}><Button style={{ paddingTop: "10px" }} variant="outlined" color="primary">Purchase</Button></Link>
                        </Grid>

                    </Grid> </Paper>)}
                </Container>
            </>
        )
    } 
}
export default Home