import React from 'react';
import './App.css'
import Timer from './components/Timer'
import StopWatch from './components/StopWatch'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isTimer: true
		}

	}
	render() {
		return (
			<div id="appDiv">
				<div id="btnsDiv">
					<button style={{background:`${this.state.isTimer ? "green" : "white"}`,
						color:`${this.state.isTimer ? "white" : "black"}`}}
						onClick={() => this.setState({ isTimer: true })}>
						Timer
					</button>
					<button style={{background:`${this.state.isTimer ? "white" : "green"}`,
								color:`${this.state.isTimer ? "black" : "white"}`}}
						onClick={() => this.setState({ isTimer: false })}>
						Stop Watch
					</button>
				</div>
				<div id="timeDisplayDiv">
					{this.state.isTimer ? (<Timer />) : (<StopWatch />)}
				</div>
			</div>
		)
	}
}

export default App;
