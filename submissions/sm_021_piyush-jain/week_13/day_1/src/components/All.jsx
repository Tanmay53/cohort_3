import React, { Component } from 'react'
import { connect } from 'react-redux'
class All extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            array: props.value,
            type:'',
            filter:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            type:e.target.value
        })
        if(this.state.type=="asc")
        {
            this.setState({
                array:this.state.array.sort((a,b)=>a.cibil-b.cibil)
            })
        }
        else if(this.state.type=="desc")
        {
            this.setState({
                array:this.state.array.sort((a,b)=>b.cibil-a.cibil)
            })
        }
        else if(this.state.type=="lasc")
        {
            this.setState({
                array:this.state.array.sort((a,b)=>a.amount-b.amount)
            })
        }
        else 
        {
            this.setState({
                array:this.state.array.sort((a,b)=>b.amount-a.amount)
            })
        }
    }
    handleSelect=(e)=>{
        this.setState({
            type:e.target.value
        })
        if(this.state.filter=="personal")
        {
            this.setState({
                array:this.state.array.filter(item=>item.type==this.state.type)
            })
        }
        else if(this.state.filter=="educational")
        {
            this.setState({
                array:this.state.array.filter(item=>item.type==this.state.type)
            })
        }
        else if(this.state.filter=="home")
        {
            this.setState({
                array:this.state.array.filter(item=>item.type==this.state.type)
            })
        }
        else 
        {
            this.setState({
                array:this.state.array.filter(item=>item.type==this.state.type)
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <select onChange={this.handleChange}>
                        <option>Sort</option>
                        <option value="asc">Cibil DESC</option>
                        <option value="desc">Cibil ASC</option>
                        <option value="lasc">LOAN DESC</option>
                        <option value="ldesc">LOAN ASC</option>
                    </select>
                    <select onChange={this.handleSelect}>
                        <option value="personal">Personal</option>
                        <option value="educational">Educational</option>
                        <option value="home">Home</option>
                        <option value="car">Car</option>
                    </select>
                    <table class="table">
                        <tr><th>Name</th><th>Age</th><th>email</th><th>Cibil Score</th><th>Loan amaount</th><th>Loan type</th><th>Edit</th><th>Delete</th></tr>
                        {this.state.array.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.cibil}</td>
                                <td>{item.amount}</td>
                                <td>{item.type}</td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </tr>
                        ))}
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.addUsers
})

export default connect(
    mapStateToProps
)(All)