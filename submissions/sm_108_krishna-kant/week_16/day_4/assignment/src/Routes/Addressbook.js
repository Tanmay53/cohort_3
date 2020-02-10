import React, { useState, useEffect } from "react";
import fetch from "../utils/axios";
import { PageHeader, Button, Descriptions, Card } from "antd";
export default function Addressbook({ match }) {
  const [userDetails, setDetails] = useState({
    userId: "",
    user_details: {}
  });

  useEffect(() => {
    loadAddress();
  }, []);

  const loadAddress = async () => {
    let userId = match.params.id;
    let user_details = {
      ...{ ...{ ...(await fetch(`v1/user/${userId}`, "GET")) }.data }.data
    }.user;
    setDetails({ userId, user_details });
  };

  const { name, id, email, mobile, address } = userDetails.user_details;
  //   console.log(address);
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        padding: "2rem 4rem",
        height: "89vh"
      }}
    >
      <PageHeader
        ghost={false}
        style={{
          //   minWidth: "90%",
          maxWidth: "800px",
          margin: "auto"
        }}
        hoverable
        title={name}
        subTitle={`@${id}`}
      >
        <Descriptions size="small" column={2}>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Mobile">{mobile}</Descriptions.Item>
        </Descriptions>
        <Descriptions column={2}>
          {address != null
            ? address.map((item, index) => (
                <Card key={item.id} hoverable>
                  <p>Address {index + 1}</p>
                  <Descriptions column={2}>
                    <Descriptions.Item label="Line 1">
                      {item.line_1}
                    </Descriptions.Item>
                    <Descriptions.Item label="Line 2">
                      {item.line_2}
                    </Descriptions.Item>
                    <Descriptions.Item label="City">
                      {item.city}
                    </Descriptions.Item>
                    <Descriptions.Item label="Pincode">
                      {item.pincode}
                    </Descriptions.Item>
                    <Descriptions>
                      <Button style={{ margin: "0px 12px 0px 0px" }}>
                        EDIT
                      </Button>
                      <Button type="danger">DELETE</Button>
                    </Descriptions>
                  </Descriptions>
                </Card>
              ))
            : null}
        </Descriptions>
      </PageHeader>
    </div>
  );
}
