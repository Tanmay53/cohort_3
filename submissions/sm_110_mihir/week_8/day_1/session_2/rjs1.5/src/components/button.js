import React from "react";
function Button(props) {
    // const other = ["btn", "btn-block", "mt-2"];
    const btn = "btn btn-block mt-2 ".concat(props.color);
    return (
        <div>
            <button className={btn}>{props.label}</button>
        </div>
    );
}

export default Button;
