import React from 'react';
import './Card.css'


class Card extends React.Component {
    render() {
        return (

            <div className="App container background ">

                <div className="row justify-content-center">
                    <div className="col-6 card-background">
                        <div className="row m-5">
                            <div className="col-4">
                                <button className="btn-warning">Pro</button>
                            </div>
                            <div className="col-4">
                                <img src="https://via.placeholder.com/150" className="rounded-circle" alt="placeholder-image" />
                            </div>
                            <div className="col-4"></div>


                        </div>

                        <div className="text-center mt-3 text-white">
                            <h5 className="card-title">Ricky Park</h5>
                            <h6 className="card-text">New York</h6>
                            <div className="m-1">
                                <p className="m-1">User Inderface Design and</p>
                                <p className="m-0">front-end-developer</p>
                            </div>
                            <div className="m-1">
                                <a href="#" class="btn btn-primary m-1">Message</a>
                                <a href="#" class="btn btn-outline-light m-1">Following</a>
                            </div>
                        </div>

                        <div className="skill text-left text-white mb-3">

                            <h6 >SKILLS</h6>
                            <div className="mb-3">

                                <a href="#" class="border btn-outline-light m-2 p-1 ">UI/UX</a>
                                <a href="#" class="border btn-outline-light m-2 p-1 ">Front End Development</a>
                                <a href="#" class="border btn-outline-light m-2 p-1 ">HTML</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" class="border btn-outline-light m-2 p-1 ">CSS</a>
                                <a href="#" class="border btn-outline-light m-2 p-1 ">JavaScript</a>
                                <a href="#" class="border btn-outline-light m-2 p-1 ">React</a>
                                <a href="#" class="border btn-outline-light m-2 p-1 ">Node</a>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default Card;