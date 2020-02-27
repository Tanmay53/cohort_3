import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addBlog, getBlogById } from "../../redux/actions/blogAction";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Media,
  Form,
  Button
} from "react-bootstrap";
import Loader from "../Common/Loader";

const Blog = props => {
  const [state, setstate] = useState({
    category_id: "",
    title: "",
    blog: "",
    image: ""
  });

  const handleChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      category_id: state.category_id,
      title: state.title,
      blog: state.blog,
      image: state.image,
      user_id: 1
    };
    props.addNewBlog(data);
  };

  useEffect(() => {
    const {
      match: { params }
    } = props;
    props.getBlog(params.id);
  }, []);

  const { isLoading, blogContent } = props;

  return isLoading ? (
    <Loader />
  ) : (
    <Container className="section-padding">
      <Row>
        <Col lg={9}>
          <h3 className="h1 fw-500 text-secondary">{blogContent.blog_title}</h3>
          <p className="lead">by {blogContent.username}</p>
          <hr />
          <p>Posted on {blogContent.published_on}</p>
          <hr />
          <Image
            className="img-fluid rounded"
            src={blogContent.image}
            alt="blog-image"
          />
          <hr />

          <p className="lead">{blogContent.blog}</p>

          <hr />

          <Card className="my-3">
            <h5 className="card-header">Leave a Comment:</h5>
            <Card.Body>
              <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    size="lg"
                    rows="4"
                    placeholder="Add your comment here !!!"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-dark"
                  size="xs"
                  className="float-right"
                >
                  Add Comment
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Media>
            <Image
              className="d-flex mr-3 rounded-circle"
              src="http://placehold.it/50x50"
              alt="avatar"
            />
            <Media.Body>
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  isLoading: state.blogReducer.isLoading,
  error: state.blogReducer.error,
  response: state.blogReducer.response,
  blogContent: state.blogReducer.blog
});
const mapDispatchToProps = dispatch => ({
  getBlog: id => dispatch(getBlogById(id)),
  addNewBlog: data => dispatch(addBlog(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
