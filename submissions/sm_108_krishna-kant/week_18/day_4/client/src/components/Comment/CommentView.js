import React from "react";
import { Comment } from "antd";
export default function CommentView({ author, avatar, created_at, body }) {
  console.log(avatar);
  return (
    <Comment
      // actions={item.actions}
      author={author}
      avatar={avatar || "https://source.unsplash.com/random"}
      content={body}
      datetime={created_at}
    />
  );
}
