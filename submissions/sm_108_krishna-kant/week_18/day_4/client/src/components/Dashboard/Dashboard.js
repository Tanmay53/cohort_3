import React, { useState, useEffect } from "react";
import Axios from "axios";
import Blog from "../Card/Blog";
import { Drawer } from "antd";
import CommentView from "../Comment/CommentView";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [state, setState] = useState({
    visible: false
  });

  const [comments, setComments] = useState({
    data: []
  });

  const showDrawer = blog_id => {
    fetchComment(blog_id);
  };

  const onClose = () => {
    setState({
      visible: false
    });
  };

  const fetchComment = async blog_id => {
    let response = await Axios({
      url: `http://localhost:5000/comment/${blog_id}`,
      method: "GET"
    });
    console.log(response);
    let com = [];
    response.data.comment.length == 0
      ? (com = ["No Comments Found"])
      : (com = response.data.comment);

    setComments({
      data: com
    });
    setState({
      visible: true
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    let response = await Axios({
      url: "http://localhost:5000/blog"
    });
    setBlogs(response.data.blogs);
  };
  return (
    <div>
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          showDrawer={showDrawer}
          title={blog.title}
          desc={blog.body}
          author_img={blog.author.profile_img}
          author={blog.author.email}
          tags={blog.catagory.name}
          author_id={blog.author.id}
          blog_id={blog.id}
        ></Blog>
      ))}
      <Drawer
        title="Comments"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}
        width="500px"
      >
        {comments.data.map(item => (
          <CommentView
            key={item.id}
            author={item.author.name}
            avatar={item.author.profile_img}
            created_at={item.created_at}
            body={item.comment_body}
          ></CommentView>
        ))}
      </Drawer>
    </div>
  );
}
