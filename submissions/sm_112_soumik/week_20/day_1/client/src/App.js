import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [level, setLevel] = useState("/1");
  const [loadind, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [folders, setFolders] = useState([]);
  const [stack, setStack] = useState(["/1"]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post("http://127.0.0.1:5000/get_folder", {
          path_level: level
        })
        .then(res => setFolders(res.data));
    };
    fetchData();
  }, [count]);
  const createFolder = async () => {
    await axios
      .post("http://127.0.0.1:5000/add_folder", {
        path: level,
        folder_name: name
      })
      .then(res => console.log(res));
    setCount(count + 1);
  };

  // const

  const openFolder = async obj => {
    await axios
      .post("http://127.0.0.1:5000/get_folder", {
        path_level: level + "/" + obj.toString()
      })
      .then(res => setFolders(res.data));
    setLevel(level + "/" + obj.toString());
    setCount(count + 1);
    let temp = stack;
    temp.push("/" + obj.toString());
    setStack(temp);
  };
  const backHandler = async () => {
    let temp = stack;
    console.log(temp[temp.length - 1]);
    if (temp.length > 1) {
      temp.pop();
      setStack(temp);
      await setLevel("%" + temp[temp.length - 1]);
      setCount(count + 10);
    } else {
      alert("ca't go back");
    }
  };
  return (
    <div>
      <div className="col-md-4 row">
        <input
          placeholder="create new folder"
          onChange={e => setName(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-danger" onClick={createFolder}>
          Create Folder
        </button>
      </div>
      <hr />
      <i onClick={backHandler} className="fas fa-backward fa-3x">
        Go Back
      </i>
      <hr />
      <div className="row m-auto">
        {loadind ? (
          <span>loadind...</span>
        ) : (
          folders.map(ele => (
            <div key={ele.id} className="col-md-2 m-auto">
              <i
                onClick={() => openFolder(ele.id)}
                className="fas fa-3x  fa-folder-open"
              >
                {ele.name}
              </i>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
