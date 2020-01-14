import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { adduser } from "../Common/actions"




class Adduser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            email: "",
            CIBIL: "",
            loanAmount: "",
            loan: "",
            id: 0
        }
    }
    hanndleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitdata = () => {
        console.log("hi")
        this.setState({
            id: this.state.id + 1
        })
        let temp = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
            CIBIL: this.state.CIBIL,
            loanAmount: Number(this.state.loanAmount),
            loan: this.state.loan,
            id: this.state.id
        }
        this.props.dispatch(adduser(temp))
    }
    render() {
        console.log(this.state)
        if (this.props.status) {
            return (
                <>
                    <div className="container">
                        <div className="col-6 offset-3">
                            <div>
                                <label>Name</label>
                            </div>
                            <div>
                                <input className="col-12" name="name" value={this.state.name} onChange={this.hanndleChange} />
                            </div>
                            <div>
                                <label>Age</label>
                            </div>
                            <div>
                                <input className="col-12" name="age" value={this.state.age} onChange={this.hanndleChange} />
                            </div>
                            <div>
                                <label>Email</label>
                            </div>
                            <div>
                                <input name="email" className="col-12" value={this.state.email} onChange={this.hanndleChange} />
                            </div>
                            <div>
                                <label>CIBIL</label>
                            </div>
                            <div>
                                <input className="col-12" name="CIBIL" value={this.state.CIBIL} onChange={this.hanndleChange} />
                            </div>
                            <div>
                                <label>LoanAmount</label>
                            </div>
                            <div>
                                <input className="col-12" name="loanAmount" value={this.state.loanAmount} onChange={this.hanndleChange} />
                            </div>
                            <div>
                                <label>Loan</label>
                            </div>
                            <div>
                                <select name="loan" value={this.state.loan} onChange={this.hanndleChange}>
                                    <option value="none">none</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Car">Car</option>
                                    <option value="Home">Home</option>
                                </select>
                                {/* <input name="loan" className="col-12" value={this.state.loan} onChange={this.hanndleChange} /> */}
                            </div>
                            <div className="text-center p-3">
                                <button className="btn btn-success" onClick={this.submitdata}>ADD</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <Redirect to="/login" />
                </>
            )
        }
    }

}
const mapStateToProps = state => {
    return {
        value: state.addReducer,
        status: state.loginReducer
    }
}
export default connect(mapStateToProps)(Adduser)