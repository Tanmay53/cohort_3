import React, { useState } from "react";
import styles from "./Blog.module.css";
import { Card, Typography, Button, Tag, Avatar, Drawer } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

export default function Blog({
  title,
  image,
  url,
  desc,
  tags,
  author_img,
  author,
  showDrawer,
  blog_id,
  author_id
}) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Card hoverable style={{ margin: "1.5rem 0" }}>
        <div className={styles.blog}>
          <div className={styles.banner}>
            <img src={image || "https://source.unsplash.com/random"} />
          </div>
          <div className={styles.content}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%"
              }}
            >
              <Avatar src={author_img}></Avatar>
              <span>{`@${author.split("@")[0]}`}</span>
              {user.email === author ? (
                <Link to="/edit" style={{ color: "blue", marginLeft: "70%" }}>
                  Edit
                </Link>
              ) : null}
            </div>
            <Title level={4}>{title}</Title>
            <p>{desc}</p>
            <Tag>{tags}</Tag>
            {/* <div>
            {tags.map(val => (
              
            ))}
          </div> */}
            <Button
              type="primary"
              icon="align-left"
              className={styles.btn}
              onClick={() => {
                showDrawer(blog_id, author_id);
              }}
            >
              <a href={url} target="_blank">
                Comments
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
