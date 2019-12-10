import React from "react";
import style from "./card.css";

function Card() {
    return (
        <div id="main">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <span class="badge badge-pill badge-success m-3">
                            PRO
                        </span>
                    </div>
                    <div className="col text-center text-info">
                        <img
                            src="profile pic.jpg"
                            class="rounded-circle mt-3"
                        />
                        <h2 className="font-weight-bold m-2">Mihir Kumar</h2>
                        <p className="font-weight-bold ">KOLKATA</p>
                        <p className=" w-75 ml-5">
                            User interface designer and front-end developer
                        </p>
                        <div className="btn-group">
                            <button className="btn btn-info m-2">
                                Message
                            </button>
                            <button className="btn btn-outline-light m-2">
                                Following
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-1" id="skill">
                <div className="row">
                    <h3 className="col-6 text-info p-2 m-2">SKILLS</h3>
                </div>
                <div className="row">
                    <div className="btn-group col-12">
                        <button className="btn btn-outline-light m-2">
                            UI/UX
                        </button>
                        <button className="btn btn-outline-light m-2">
                            Front End Evelopment
                        </button>
                        <button className="btn btn-outline-light m-2">
                            HTML
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group col-12">
                        <button className="btn btn-outline-light m-2">
                            CSS
                        </button>
                        <button className="btn btn-outline-light m-2">
                            JavaScript
                        </button>
                        <button className="btn btn-outline-light m-2">
                            React
                        </button>
                        <button className="btn btn-outline-light m-2">
                            Node
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
