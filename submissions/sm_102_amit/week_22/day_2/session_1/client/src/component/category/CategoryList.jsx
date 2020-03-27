import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchCategoryList } from "../../redux/actions/categoryAction";

const CategoryList = props => {
  useEffect(() => {
    props.getCategoryList();
    return () => {};
  }, []);
  const { categoryList } = props;
  return (
    <>
      <h1>Category List</h1>
      <Table striped bordered hover size="lf">
        <thead>
          <tr>
            <th width="20%">#</th>
            <th>CATEGORY NAME</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{item.category_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const matchStateToProps = state => ({
  categoryList: state.categoryReducer.categoryList
});
const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(fetchCategoryList())
});

export default connect(matchStateToProps, mapDispatchToProps)(CategoryList);
