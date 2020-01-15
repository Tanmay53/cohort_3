import React, { Component } from 'react'
import "./Card.css"

let Card = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    
                    {/* row1 contains image and a hyperlink */}
                    
                    <div className="row m-2 pt-5">
                        <div className="col-2 text-center">
                            <a href="#" class="badge badge-warning anchorTag">PRO</a>
                        </div>
                        <div id="imgDiv" className="col-6 text-center">
                            <div id="imgDiv2" >
                            <img id="imgGirl" src = "/girl.jpeg" height="150px" width="150px"  />
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>

                    {/* row2 consists of text */}

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6 text-center text-white">
                        <h3>Ricky Park</h3>
                        <h4>New York</h4>
                        <h5>User interface designer and<br /> front-end developer</h5>
                        </div>
                        <div className="col-2"></div>
                    </div>

                    {/* row3 consists of buttons */}

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6 text-center">
                           <button type="button" class="btn btnMsg p-2">Message</button>
                           <button type="button" class="btn btnFollow p-2 ml-1">Following</button>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    
                    {/* row4 consists of list of skills attribute */}
                    
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6 text-white">
                            <div class="skills">
                                <h5>SKILLS</h5>
                                <ul className="text-center">
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li><br />
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">1</div>
                </div>
            </div>
        </div>
    );
};

export default Card
