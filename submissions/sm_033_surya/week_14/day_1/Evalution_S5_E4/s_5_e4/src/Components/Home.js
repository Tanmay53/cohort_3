import React from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const styles = ({
    maindiv: {
        marginTop: "5px"
    },
    div: {
        margin: "20px"
    }
})

class Home extends React.Component {

    render() {
        console.log(this.props.value)
        if (this.props.value) {
            return (

                <>
                    <Container maxWidth="sm" style={styles.maindiv}>
                        <Grid container style={styles.div}>
                            <Grid item xs={6}>
                                <Link to="/addnewvehicles"><Button variant="outlined" color="primary">
                                    ADD NEW VEHICLES
                                </Button></Link>
                            </Grid>

                            <Grid item xs={6}>
                                <Link to="/allvehicles"><Button variant="outlined" color="primary">
                                    VIEW ALL VEHICLES
                                </Button></Link>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.userLogin.login
    }
}
export default connect(mapStateToProps)(Home)
