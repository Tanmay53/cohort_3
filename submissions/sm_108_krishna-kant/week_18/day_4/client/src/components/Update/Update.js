import React, { useState, useEffect } from "react";
import { Card, Row, Col, Statistic, Upload, Icon, message } from "antd";
import Axios from "axios";
const { Dragger } = Upload;
export default function Update({ update }) {
  const [user, setUser] = useState({
    user: {}
  });

  useEffect(() => {
    setUser({
      user: JSON.parse(localStorage.getItem("user"))
    });
  }, []);

  const props = {
    name: "picture",
    multiple: false,
    action: `http://localhost:5000/user/update/${
      JSON.parse(localStorage.getItem("user")).email
    }`,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        console.log(info);
        get_user();
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  const get_user = async () => {
    console.log("Uplaoded");
    let response = await Axios({
      url: "http://localhost:5000/auth/getuser",
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log(response);
    if (response.data.error == false) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser({
        user: response.data.user
      });
      update({
        user: response.data.user,
        isAuth: true,
        token: localStorage.getItem("token")
      });
    }
  };

  return (
    <Row>
      <Col lg={{ span: 12, offset: 6 }}>
        <Card>
          <h3>Profile Data</h3>
          <div style={{ display: "flex" }}>
            <div>
              <Statistic title="Name" value={user.user.name} />
              <Statistic title="Email" value={user.user.email} />
              <Statistic title="Gender" value={user.user.gender} />
              <Statistic
                title="Account Created At"
                value={user.user.created_at}
              />
            </div>
            <div>
              <img
                src={
                  user.user.profile_img ||
                  "https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1"
                }
                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              />

              <Dragger {...props} style={{ height: "100px", margin: "1rem 0" }}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
