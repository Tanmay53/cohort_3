import React from "react";

// simple method
// function List() {
//   return <h1>Hello, World!</h1>;
// }

// ES 6 method
function List() {
  return (
    <div class="bg-secondary p-2">
      <h1 class="h6">Mobile Operating System</h1>
      <ol class="list-unstyled">
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Window Phone</li>
      </ol>
      <br />
      <h1 class="h6">Mobile Manufacturers</h1>
      <ol class="list-unstyled">
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ol>
    </div>
  );
}

export default List;
