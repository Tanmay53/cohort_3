import React from "react";

const Decide = props => {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.class}</th>
      <th>{props.section}</th>
      <th>{props.subject}</th>
      <th>
        <button
          className="btn btn-success"
          onClick={() => props.edit(props.id)}
        >
          Edit
        </button>
      </th>
      <th>
        <button
          className="btn btn-success"
          onClick={() => props.delete(props.id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

const Dash = props => {
  return (
    <div className="container text-center">
      <select onClick={props.filterSubject} className="btn btn-success m-2">
        <option value="colc">Flter Subject</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Biology">Biology</option>
        <option value="P.Ed">P.Ed</option>
      </select>
      <div className="col">
        <table className="table border mt-4">
          <thead>
            <tr>
              <th>Assigned Faculty</th>
              <th>Allotted Class</th>
              <th>Section</th>
              <th>Allotted Subject</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(element => (
              <Decide
                key={element.id}
                id={element.id}
                name={element.name}
                class={element.class}
                section={element.section}
                subject={element.subject}
                edit={props.handleEdit}
                delete={props.handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dash;
