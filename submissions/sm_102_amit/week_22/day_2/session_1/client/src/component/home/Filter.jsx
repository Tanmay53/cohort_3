import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, ButtonGroup, Button } from "react-bootstrap";
import { filterProduct, sortProduct } from "../../redux/actions/productAction";

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  handleFilter = e => {
    this.props.filterProduct(e.target.value);
  };

  handleSort = e => {
    this.props.sortProduct(e.target.value);
  };

  render() {
    const { list } = this.props;
    return (
      <Row>
        <Col md={4}>
          <Form.Group controlId="category">
            <Form.Control
              as="select"
              name="category"
              size="lg"
              onChange={e => this.handleFilter(e)}
            >
              <option key="0" value="" defaultValue>
                === Select Category ===
              </option>
              {list.map(item => (
                <option key={item._id} value={item._id}>
                  {item.category_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={{ span: 6, offset: 2 }}>
          <ButtonGroup className="float-right">
            <Button
              variant="secondary"
              size="lg"
              value="asc"
              onClick={e => this.handleSort(e)}
            >
              SORT BY PRICE [ASC]
            </Button>
            <Button
              variant="secondary"
              size="lg"
              value="dsc"
              onClick={e => this.handleSort(e)}
            >
              SORT BY PRICE [DSC]
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProduct: data => dispatch(filterProduct(data)),
    sortProduct: data => dispatch(sortProduct(data))
  };
};
export default connect(null, mapDispatchToProps)(Filter);
