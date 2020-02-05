import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div>
            <div className="container mt-2 container1 text-center d-flex justify-content-center">
                <div class="card bg-primary mt-2">
                <p className = "protag d-flex align-self-start">PRO</p>
                    <div className="d-flex justify-content-center">
                    
                        <img src="div.jpg"></img>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Divyansh Srivastva</h3>
                        <h5>BANGALORE</h5>

                        <p class="card-text">User Interface designer and front-end developer</p>
                        <a href="#" class="btn btn-success">Message</a>
                        <a href="#" className="btn border mx-2">Following</a>
                        <div className="desc mt-2">
                        <p className="bold">SKILLS</p>
                        <div className="flex-desc Skills">
                            <p>UI/UX</p>
                            <p>Front End Development</p>
                            <p>HTML</p>
                        </div>
                        <div className="flex-desc Skills">
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Node</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;







