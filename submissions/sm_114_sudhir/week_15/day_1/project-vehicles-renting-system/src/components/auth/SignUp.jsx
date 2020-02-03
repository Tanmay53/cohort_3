import React, { Component } from 'react'
import { Button, TextField, Checkbox, Container, Typography, Link, Grid } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default class SignUp extends Component {
    render() {
        return (
            <Container component="main" maxWidth="xs">
                        <div>
                            <Typography component="h1" variant="h5">
                            Make Your Trip
                            </Typography>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="pickUpDate"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="pickUpDate"
                                        label="Pick-up Date"
                                    />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="dropOffDate"
                                        label="Drop-off Date"
                                        name="dropOffDate"
                                    />
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                    </Grid>
                                </Grid>
                                </form>
                        </div>
                        </Container>
        )
    }
}
