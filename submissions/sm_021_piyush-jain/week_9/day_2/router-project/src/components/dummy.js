import React from "react";
import { Link } from "react-router-dom";
import Cart from
const Kid = (props) => {
    return (
        <React.Fragment>
            <Link to={`${props.match.url}/${Element.id}`} class=" ml-5"><h2 class="text-center text-white bg-dark mt-5 m-5" onClick={() => <Cart />}>SHOP SHOP SHOP</h2></Link>
        </React.Fragment>
    )
}

export default Kid