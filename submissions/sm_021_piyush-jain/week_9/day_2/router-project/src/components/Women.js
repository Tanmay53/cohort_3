import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
const Women=(props)=> {
    console.log(props)
        return (
            <React.Fragment>
                {props.prod.map(Element => {
                    return (
                        <div key={Element.id}>
                            <p>Name:{Element.name}</p>
                            <Link to={`${props.match.url}/${Element.id}`}>Name:{Element.name}</Link>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

export default Women