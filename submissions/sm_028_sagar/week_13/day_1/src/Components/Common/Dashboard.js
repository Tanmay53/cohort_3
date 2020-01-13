import React from 'react'
import { Container,Box,Button, Typography } from '@material-ui/core'
import {Redirect,Link} from 'react-router-dom'

export default function Dashboard(props) {

    const redirectAddUser = () => {
        console.log('clicked')
        return <Redirect to='/addUser' />
    }

    return (
        <div>
            <Container maxWidth='sm'>
                <Box m={5}>
                    <Typography m={5} variant='h5'>
                        Dashboard
                    </Typography>
                </Box>
                <Box m={5}>
                    <Button variant='contained' > <Link to='/addUser'> ADD NEW USER</Link></Button>
                </Box>
                <Box m={5}>
                    <Button variant='contained'><Link to='/viewUser'> VIEW NEW USER</Link></Button>
                </Box>
            </Container>
        </div>
    )
}
