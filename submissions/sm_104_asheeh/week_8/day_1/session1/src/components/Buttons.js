import React, { Component } from 'react'
import "./Buttons.css"

let Button1 = () => {
    return (
        <div>
            <span className="badge badge-pill btnJoin">JOIN US</span>
        </div>
    );
};

let Button2 = () => {
    return (
        <div>
            <span className="badge badge-pill badge-info">SETTINGS</span>
        </div>
    );
};

let Button3 = () => {
    return (
        <div>
            <span className="badge badge-pill badge-warning">LOGIN</span>
        </div>
    );
};

let Button4 = () => {
    return (
        <div>
            <span className="badge badge-pill badge-danger">CONTACT US</span>
        </div>
    );
};

let Button5 = () => {
    return (
        <div>
            <span className="badge badge-pill badge-success">SEARCH</span>
        </div>
    );
};

let Button6 = () => {
    return (
        <div>
            <span className="badge badge-pill btnHelp">HELP</span>
        </div>
    );
};

let Button7 = () => {
    return (
        <div>
            <span className="badge badge-pill btnHome">HOME</span>
        </div>
    );
};

let Button8 = () => {
    return (
        <div>
            <span className="badge badge-pill btnDownload">DOWNLOAD</span>
        </div>
    );
};

let Buttons = () => {
    return (
        <div className = "cont">
          <div className = "column">
              <Button1 />
              <Button3 />
              <Button5 />
              <Button7 />
          </div>  
          
          <div className = "column">
            <Button2 />
            <Button4 />
            <Button6 />
            <Button8 />
          </div>
        </div>
    )
}

export default Buttons
