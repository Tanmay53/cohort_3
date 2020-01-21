import React from 'react'
import { connect } from 'react-redux'
import { manu, priceSort, fillter } from "./Common/Actions"
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Allvehicles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isManSort: false,
            isPsort: false
        }
    }
    sortBymanu = () => {
        this.setState({
            isManSort: !this.state.isManSort
        })
        console.log("hi")
        this.props.dispatch(manu(this.state.isManSort))
    }
    priceSorting = () => {
        this.setState({
            isPsort: !this.state.isPsort
        })
        this.props.dispatch(priceSort(this.state.isPsort))
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.props.dispatch(fillter(e.target.value))
    }
    render() {
        console.log(this.props)
        if (this.props.check) {
            return (
                <>
                    <Container fixed>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Model_No</TableCell><TableCell>Model_Name</TableCell><TableCell>Manufacture<Button variant="outlined" onClick={this.sortBymanu}>Sort</Button></TableCell>
                                        <TableCell>Mileage
                                            <Select variant="outlined" onChange={this.handleChange}>
                                                <MenuItem value="30">30</MenuItem>
                                                <MenuItem value="40">40</MenuItem>
                                                <MenuItem value="50">50</MenuItem>
                                                <MenuItem value="60">60</MenuItem>
                                            </Select>
                                        </TableCell><TableCell>Price<Button variant="outlined" onClick={this.priceSorting}>Sort</Button></TableCell><TableCell>Quantity</TableCell>
                                    </TableRow>
                                </TableHead>

                                <tbody>
                                    {this.props.value.map((ele) => <TableRow key={ele.id}><TableCell>{ele.model_no}</TableCell><TableCell><Link to={`${this.props.match.url}/${ele.id}`}>{ele.model_name}</Link></TableCell><TableCell>{ele.manufacture}</TableCell><TableCell>{ele.mileage}</TableCell><TableCell>{ele.price}</TableCell><TableCell>{ele.quantity}</TableCell></TableRow>)}
                                </tbody>
                            </Table>
                        </TableContainer>
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
        value: state.addReducer.displayData,
        check: state.userLogin.login
    }
}

export default connect(mapStateToProps)(Allvehicles)