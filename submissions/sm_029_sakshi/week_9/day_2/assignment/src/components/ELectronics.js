import React, { Component } from "react";
import Product from "./Product";

export default class ELectronics extends Component {
  render() {
    return (
      <div>
        THIS IS ELECTRONIC PAGE
        <div>
          <Product
            img="https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price="500.00"
          />

          <Product
            img="https://images.unsplash.com/photo-1551817958-20204d6ab212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price="500.00"
          />

          <Product
            img="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price="500.00"
          />

          <Product
            img="https://images.unsplash.com/photo-1500370564600-3d53413ff1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price="500.00"
          />
        </div>
      </div>
    );
  }
}
