import React,{Component} from 'react'
import { Container,TableContainer,TableHead,TableRow,TableCell,TableBody,Table } from '@material-ui/core'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {updateUser,sortCibil,sortLoan,filterLoanType} from '../../Redux/actions'

class ViewUser extends Component {
    constructor(props){
        super(props)
        this.state ={
            type:'asc',
            loanAmt:'asc',
            loanType:'all',
        }
    }
    
    sortCibil = (e) =>{
        this.setState({
            type:e.target.value,
        })
        this.props.sortCibil(e.target.value)
    }

    sortLoan = (e) =>{
        console.log('sorting')
        this.setState({
            loanAmt:e.target.value,
        })
        this.props.sortLoan(e.target.value)
    }

    filterLoanType = (e) => {
        this.setState({
            loanType:e.target.value,
        })
        this.props.filterLoan(e.target.value)
        console.log('filtering started')
    }
    
    render(){
        if(this.props.isLoggedIn){
            return (
                <div>
                    <Container maxWidth='md'>
                    <TableContainer >
                        <Table  size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">CIBIL Score
                                    <br />
                                    <select value={this.state.type} onChange={this.sortCibil}>
                                        <option value='asc'>asc</option>
                                        <option value='desc'>desc</option>
                                    </select>
                                </TableCell>
                                <TableCell align="center">Loan Amount
                                    <br />
                                    <select value={this.state.loanAmt} onChange={this.sortLoan}>
                                        <option value='asc'>asc</option>
                                        <option value='desc'>desc</option>
                                    </select>   
                                </TableCell>
                                <TableCell align="center">Loan Type
                                    <br />
                                    <select value={this.state.loanType} onChange={this.filterLoanType}>
                                        <option value='personal'>personal</option>
                                        <option value='business'>business</option>
                                        <option value='education'>education</option>
                                        <option value='car'>car</option>
                                        <option value='home'>home</option>
                                        <option value='all'>all</option>
                                    </select> 
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.props.viewTableData.map(item => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell align='center'><Link to={`/updateUser/${item.id}`} onClick={()=>this.props.getUser(item.id)} >{item.name}</Link></TableCell>
                                        <TableCell align='center'>{item.age}</TableCell>
                                        <TableCell align='center'>{item.email}</TableCell>
                                        <TableCell align='center'>{item.cibil_score}</TableCell>
                                        <TableCell align='center'>{item.loan}</TableCell>
                                        <TableCell align='center'>{item.type}</TableCell>
                                    </TableRow>
                                )
                            })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Link to='/dashboard'>Dashboard</Link>
                    </Container>
                </div>
            )
        }else
            return <Redirect to='/login' />
    }
}

const mapStateToProps = state =>{
    return {
        viewTableData:state.viewTableData,
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUser:(id) => dispatch(updateUser(id)),
        sortCibil: (value) => dispatch(sortCibil(value)),
        sortLoan:(value) => dispatch(sortLoan(value)),
        filterLoan:(value) => dispatch(filterLoanType(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewUser)