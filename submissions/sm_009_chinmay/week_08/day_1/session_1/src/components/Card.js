import React from 'react';

const Card = () => {
    return (
        <div className="container m-4 text-center p-3 mainDiv">
            <div className="card col-lg-4 offset-lg-4 p-4 cardDiv">
                {/* User Avatar */}
                <div>
                    <span class="badge badge-warning align-top p-2 ">PRO</span>
                    <img src='https://randomuser.me/api/portraits/women/79.jpg' className="card-img-top border rounded-circle p-1 w-50 text-center" alt="User Avatar"/>
                </div>
                {/* Card details */}
                <div className="card-body text-white p-1 ml-4 mr-4">
                    <h5 className="card-title">Ricky Park</h5>
                    <p className="card-text">New York</p>
                    <p className="card-text">User interface designer and front-end developer</p>
                    <div className="row">
                        <button className="btn btn-primary col-5 m-1 ml-3">Message</button> 
                        <button className="btn col-5 m-1 text-white border-primary">Following</button>
                    </div>
                    {/* Skills */}
                    <p className="card-text text-left"><small>SKILLS</small></p>
                    <div className="row">
                        <button className="btn border-dark mx-1 my-1 text-white"><small>UI / UX</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>Front End Development</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>HTML</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>CSS</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>Javascript</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>React</small></button>
                        <button className="btn border-dark mx-1 my-1 text-white"><small>Node</small></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;