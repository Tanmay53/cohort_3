import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, ButtonGroup, Button } from "react-bootstrap";

const Dashboard = props => {
  return (
    <React.Fragment>
      <Jumbotron>
        <h1>Hello, Admin!</h1>
        <p>
          Please click on any button to add new customers or to view all
          customers.
        </p>
        <ButtonGroup aria-label="Basic example">
          <Link to="add-customer" className="btn btn-outline-success btn-lg">
            ADD NEW CUSTOMER
          </Link>
          <Button variant="outline-dark" size="lg">
            VIEW ALL CUSTOMERS
          </Button>
        </ButtonGroup>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Dashboard;
