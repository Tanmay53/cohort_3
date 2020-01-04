import React from "react";
import { Link} from "react-router-dom";
const Men=(props)=> {
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

export default Men