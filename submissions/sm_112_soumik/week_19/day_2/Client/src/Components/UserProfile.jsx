import React, { useState } from "react";
import { Avatar } from "antd";
import { FilePond } from "react-filepond";

function UserProfile() {
  const [img, setImg] = useState("");
  console.log(img);
  return (
    <div className="position-absolute text-center w-100">
      <h2>Profile Settings</h2>
      <Avatar size={300} icon="user" />
    </div>
  );
}

export default UserProfile;
