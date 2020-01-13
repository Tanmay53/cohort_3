import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {addNewStaff} from '../../Redux/actions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class AddingCustomer extends Component {
    constructor (){
        super()
        this.state ={
            firstName:'',
            age:'',
            email:'',
            cibil:'',
            amount:'',
            type:''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit =()=>{
        let newCustomer ={...this.state}
        this.props.addNewStaff(newCustomer)
        this.setState({
          firstName:'',
          age:'',
          email:'',
          cibil:'',
          amount:'',
          type:''
        })
    }
    render() {
        return (
<>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <h1 className ="text-center my-4 text-info">Customer Entry Form</h1>
        <form  noValidate onSubmit = {(e) =>e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={this.state.firstName}
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value ={this.state.age}
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {this.state.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {this.state.cibil}
                name="cibil"
                label="cibil"
                type="text"
                id="cibil"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {this.state.amount}
                name="amount"
                label="Loan Amount"
                type="text"
                id="amount"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value ={this.state.type}
                name="type"
                label="Personal, Educational, Car, Home etc."
                type="text"
                id="type"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="my-2"
            onClick={(e)  =>this.handleSubmit(e)}
          >
            Add New Customer
          </Button>
        </form>
      </div>
    </Container>
      <Link to="/dashboard" className="text-center m-auto btn btn-success">Go Back to DashBoard</Link>
</>
  );
}
}


const mapStateToProps = (state) => ({
  state:state
})

const mapDispatchToProps = (dispatch) => ({
  addNewStaff : (payload) => dispatch(addNewStaff(payload))
})

export default connect (mapStateToProps , mapDispatchToProps) (AddingCustomer);