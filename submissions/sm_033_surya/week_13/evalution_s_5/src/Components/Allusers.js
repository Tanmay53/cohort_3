import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
class Allusers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            main: []
        }
    }
    componentDidMount() {
        let tempdata = this.props.value
        this.setState({
            data: tempdata,
            main: tempdata
        })
    }
    sorting = () => {
        let temp = this.props.value
        temp.sort((a, b) => a.loanAmount - b.loanAmount)
        this.setState({
            data: temp
        })
    }
    deleteit = (id) => {
        let temp = this.state.data.filter((ele) => {
            if (ele.id !== id) {
                return ele
            }
        })
        this.setState({
            data: temp
        })
    }
    filtering = (e) => {
        let temp = this.state.main.filter((ele) => {
            if (ele.loan == e.target.value) {
                return ele
            }
        })
        this.setState({
            data: temp
        })
    }
    render() {
        console.log(this.props)
        console.log(this.props.value, "hii")
        if (this.props.status) {
            return (
                <>
                    <button onClick={this.sorting}>Sort</button>
                    <div>
                        <select name="loan" value={this.state.loan} onChange={this.hanndleChange} onClick={this.filtering}>
                            <option value="">none</option>
                            <option value="Personal">Personal</option>
                            <option value="Educational">Educational</option>
                            <option value="Car">Car</option>
                            <option value="Home">Home</option>
                        </select>
                    </div>
                    <div>
                        <table className="table"  >
                            <thead >
                                <tr>
                                    <th>name</th><th>age</th><th>email</th><th>CIBIL</th><th>loanAmount</th><th>loan Type</th></tr></thead>
                            <tbody>
                                {this.state.data.map((ele) => <tr key={ele.id}><td>{ele.name}</td><td>{ele.age}</td><td>{ele.email}</td><td>{ele.CIBIL}</td><td>{ele.loanAmount}</td><td>{ele.loan}</td><td></td><td><button onClick=
                                    {() => this.deleteit(ele.id)}>Delete</button></td></tr>)}
                            </tbody>
                        </table>
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
export default connect(mapStateToProps)(Allusers)