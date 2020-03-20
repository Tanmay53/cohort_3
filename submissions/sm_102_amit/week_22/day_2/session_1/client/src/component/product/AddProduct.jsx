import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Jumbotron, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import { addNewProduct } from "../../redux/actions/productAction";
import { fetchCategoryList } from "../../redux/actions/categoryAction";

const AddProduct = props => {
  const [state, setstate] = useState({
    category: "",
    name: "",
    price: ""
  });

  useEffect(() => {
    const { error, message, getAllCategory } = props;
    getAllCategory();
    if (message) {
      if (error) {
        swal({
          title: "Failure",
          text: message,
          icon: "warning",
          timer: 2000,
          button: false
        });
      } else {
        swal({
          title: "Success",
          text: message,
          icon: "success",
          timer: 2000,
          button: false
        }).then(() => {
          alert("to redirect");
        });
      }
    }
  }, [props.message]);

  const handleChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      category: state.category,
      name: state.name,
      price: state.price
    };
    props.addProduct(data);
  };

  const { categoryList } = props;
  return (
    <Jumbotron>
      <h1>Add Product</h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group>
          <Form.Label>Select Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            size="lg"
            onChange={e => handleChange(e)}
          >
            <option key="0" value="" defaultValue>
              === Select Category ===
            </option>
            {categoryList.map(item => (
              <option key={item._id} value={item._id}>
                {item.category_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            size="lg"
            placeholder="Enter product name ..."
            onChange={e => handleChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            size="lg"
            placeholder="Enter product price ..."
            onChange={e => handleChange(e)}
          />
        </Form.Group>

        <hr />
        <Form.Group>
          <Button
            type="submit"
            variant="outline-dark"
            size="lg"
            className="float-right"
          >
            Add
          </Button>
        </Form.Group>
      </Form>
    </Jumbotron>
  );
};

const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  message: state.productReducer.message,
  categoryList: state.categoryReducer.categoryList
});
const mapDispatchToProps = dispatch => ({
  getAllCategory: () => dispatch(fetchCategoryList()),
  addProduct: data => dispatch(addNewProduct(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
