import React from "react"
import Todo from "./Todo";
import Display from "./Display"
import { Container } from "@material-ui/core"


const App = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Todo />
                <Display />
            </Container>
        </>
    )
}

export default App