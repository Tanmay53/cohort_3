import React from "react";

function Ui() {
  return (
    <div class="card m-auto py-4 bg-info">
      <img
        src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
        class="card-img-top rounded-circle img-thumbnail w-50 m-auto" alt="image"
      />
      <div class="card-body text-center">
        <h5>Amit Kumar</h5>
        <small>PATNA</small>
        <p class="card-text">User interface designer and <br/>front-end developer.</p>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Message</button>
          <button type="button" class="btn btn-outline-danger">Following</button>
        </div>
        <div class="bg-primary p-2 m-2 text-left">
          <button type="button" class="btn btn-outline-light m-1">UI/UX</button>
          <button type="button" class="btn btn-outline-light m-1">Front End Development</button>
          <button type="button" class="btn btn-outline-light m-1">HTML</button>
          <button type="button" class="btn btn-outline-light m-1">CSS</button>
          <br/>
          <button type="button" class="btn btn-outline-light m-1">JavaSccript</button>
          <button type="button" class="btn btn-outline-light m-1">React</button>
          <button type="button" class="btn btn-outline-light m-1">Node</button>
        </div>
      </div>
    </div>
  );
}
export default Ui;
