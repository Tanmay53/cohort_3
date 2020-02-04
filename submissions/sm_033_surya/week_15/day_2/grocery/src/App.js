import React from 'react';
import { Link } from "react-router-dom"
import Router from './Router/Router';
import { Container } from "@material-ui/core"

function App() {
  return (
    <>
      <Container maxWidth="sm" align="center" style={{ marginBottom: "30px", border: "2px solid black", padding: "20px" }}>
        <Link to="/">Home</Link>
      </Container >
      <Container maxWidth="md">
        <Router />
      </Container>
    </>
  );
}

export default App;
