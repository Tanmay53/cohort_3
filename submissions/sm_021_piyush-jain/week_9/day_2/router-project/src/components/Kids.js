import React from "react";
import { Link} from "react-router-dom";
const Kid=(props)=> {
    console.log(props)
        return (
            <React.Fragment>
                {props.prod.map(Element => {
                    return (
                        <div key={Element.id} class="border border-dark p-5">
                            <p class="ml-5">Name:{Element.name}</p>
                            <img class="image"src="https://placeimg.com/640/480/nature"></img><br></br>
                            <Link to={`${props.match.url}/${Element.id}`} class="text-white bg-dark mt-5 ml-5">Name:{Element.name}</Link>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

export default Kid