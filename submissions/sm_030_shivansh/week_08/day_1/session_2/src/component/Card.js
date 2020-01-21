import React, { createElement } from 'react';
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.name = this.props.data.name;
        this.city = this.props.data.city;
        this.about = this.props.data.about;
        this.btn_label = this.props.data.btn_label;
        this.skill = this.props.data.skill;
        // console.log(name);
        // console.log(about);
        // console.log(btn_label);
        // console.log(skill);
    }

    render() {
        return (
            <div>
                <div className="container background ">

                    <div className="row justify-content-center ">
                        <div className="col-6 card-background">
                            <div className="row m-5">
                                <div className="col-4">
                                    <button className="btn-warning text-right">Pro</button>

                                </div>
                                <div className="col-4">

                                    <img src="https://via.placeholder.com/150" className="rounded-circle" alt="placeholder-image" />
                                </div>
                                <div className="col-4"></div>


                            </div>

                            <div className="text-center mt-3 text-white">
                                <h5 className="card-title">{this.name}</h5>
                                <h6 className="card-text">{this.city}</h6>
                                <div className="m-1">
                                    <p className="m-1">{this.about}</p>
                                </div>

                                <div className="m-1">
                                    <a href="#" class="btn btn-primary m-1">{this.btn_label[0]}</a>
                                    <a href="#" class="btn btn-outline-light m-1">{this.btn_label[1]}</a>
                                </div>
                            </div>

                            <div className="skill text-left text-white my-3 skill-background ">

                                <h6>SKILLS</h6>
                                <div className="mb-3 ">
                                    {this.skill.map((ele) => {
                                        return (

                                            <a href="#" class="border btn-outline-light m-1 p-1 d-inline-block">{ele}</a>


                                        )

                                    })}


                                </div>
                                {/* <div className="mb-3">

                                    <a href="#" class="border btn-outline-light m-2 p-1 ">UI/UX</a>
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">Front End Development</a>
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">HTML</a>
                                </div>
                                <div className="mb-3">
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">CSS</a>
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">JavaScript</a>
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">React</a>
                                    <a href="#" class="border btn-outline-light m-2 p-1 ">Node</a>
                                </div> */}

                            </div>
                        </div>
                    </div>




                </div>
            </div>
        )
    }

}


export default Card; 