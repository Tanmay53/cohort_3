import React from "react";
import { Table } from "react-bootstrap";

const BookList = props => {
  const { bookList } = props;
  const data = bookList.length ? (
    bookList.map((book, index) => (
      <tr key={book._id}>
        <td className="font-weight-bold">{index + 1}. </td>
        <td>{book.book_name}</td>
        <td>{book.code}</td>
        <td>{book.price}</td>
        <td>{book.author_name}</td>
        <td>{book.publisher_name}</td>
        <td>{book.published_year}</td>
        <td>{book.category_name}</td>
      </tr>
    ))
  ) : (
    <tr className="text-center font-weight-bold">
      <td colSpan={8}>NO BOOKS AVAILABLE</td>
    </tr>
  );
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>ISBN Code</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publisher Name</th>
          <th>Published In</th>
          <th style={{ width: "20%" }}>Category</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
};

export default BookList;
