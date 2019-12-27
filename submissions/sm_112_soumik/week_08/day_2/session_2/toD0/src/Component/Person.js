// import React from "react";

// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Soumik",
//       email: "acharya266@gmail.com",
//       pass: "1 2 3 4",
//       new_name: ""
//     };
//   }

//   handleClick = () => {
//     this.setState({ name: this.state.new_name });
//     console.log(this.state.name);
//   };

//   handleChange = e => {
//     this.setState({ new_name: e.target.value });
//     console.log("the value is", e.target.value);
//   };

//   render() {
//     return (
//       <div>
//         <h3>Hello {this.state.name}</h3>
//         <h4>Your email is {this.state.email}</h4>
//         <h5>Your password is {this.state.pass}</h5>
//         <input
//           placeholder="Enter name"
//           value={this.state.new_name}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>Change Name</button>
//       </div>
//     );
//   }
// }

// export default Person;
