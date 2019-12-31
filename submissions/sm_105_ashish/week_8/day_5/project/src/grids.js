import React from 'react';

function Manipulategrid (props) {
    return (
        <div className = "col-2 text-secondary">
                        <div className = "text-center">
                            <p className ='para mb-0'>{props.num}</p>
                            <p className = "para2">{props.input}</p>
                        </div>
                    </div>
    )
}
export default Manipulategrid;