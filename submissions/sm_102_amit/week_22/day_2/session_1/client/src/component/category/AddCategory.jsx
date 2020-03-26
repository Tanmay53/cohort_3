import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Jumbotron, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import { addNewCategory } from "../../redux/actions/categoryAction";

const AddCategory = props => {
  const [state, setstate] = useState({
    name: ""
  });

  useEffect(() => {
    const { error, message } = props;
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
    props.addCategory(data);
  };

  return (
    <Jumbotron>
      <h1>Add Category</h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group controlId="title">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            size="lg"
            placeholder="Enter product name ..."
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
  isLoading: state.categoryReducer.isLoading,
  error: state.categoryReducer.error,
  message: state.categoryReducer.message
});
const mapDispatchToProps = dispatch => ({
  addCategory: data => dispatch(addNewCategory(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
