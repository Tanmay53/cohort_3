// import React from 'react';
// import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toDoList: [],
			completedList: []
		}
	}
	addListItem = () => {
		// let name= e.target.value
		// console.log(name)
		// this.setState({
		// 	toDoList: this.state.toDoList.push(name)
		// })

		// let name = this.target.value
		// event.preventDefault()
		// console.log(name)
		this.setState({
			// toDoList: this.state.toDoList.push(name)
			toDoList: this.newToDoInput.target.value
		})
		console.log(this.state.toDoList)
	}

	// removeListItem = (name) => {
	// 	let array = this.state.toDoList.filter(each => {
	// 		if (each !== name) return each
	// 	})
	// 	this.setState({
	// 		toDoList: array
	// 	})
	// }

	render() {
		return (
			<div>
				<h2>TO-Do List</h2>
				{/* <form onSubmit={this.addListItem}> */}
					<label htmlFor="newToDoInput">Name:
						<input id="newToDoInput" type="text" name="newToDoInput" value={this.state.value} placeholder=" + Add new item for List" />
					</label>
					<button type="submit" id="newToDoAddBtn" onSubmit={() => this.addListItem()}>Add</button>
					{/* <input type="submit" value="Submit" /> */}
				{/* </form> */}
				{/* <div id="toDoListDiv">
					{this.state.toDoList.map(each => {
						<div>
							<input type="checkbox" onChange={() => this.handleToDoList(each.name)} />
							<em>{each.name}</em>
						</div>
							// <label>{each.name}
							// 	<input type="checkbox" onChange={() => this.handleToDoList(each.name)} />
							// </label>
							// <button onClick={() => this.removeListItem(each.name)}>Remove</button>
					})}
				</div> */}

				{/* <div>
					<button id="completedListBtn">Show all Completed tasks</button>
					<div id="completedListDiv">
						{this.state.completedList.map(each => {
							<ul>
								<li>{each.name}</li>
							</ul>
						})}
					</div>
				</div> */}
			</div>
		)
	}

}

export default App;

{/* <label>{each.name}
	<input type="checkbox" onChange={() => this.handleToDoList(each.name)} />
</label> */}