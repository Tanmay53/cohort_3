import React,{Component} from 'react'
import {Container,Box,Typography,TextField,Button} from '@material-ui/core'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { saveUpdatedUser } from '../../Redux/actions'

class UpdateUser extends Component {
   constructor(props){
       super(props)
       
        this.UserData = this.props.userData
        console.log(this.UserData) 
        this.state = {
            id:this.UserData.id,
            name:this.UserData.name,
            age:this.UserData.age,
            email:this.UserData.email,
            cibil_score:this.UserData.cibil_score,
            loan:this.UserData.loan,
            type:this.UserData.type,
        }
   }

   handleChange = (e) =>{
       this.setState({
           [e.target.name] : [e.target.value]
       })
    }

    handleUpdate = () =>{
        console.log('updating user')
        let updatedUser = {
                id:this.state.id,
                name:this.state.name,
                age:this.state.age,
                email:this.state.email,
                cibil_score:this.state.cibil_score,
                loan:this.state.loan,
                type:this.state.type
            }
            console.log('inside handle update ',updatedUser)
            this.props.saveUpdate(updatedUser)
        }

   
   render(){
        if(this.props.isLoggedIn){
            return (
                <div>
                         <Container maxWidth='sm'>
                                <Box m={2}>
                                    <Typography variant='h5'>Update User Details:</Typography>
                                </Box>
                
                                    <form noValidate autoComplete="off">
                                        <Box m={2}>
                                            <TextField
                                                name='name'
                                                value={this.state.name}
                                                onChange={(e)=>this.handleChange(e)}
                                                id="outlined-secondary"
                                                label="Name"
                                                type='text'
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
                                                color="primary"
                                                fullWidth
                                                required
                                            />
                                        </Box>
                                        <Box m={2}>
                                           <label htmlFor='type' style={{margin:'15px'}}>Loan Type</label>
                                           <select name='type'  onChange={this.handleChange} >
                                               <option value='personal' >Personal</option>
                                               <option value='educational'>Educational</option>
                                               <option value='car'>Car</option>
                                               <option value='home'>Home</option>
                                               <option value='business'>Business</option>
                                           </select>
                                        </Box>
                                        <Box m={2}>
                                           <Button color='primary' onClick={()=>this.handleUpdate()} >Update</Button>
                                        </Box>
                                    </form>
                                    <Box ml={50}>
                                           <Button color='primary' ><Link to='/viewUser'>Check Table</Link></Button>
                                           <Button color='primary' ><Link to='/dashboard'>Go On Dashboard</Link></Button>
        
                                    </Box>
                        </Container>
                </div>
            )
        }else
            return <Redirect to='/login' />
   }
}

const mapStateToProps = state => {
    return {
        userData:state.updateUserData,
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        saveUpdate: (input) => dispatch(saveUpdatedUser(input))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser)