// import React from 'react';



// // practice stateless component
// // function Welcome(pros){
// //   return(
// //     <div>Hello, {pros.name}</div>
// //   )
// // }

// // const Wel = (props) => <div>Hello, {props.name}</div>

// // function App(){
// //   return (
// //     <div>
// //       <h1>Hello Sudhir Singh</h1>
// //       <Welcome name = 'Sudhir' />
// //       <Wel name = 'Singh'/>
// //     </div>
// //   )
// // }


// //Consider the following stateless component:
// // function App(){
// //   return (
// //     <div>
// //       <h1>Hello Sudhir Singh</h1>
// //       <Profile/>
// //     </div>
// //   )
// // }

// // class Profile extends React.Component{
// //   render(){
// //     return (
// //       <div>
// //         <h1>Profile</h1>
// //         <p>Name: Patrick</p>
// //         <p>Age: 21</p>
// //         <p>Gender: Male</p>
// //       </div>
// //     )
// //   }
// // }

// // Now lets add state to it:
// // class Profile extends React.Component{
// //   constructor(props){
// //     super(props)

// //     this.state = {
// //       name: 'Sudhir Singh',
// //       age: 21,
// //       gender: 'Male'
// //     }
// //   }

// //   render(){
// //     return(
// //       <div>
// //         <h1>Profile</h1>
// //         <p>Name: {this.state.name}</p>
// //         <p>Age: {this.state.age}</p>
// //         <p>Gender: {this.state.gender}</p>
// //       </div>
// //     )
// //   }
// // }

// // Handling events in React
// // class SimpleComponent extends React.Component{
// //   constructor(props){
// //     super(props)

// //     this.state = {
// //       printValue: 'Clicked'
// //     }
// //     //bind the handleclik other get error undefined state
// //     this.handleClick = this.handleClick.bind(this)
// //   }
// //   handleClick(){
// //     console.log(this.state.printValue)
// //   }
// //   render(){
// //     return(
// //       <button onClick={this.handleClick}>Click Here to print</button>
// //     )
// //   }
// // }

// //if we use arrow function no need to bind
// // class SimpleComponent extends React.Component{
// //   constructor(props){
// //     super(props)

// //     this.state = {
// //       printValue: 'Clicked'
// //     }
// //     //no need to bind
// //     // this.handleClick = this.handleClick.bind(this)
// //   }
// //   handleClick = () =>{
// //     console.log(this.state.printValue)
// //   }
// //   render(){
// //     return(
// //       <button onClick={this.handleClick}>Click Here to print</button>
// //     )
// //   }
// // }

// //using event object
// //adding two inputs
// // class SimpleComponent extends React.Component{
// //   constructor(props){
// //     super(props)
// //     this.state = {
// //       firstNumber : null,
// //       secondNumber : null,
// //       result : null,
// //     };
// //   }

// //   //method for adding the inputs 
// //   handleClick = (e) => {
// //     this.setState({
// //       result : this.state.firstNumber + this.state.secondNumber
// //     });
// //   }

// //   handleInputChange = (e) => {
// //     let name = e.target.name
// //     this.setState({
// //       [e.target.name] : Number(e.target.value)
// //     });
// //   }

// //   render(){
// //     return (
// //       <div>
// //         <input type="text" name="firstNumber" onChange={this.handleInputChange} />
// //         <input type="text" name="secondNumber" onChange={this.handleInputChange} />
// //         <button onClick={this.handleClick}>Click here find sum of two..</button>
// //         <p>Result: {this.state.result}</p>
// //       </div>
// //     )
// //   }
// // }


// //Fixing Async state updates
// // class SimpleComponent extends React.Component{
// //   constructor(props){
// //     super(props)
// //     this.state = {
// //       counter : 0
// //     };
// //   }
// //   handleClick = () => {
// //     this.setState((state) => {
// //       return {
// //         counter : state.counter + 1
// //       }
// //     });
// //   }

// //   render(){
// //     return(
// //       <div>
// //         <button onClick={this.handleClick}>Click here to increase counter</button>
// //         <p>Youve clicked the button {this.state.counter} times</p>
// //       </div>
// //     )
// //   }
// // }

// //merged state updates
// class Parent extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       names : ['masai', 'school']
//     }
//   }

//   updateName = (e) => {
//     this.setState({
//       names : [e.target.value, this.state.names[1]]
//     });
//   }

//   render(){
//     return (
//       <div>
//         <input onChange={this.updateName} type="text" />
//         <SimpleComponent names={this.state.names} />
//       </div>
//     );
//   }
// }

// class SimpleComponent extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       counter : 0
//     };
//   }
//   handleClick = () => {
//     this.setState((state) => {
//       return {
//         counter : state.counter + 1
//       }
//     });
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.handleClick}>Click here to increase counter</button>
//         <p>Youve clicked the button {this.state.counter} times</p>
//         <p>{this.props.names[0]}</p>
//         <p>{this.props.names[1]}</p>
//       </div>
//     )
//   }
// }



// function App(){
//   return(
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App;