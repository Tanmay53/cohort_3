import React from 'react'
import Table from './Table'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "",
            dept: "",
            salary: "",
            Data: []

        }
    }

    handleIput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sortData = (e) => {
        this.setState({
            Data: this.state.Data.filter(function (val) {
                return val.salary > e.target.value;
            })
        });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            name: this.state.name,
            gender: this.state.gender,
            dept: this.state.dept,
            salary: this.state.salary,

        }
        this.setState({
            Data: [...this.state.Data, obj],
            name: "",
            salary: "",

        })


    }

    render() {
        return (<div>
            <input type="text" placeholder="enter employee name" name="name" value={this.state.name} onChange={this.handleIput} /><br></br>
            <label for="male">Male</label>
            <input type="radio" name="gender" value={this.state.gender} onChange={this.handleIput} checked />
            <label for="female">Female</label>
            <input type="radio" name="gender" value={this.state.gender} onChange={this.handleIput} /><br></br>
            <select>
                <option name="dept" value={this.state.dept} onClick={this.handleIput}>IT</option>
                <option name="dept" value={this.state.dept} onClick={this.handleIput}>Sales</option>
                <option name="dept" value={this.state.dept} onClick={this.handleIput}>HR</option>
            </select><br></br>
            <input type="Number" placeholder="enter salary" name="salary" value={this.state.salary} onChange={this.handleIput} /><br></br>
            <button onClick={this.handleSubmit}>submit</button>
            <button key={1} value="10000" onClick={this.sortData}>10k</button>
            <button key={2} value="20000" onClick={this.sortData}>20k</button>
            <button key={3} value="30000" onClick={this.sortData}>30k</button>
            {this.state.Data.map(val => <Table details={this.state.Data} key={val.name} />)}
        </div>)
    }
}
export default App
