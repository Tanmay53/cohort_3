import React, { Component } from "react";
import UserDetails from "./UserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occ: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    // Proceed to next step
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    // Proceed to next step
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = input => e => {
    return this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occ, city, bio } = this.state;
    const values = { firstName, lastName, email, occ, city, bio };
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h2>Form User details</h2>;

      case 3:
        return <h2>Form Confirm details</h2>;

      case 4:
        return <h2>Form Success</h2>;
    }
    return <div></div>;
  }
}

export default UserForm;
