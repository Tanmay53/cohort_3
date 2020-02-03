import React, { Component } from "react";
import { Jumbotron, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

class Purchase extends Component {
  buyItem = async e => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://127.0.0.1:5000/purchased", {
        item_id: this.props.match.params.id
      });
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

  render() {
    const {
      items,
      match: { params }
    } = this.props;
    const data = items.map((item, i) => {
      if (i + 1 === parseInt(params.id)) {
        return `Do you wanna buy [${item.item}, ${item.quantity}] ?`;
      }
    });
    return (
      <Jumbotron>
        <Row>
          <Col md={10}>
            <h4>{data}</h4>
          </Col>
          <Col md={2}>
            <Button
              onClick={e => this.buyItem(e)}
              variant="primary"
              size="sm"
              block
            >
              Buy
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Purchase;
