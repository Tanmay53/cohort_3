import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editPost, addComment } from "../Redux/action";

function NewPost(props) {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [catagory, setCatagory] = useState("");
  const [details, setDetails] = useState("");

  let tempTitle = props.match.params.title;
  let user = props.User.find(ele => {
    return ele.title === tempTitle;
  });

  const changeHandler = () => {
    let date = new Date(Date.now());
    let obj = {
      title,
      body,
      catagory,
      details,
      date,
      comments: []
    };
    props.edit(obj);
  };

  useEffect(() => {
    setTitle(user.title);
    setBody(user.body);
    setCatagory(user.catagory);
    setDetails(user.details);
  }, []);

  const commentHandler = e => {
    let obj = {
      title,
      text: comment
    };
    props.comment(obj);
  };

  return (
    <div className="text-center">
      <h2>Topic : {user.title}</h2>
      <div className="col-md-6 m-auto">
        <h2>Your Details</h2>
        <div className="container">
          <input
            muted
            disabled
            className="form-control"
            placeholder="Data"
            value={title}
            // onChange={e => setTitle(e.target.value)}
          />
          <input
            className="form-control"
            placeholder="Data"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <select
            className="form-control"
            onChange={e => {
              setCatagory(e.target.value);
            }}
          >
            <option disabled selected>
              Enter Topic Type
            </option>
            <option>random</option>
            <option>general</option>
            <option>programming</option>
            <option>algorithm</option>
            <option>suggestions</option>
          </select>
          <input
            className="form-control"
            placeholder="Data"
            value={details}
            onChange={e => setDetails(e.target.value)}
          />
          <button onClick={changeHandler}>Change Data</button>
        </div>
        <hr />
        <h2>Comments</h2>
        {user.comments.map(ele => {
          return <li>{ele}</li>;
        })}
        <div className="bg-dark text-light"></div>
        <hr />
        <h2>Add A NEW Comment</h2>
        <div className="md-col-5 m-auto border border-danger rounded p-4">
          <input
            className="form-group"
            placeholder="add a new Comment"
            onChange={e => setComment(e.target.value)}
          />
          <button
            className="btn btn-danger"
            value={comment}
            onClick={commentHandler}
          >
            Add A Comment
          </button>
        </div>
        <Link className="text-dark" to="/showpost">
          Back to Feed
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  User: state.post.posts
});

const mapDispatchToProps = dispatch => ({
  edit: item => dispatch(editPost(item)),
  comment: item => dispatch(addComment(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
