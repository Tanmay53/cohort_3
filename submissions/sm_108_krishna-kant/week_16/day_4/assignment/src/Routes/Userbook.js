import React, { useEffect, useState } from "react";
import fetch from "../utils/axios";
import { Table, Typography, Button } from "antd";
import "./routes.css";
import { Link } from "react-router-dom";
const { Title } = Typography;

const columns = [
  {
    title: "User ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile"
  },
  {
    title: "Address",
    key: "address",
    render: record => (
      <Button>
        <Link to={`/user/${record.id}`}>Show Address</Link>
      </Button>
    )
  },
  {
    title: "Edit/Delete",
    key: "edit/data",
    render: record => (
      <div>
        <Button type="primary">
          <Link to={`/change/${record.id}`}>EDIT / DELETE</Link>
        </Button>
      </div>
    )
  }
];

export default function Userbook() {
  const [userData, setUserData] = useState({
    users: []
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let users = {
      ...{ ...{ ...(await fetch("/v1/user/listUser", "GET", {})) }.data }.data
    };
    users = [...{ ...users }.users_list];
    users.forEach((user, index) => {
      user.key = index;
    });
    setUserData({ users: users });
  };

  return (
    <div className="container">
      <Title>Users</Title>
      <Table dataSource={userData.users} columns={columns} />
    </div>
  );
}
