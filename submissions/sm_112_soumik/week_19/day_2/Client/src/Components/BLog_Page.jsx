import React, { useEffect, useState } from "react";
import axios from "axios";
import { Collapse } from "antd";

function BLog_Page(props) {
  const { Panel } = Collapse;

  function callback(key) {
    console.log("called");
  }
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [comment, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    setLoading(true);
    setUser(props.location.state.data);
    let b_id = props.match.params.id;
    console.log("b_id is", b_id);
    axios
      .post("http://localhost:5000/comments", {
        b_id
      })
      .then(res => setComments(res.data));
    setLoading(false);
  }, [loading]);

  const clickHandler = () => {
    let b_id = props.match.params.id;
    let data = {
      comment: newComment,
      user_id: user.user_id,
      blog_id: b_id,
      catagory_id: user.catagory_id
    };
    setLoading(true);
    console.log(data);
    axios
      .post("http://localhost:5000/new_comment", data)
      .then(res => setComments(res.data));

    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="position-absolute text-center w-100 p-4">
        <div className="card m-auto col-md-6 rounded p-4">
          <h2 className="text-light bg-dark p-4 rounded">{user.title}</h2>
          <p className="text-light bg-dark p-4 rounded ">{user.content}</p>
          <Collapse defaultActiveKey={user.id}>
            <Panel header="comment box" key={user.id}>
              <div className="row text-center">
                <input
                  className=" m-auto col-md-6 form-control"
                  placeholder="add a new comment"
                  onChange={e => setNewComment(e.target.value)}
                />
                <button
                  className="btn btn-outline-dark m-auto"
                  onClick={clickHandler}
                >
                  Add
                </button>
              </div>
              {comment.map(ele => (
                <div className="m-auto col-md-6">
                  <p>{ele.comment}</p>
                </div>
              ))}
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default BLog_Page;
