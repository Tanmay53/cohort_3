import React, { Component } from "react";
import { Jumbotron, Form, Col, Button } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      quantity: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await Axios.post(
        `http://127.0.0.1:5000/edit/${this.props.match.params.id}`,
        {
          ...this.state
        }
      );
      swal({
        title: "Done!",
        text: res.data.message,
        icon: "success",
        timer: 2000,
        button: false
      }).then(() => {
        this.props.update();
        this.props.history.push("/");
      });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount = () => {
    const {
      items,
      match: { params }
    } = this.props;
    items.map((item, i) => {
      if (i + 1 === parseInt(params.id)) {
        return this.setState({
          item: item.item,
          quantity: item.quantity
        });
      }
    });
  };

  render() {
    return (
      <Jumbotron>
        <h1>Edit Item</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Row>
            <Col>
              <Form.Control
                name="item"
                size="lg"
                placeholder="Item Name"
                value={this.state.item}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col>
              <Form.Control
                name="quantity"
                size="lg"
                placeholder="Qunatity"
                value={this.state.quantity}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col>
              <Button type="submit" variant="success" size="lg" block>
                Edit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Jumbotron>
    );
  }
}

export default Edit;
