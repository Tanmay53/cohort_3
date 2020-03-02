const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

// const action = {
// 	type : INC_COUNTER
// }

// const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER";

const MULTIPLY_COUNTER = "MULTIPLY_COUNTER"

const Divide = "Divide"
const Mod = "Mod"
const Input = "Input"
const Custom = "Custom"

const incrementCounter = (payload) =>{
	console.log("inc counter by x")
	return {
		type : INC_COUNTER,
        val: payload
	}
}

// const incrementCounter = () =>{
// 	console.log("inc counter by x")
// 	return {
// 		type : INC_COUNTER
// 	}
// }

const decrementCounter = () =>{
	return {
		type : DEC_COUNTER,
		
	}
}

const multiply = ()=> {
	return {
		type : MULTIPLY_COUNTER,
		
	}
}

const divide = () => {
	return{
		type: Divide,
	
	}
}

const mod =() => {
	return {
		type: Mod,
		
	}
}

const custom = () => {
	return {
		type : Custom,
		
	}
}

const inputs = (val) => {
	return {
		type : Input,
		val
	}
}

export { incrementCounter, decrementCounter,multiply,divide,mod,inputs,custom };