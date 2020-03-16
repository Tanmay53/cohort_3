import React, { useEffect, useState } from "react";
import axios from "axios";
import Folder from "./components/folder/Folder";
import { Button, message, Input } from "antd";
import Axios from "axios";

export default function Home() {
  const [file, setFile] = useState({
    currentPath: "",
    currentDir: "",
    levels: [],
    backLevels: [],
    mainData: [],
    isAdded: false
  });

  useEffect(() => {
    fetchRoot();
  }, []);

  const fetchRoot = async () => {
    let response = await axios.get("http://localhost:5000/");
    let all = await axios.get("http://localhost:5000/all");
    console.log(all);

    setFile({
      ...file,
      levels: response.data.data,
      currentPath: response.data.data[0].path,
      mainData: all.data.data || []
    });
  };

  const showBreadCrumps = () => {
    console.log("Bread Crumps");
    let currentPath = file.currentPath;
    if (currentPath == null) {
      console.log("Root");
    } else {
      currentPath.replace("/", "");
      console.log(currentPath + "s");
    }
  };

  const changeFolder = (data, id) => {
    console.log(data);
    let path = "";

    if (data.length === 0) {
      message.success("No Folder");
      path = file.currentPath + id + "/";
    } else {
      path = data[0].path || "";
    }

    setFile({
      ...file,
      backLevels: file.levels,
      levels: data,
      currentPath: path
    });
  };

  const backFolder = async () => {
    if (file.currentPath != null) {
      let currentPath = file.currentPath;
      currentPath = currentPath.split("");
      currentPath.pop();
      for (let i = currentPath.length - 1; i > 0; i--) {
        if (currentPath[i] != "/") {
          currentPath.pop();
        } else {
          break;
        }
      }
      currentPath = currentPath.join("");
      if (currentPath.length == 1) {
        fetchRoot();
      } else {
        let response = await Axios({
          url: "http://localhost:5000/current",
          method: "POST",
          data: {
            path: currentPath
          },
          headers: {
            "Content-Type": "application/json"
          }
        });
        setFile({
          ...file,
          levels: response.data.data,
          currentPath: response.data.data[0].path
        });
      }
    } else {
      message.success("You are in root Folder");
    }
  };

  const addFolder = async () => {
    let value = document.getElementById("add").value;
    console.log(file.currentPath);
    console.log(value);
    let response = await Axios({
      url: "http://localhost:5000/create",
      method: "POST",
      data: {
        path: file.currentPath,
        name: value
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    let nextData = await Axios({
      url: "http://localhost:5000/current",
      method: "POST",
      data: {
        path: file.currentPath
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    message.success("Folder Added Succesfully");
    setFile({
      ...file,
      levels: nextData.data.data
    });

    document.getElementById("add").value = "";
  };

  return (
    <div>
      <p>This is your personal Simulation File Structure</p>
      <Button type="primary" onClick={backFolder}>
        Back to Previous
      </Button>
      <div style={{ display: "flex", width: "40%", margin: "1rem auto" }}>
        <Input type="text" placeholder="Input Folder Name" id="add"></Input>
        <Button type="primary" onClick={addFolder}>
          Add Folder
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-around",
          margin: "auto"
        }}
      >
        {file.levels.length > 0 ? (
          file.levels.map(val => (
            <Folder
              key={val._id}
              id={val._id}
              name={val.name}
              path={val.path}
              change={changeFolder}
            ></Folder>
          ))
        ) : (
          <p>No Folder..</p>
        )}
      </div>
    </div>
  );
}
