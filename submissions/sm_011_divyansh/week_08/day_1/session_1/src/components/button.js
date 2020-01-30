import React from "react";
function Btn() {
    return (
        <div>
            <div className="col-2">
                <button className="btn btn-primary badge-pill px-4">JOIN US</button>
                <button className="btn btn-danger badge-pill px-4 offset-1">SETTINGS</button>
            </div>
            <div className="col-2">
                <button className="btn btn-success  badge-pill px-4 mt-3">LOGIN</button>
                <button className="btn btn-warning  badge-pill px-4 offset-1 mt-3">CONTACT US</button>
            </div>
            <div className="col-2">
                <button className="btn btn-secondary  badge-pill px-4 mt-3">SEARCH</button>
                <button className="btn btn-dark  badge-pill px-4 offset-1 mt-3">HELP</button>
            </div>
            <div className="col-2">
                <button className="btn btn-primary badge-pill px-4 mt-3">HOME</button>
                <button className="btn btn-success badge-pill px-4 offset-1 mt-3">DOWNLOAD</button>
            </div>
        
        </div>);
}
export default Btn;