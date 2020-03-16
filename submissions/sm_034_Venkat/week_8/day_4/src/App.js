import React from 'react';
import './App.css';
import Table from './Table';

// function setData(details) {
// 	let str = JSON.stringify(details)
// 	localStorage.setItem("reactEmployees", str)
// }
// function updateData(u) {
// 	let data = getData()
// 	let data = JSON.parse(localStorage.getItem('reactEmployees'))
// 	data.push(u)
// 	setData(data)
// 	console.log(data)
// }

// if (localStorage.reactEmployees !== undefined) console.log("The Array-Key is already existed..!")
// else {
// 	let array = []	//do this initialisation after writing set function only
// 	setData(array)      //else it's showing setData not-defined.	
// 	console.log("New key is initialised in localstorage.!")
// }

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			age: '',
			address: '',
			department: '',
			salary: '',
			allEmployees: [],
			departments: []
		}
		this.inputChange = this.inputChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.resetForm = this.resetForm.bind(this)
	}
	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	submitForm = (e) => {
		e.preventDefault()
		// let flag = 0
		if (this.state.name !== '' && this.state.age !== '' && this.state.address !== '' &&
			this.state.department !== '' && this.state.salary !== '') {
			// console.log(this.state.name + this.state.age)
			// this.state.allEmployees.map(each => {
			// 	if (each.name + each.age === this.state.name + this.state.age) flag = 1
			// 	return flag = 1
			// })
			// if (flag === 1) alert("The person with the same -Name- and -Age- already existed.!")
			// else {
			alert(this.state.name + " " + this.state.department)
			let obj = {
				name: this.state.name,
				age: this.state.age,
				address: this.state.address,
				department: this.state.department,
				salary: this.state.salary
			}
			console.log(obj)
			let addedArr = this.state.allEmployees
			addedArr.push(obj)
			this.setState({
				name: '',
				age: '',
				address: '',
				department: '',
				salary: '',
				allEmployees: addedArr
			})
			// updateData(obj)
			this.resetForm()
			console.log(this.state.allEmployees)
			let departments= this.state.allEmployees.map(each => each.department)
			let departmentsArr= this.removeDuplicates(departments)
			this.setState({departments:departmentsArr})
			// }
		}
		else alert("Please fill all the fields.!")

	}
	removeDuplicates=(arr)=> {
		return arr.filter((a, b) => arr.indexOf(a) === b)
	  };
	resetForm = () => {
		document.getElementById("dataForm").reset();
	}
	removeEmployee = (string) => {
		let filteredArr = this.state.allEmployees.filter(each => {
			let str = each.name + each.age
			if (str !== string) return each
		})
		console.log(filteredArr)
		this.setState({ allEmployees: filteredArr })
	}

	render() {
		return (
			<div id="appDiv">
				<h3>Enter new-employee Details in this form</h3>
				<form onSubmit={this.submitForm} id="dataForm">
					<label>
						Name
                        <input type="text" name="name" value={this.state.value} onChange={this.inputChange} />
					</label>
					<label>
						Age
                        <input type="text" name="age" value={this.state.value} onChange={this.inputChange} />
					</label>
					<label>
						Address
                        <input type="text" name="address" value={this.state.value} onChange={this.inputChange} />
					</label>
					<label>
						Department
                        <input type="text" name="department" value={this.state.value} onChange={this.inputChange} />
					</label>
					<label>
						Salary
                        <input type="text" name="salary" value={this.state.value} onChange={this.inputChange} />
					</label>
					<input type="submit" id="formSubmitBtn"/>
				</form>
				{this.state.allEmployees.length !== 0 && <Table data={this.state.allEmployees}
					removeEmployee={this.removeEmployee} depts={this.state.departments}/>}
			</div>
		)
	}
}

export default App;
