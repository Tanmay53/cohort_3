import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card, Pagination } from "react-bootstrap";
import Filter from "./Filter";
import { fetchCategoryList } from "../../redux/actions/categoryAction";
import { fetchProductList } from "../../redux/actions/productAction";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = props => {
    this.props.getProductList();
    this.props.getCategoryList();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.productList != this.props.productList) {
    }
  };

  render() {
    const { total, productList, categoryList } = this.props;

    return (
      <>
        <Filter list={categoryList} />
        <Row>
          {productList.map((product, index) => (
            <Col key={index} md={3} className="my-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://placeimg.com/640/480/any"
                />
                <Card.Body>
                  <Card.Title>{product.category_name}</Card.Title>
                  <Card.Text>{product.product_name}</Card.Text>
                  <span className="badge badge-dark p-2">
                    Rs. {product.price} /-
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
  total: state.productReducer.total,
  productList: state.productReducer.productList,
  categoryList: state.categoryReducer.categoryList
});
const mapDispatchToProps = dispatch => ({
  getProductList: () => dispatch(fetchProductList()),
  getCategoryList: () => dispatch(fetchCategoryList())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
