import React from "react";

function Folder({ folders }) {
  return (
    <div>
      {folders.map(ele => (
        <div>
          {ele.name}
          <button>Open Folder</button>
        </div>
      ))}
    </div>
  );
}

export default Folder;
