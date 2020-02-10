import React, { Component } from "react";
import { Button, Container, TextField } from "@material-ui/core";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: " "
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
    //   console.log(this.state.itemName)
  };
  render() {
    return (
      <Container>
        Enter the todo item
        <TextField
          className="ml-2 mr-5"
          type="text" value={this.state.itemName} onChange={this.handleChange}
           id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
       
        <Button
          onClick={() => this.props.add(this.state.itemName)}
          variant="contained"
          color="primary"
        >
          ADD THIS ITEM
        </Button>
      </Container>
    );
  }
}
