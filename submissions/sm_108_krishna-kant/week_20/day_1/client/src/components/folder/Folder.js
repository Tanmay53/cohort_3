import React from "react";
import Axios from "axios";

export default function Folder({ name, path, id, change }) {
  const openFolder = async () => {
    console.log(path, id);

    let response = await Axios({
      url: "http://localhost:5000/folder",
      method: "POST",
      data: {
        current_id: id,
        prev_path: path || ""
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    change(response.data.data, id);
  };
  return (
    <div onDoubleClick={() => openFolder()} style={{ cursor: "pointer" }}>
      <img
        src="https://opengameart.org/sites/default/files/Flat%20Folder%20icon.png"
        style={{ width: "100px", height: "100px" }}
      />
      <p>{name}</p>
    </div>
  );
}
