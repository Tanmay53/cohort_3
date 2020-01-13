import React from 'react'
import {Container,Box,Typography,TextField,Button} from '@material-ui/core'
import { Component } from 'react'
import { connect } from 'react-redux'
import {submitData} from '../../Redux/actions'
import {Link} from 'react-router-dom'

class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            age:'',
            email:'',
            cibil_score:'',
            loan:'',
            type:'personal',
            count:0
        }
    
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    handleSubmit = () =>{
        let newUser = {
            id:this.state.count,
            name:this.state.name,
            age:this.state.age,
            email:this.state.email,
            cibil_score:this.state.cibil_score,
            loan:this.state.loan,
            type:this.state.type
        }
        console.log('submit clicked')
        console.log(newUser)
        this.props.dataSubmit(newUser)
        this.state.count++
    }

    render(){
        return (
            <div>
                <Container maxWidth='sm'>
                        <Box m={2}>
                            <Typography variant='h5'>Add New User</Typography>
                        </Box>
                        <Box m={2}>
                            <Typography variant='h5'>Fill Details</Typography>
                        </Box>
                            <form autoComplete="off">
                                <Box m={2}>
                                    <TextField
                                        name='name'
                                        value={this.state.name}
                                        onChange={(e)=>this.handleChange(e)}
                                        id="outlined-secondary"
                                        label="Name"
                                        type='text'
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        name='age'
                                        value = {this.state.age}
                                        onChange={(e)=>this.handleChange(e)}
                                        id="outlined-secondary"
                                        label="Age"
                                        type='number'
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        name='email'
                                        value = {this.state.email}
                                        onChange={(e)=>this.handleChange(e)}
                                        id="outlined-secondary"
                                        label="Email"
                                        type='email'
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        required

                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        name='cibil_score'
                                        value = {this.state.cibil_score}
                                        onChange={(e)=>this.handleChange(e)}
                                        id="outlined-secondary"
                                        label='CIBIL Score'
                                        type='number'
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        required

                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        name='loan'
                                        value = {this.state.loan}
                                        onChange={(e)=>this.handleChange(e)}
                                        id="outlined-secondary"
                                        label="Loan Amount"
                                        type='number'
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                   <label htmlFor='type' style={{margin:'15px'}}>Loan Type</label>
                                   <select name='type' value={this.state.type} onChange={this.handleChange} >
                                       <option value='personal'>Personal</option>   
                                       <option value='educational'>Educational</option>
                                       <option value='car'>Car</option>
                                       <option value='home'>Home</option>
                                       <option value='business'>Business</option>
                                   </select>
                                </Box>
                                <Box m={2}>
                                   <Button color='primary'  onClick={()=>this.handleSubmit()} >Submit Data</Button>
                                </Box>
                            </form>
                            <Box ml={50}>
                                   <Button color='primary' ><Link to='/viewUser'>Check Table</Link></Button>
                            </Box>
                </Container>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        dataSubmit: (input) => dispatch(submitData(input))
    }
}

export default connect(null,mapDispatchToProps)(AddUser)
