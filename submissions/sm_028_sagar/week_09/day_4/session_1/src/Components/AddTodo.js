import React, { Component } from 'react'
import {Grid,Button,Box,Input,Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    } 

    handleClick = () =>{
        this.props.addTodo(this.state.value)
    }

    render() {
        return (
            <div >
               <Grid 
                    container
                    direction='column'
                    justify='center'
               >
                    <form noValidate autoComplete="off">
                        <Box m={2}>
                            <Input color='secondary' value={this.state.value} onChange={this.handleChange} placeholder='Add Todo' m={3}/>
                            <Fab ml={2} size='small' color="primary" aria-label="add">
                                <AddIcon onClick={this.handleClick}/>
                            </Fab>
                        </Box> 
                    </form>
               </Grid>

            </div>
        )
    }
}
