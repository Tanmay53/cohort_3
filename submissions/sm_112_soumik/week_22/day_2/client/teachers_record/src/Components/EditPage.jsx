import React from "react";

function EditPage(props) {
  let user_id = props.match.params.id;
  return (
    <div className="text-center">
      <h2>Edit Page</h2>
      <div className="col-md-6 m-auto p-4">
        <input className="form-control" />
        <input className="form-control" />
        <button>Edit Page</button>
      </div>
    </div>
  );
}

export default EditPage;
