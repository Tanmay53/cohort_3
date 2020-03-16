import React, { useState, useEffect } from "react";
import { Input, InputNumber, Row, Col, Button } from "antd";
import axios from "axios";
import Publisher from "./Publisher";
import Authors from "./Authors";
import Categories from "./Catagory";
export default function CreateBook() {
  const [publisher, setPublisher] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    ISBN: null,
    version: null,
    publisher: null,
    authors: null,
    catagory: null
  });

  useEffect(() => {
    fetchPublisher();
    fetchCategories();
    fetchAuthors();
  }, []);

  const fetchPublisher = async () => {
    let response = await axios.get("http://localhost:5000/publishers");
    setPublisher(response.data.data);
  };
  const fetchAuthors = async () => {
    let response = await axios.get("http://localhost:5000/authors");
    setAuthor(response.data.data);
  };
  const fetchCategories = async () => {
    let response = await axios.get("http://localhost:5000/categories");
    setCategory(response.data.data);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addBook = async () => {
    formData.authors = formData.authors.map(val => parseInt(val.split(" ")[0]));
    console.log(formData);
    try {
      let response = await axios({
        url: "http://localhost:5000/books",
        data: formData,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log(response);
    } catch (err) {}
  };

  return (
    <Row>
      <Col lg={{ span: 12, offset: 6 }}>
        <h3>Create Book</h3>
        <Input
          style={{ width: "100%", margin: ".5rem" }}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Title"
        ></Input>
        <InputNumber
          style={{ width: "100%", margin: ".5rem" }}
          name="ISBN"
          value={formData.ISBN}
          onChange={value => handleChange({ target: { name: "ISBN", value } })}
          placeholder="Enter ISBN"
        ></InputNumber>
        <InputNumber
          style={{ width: "100%", margin: ".5rem" }}
          name="version"
          value={formData.version}
          onChange={value =>
            handleChange({ target: { name: "version", value } })
          }
          placeholder="Enter Version"
        ></InputNumber>
        <Publisher data={publisher} handleChange={handleChange}></Publisher>
        <Authors data={author} handleChange={handleChange}></Authors>
        <Categories data={category} handleChange={handleChange}></Categories>
        <Button type="primary" onClick={addBook}>
          Add Book
        </Button>
      </Col>
    </Row>
  );
}
