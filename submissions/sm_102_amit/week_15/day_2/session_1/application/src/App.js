import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import AppRoute from "./AppRoute";
import Menubar from "./component/Menubar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // axios
  getList = async () => {
    try {
      const res = await Axios.get("http://127.0.0.1:5000/listing");
      this.setState({
        items: res.data.items
      });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount = () => {
    this.getList();
  };

  render() {
    return (
      <>
        <Menubar />
        <Container className="my-5">
          <AppRoute items={this.state.items} update={this.getList} />
        </Container>
      </>
    );
  }
}

export default App;
