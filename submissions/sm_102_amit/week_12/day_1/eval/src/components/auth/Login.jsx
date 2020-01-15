import React from "react";
import { Auth } from "./Auth";
import { Container, Jumbotron, Button } from "react-bootstrap";

const Login = props => {
  return (
    <Container className="my-5 text-center">
      <Jumbotron>
        <h1 className="display-3"> This is the login page </h1>
        <Button
          variant="outline-danger"
          size="lg"
          onClick={() => Auth.authenticate()}
        >
          Sign In
        </Button>
      </Jumbotron>
    </Container>
  );
};

export default Login;
