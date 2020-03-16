import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Form, Row, Col, Button } from "react-bootstrap";
import BookList from "./BookList";
import { fetchAllAuthor } from "../../redux/actions/authorAction";
import { fetchAllCategory } from "../../redux/actions/categoryAction";
import { fetchAllBooks } from "../../redux/actions/homeAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.optionRef = React.createRef();
    this.state = {
      type: "",
      options: [],
      books: []
    };
  }
  selectType = e => {
    this.setState({
      type: e.target.value
    });
    if (e.target.value === "author") {
      this.props.getAuthorList();
    } else if (e.target.value === "category") {
      this.props.getCategoryList();
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.authorList !== this.props.authorList) {
      this.setState({
        options: [...this.props.authorList]
      });
    } else if (prevProps.categoryList !== this.props.categoryList) {
      this.setState({
        options: [...this.props.categoryList]
      });
    }
    if (prevProps.bookList !== this.props.bookList) {
      this.setState({
        books: [...this.props.bookList]
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    let data = {
      type: this.state.type,
      id: this.optionRef.current.value
    };
    // console.log(data)
    this.props.fetchBooks(data);
  };

  render() {
    return (
      <Container>
        <Jumbotron className="my-5">
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Row>
              <Col>
                <Form.Control
                  as="select"
                  name="type"
                  size="lg"
                  onChange={e => this.selectType(e)}
                >
                  <option defaultValue="">Choose search type...</option>
                  <option value="author">Author</option>
                  <option value="category">Category</option>
                  {/* <option value="publisher">Publisher</option> */}
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  name="type"
                  size="lg"
                  placeholder="First name"
                  ref={this.optionRef}
                >
                  <option defaultValue="">Choose...</option>
                  {this.state.options.map(option => (
                    <option key={option._id} value={option._id}>
                      {option.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col>
                <Button type="submit" variant="outline-dark" size="lg" block>
                  SEARCH ...
                </Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
        <BookList bookList={this.state.books} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  bookList: state.homeReducer.allBookList,
  authorList: state.authorReducer.allAuthorList,
  categoryList: state.categoryReducer.allCategoryList
});
const mapDispatchToProps = dispatch => ({
  getAuthorList: () => dispatch(fetchAllAuthor()),
  getCategoryList: () => dispatch(fetchAllCategory()),
  fetchBooks: data => dispatch(fetchAllBooks(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
