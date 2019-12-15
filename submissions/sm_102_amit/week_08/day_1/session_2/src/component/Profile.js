import React from "react";

const Profile = ({ data }) => (
  <div className="card m-auto pt-3 bg-info">
    <img
      src={data.image}
      className="card-img-top rounded-circle img-thumbnail w-50 m-auto "
      alt="image"
    />
    <div className="card-body text-center">
      <h5> {data.name} </h5>
      <small> {data.location} </small>
      <p className="card-text"> {data.bio}</p>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          {data.buttons[0]}
        </button>
        <button type="button" className="btn btn-outline-danger">
          {data.buttons[1]}
        </button>
      </div>
    </div>
    <div className="card-footer bg-primary text-left">
      <Skill skills={data.skills} />
    </div>
  </div>
);

const Skill = ({ skills }) =>
  skills.map(val => {
    return (
      <button key={val} type="button" className="btn btn-outline-light m-1">
        {val}
      </button>
    );
  });

export default Profile;
