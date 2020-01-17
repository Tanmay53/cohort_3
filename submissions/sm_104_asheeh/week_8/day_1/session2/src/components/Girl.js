import React, { Component } from 'react'
import "./Girl.css"

export default class Girl extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Ricky Park",
            location: "NEW YORK",
            description: "User interface designer and front-end developer",
            skills: ["UI / UX", "Front End Developer", "HTML", "CSS", "JavaScript", "React","Node"]
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="container cont">
                    <div className="box m-auto">
                    <div className="row text-center">
                        <div className="col-2 mt-2">
                        <a href="#" className="badge badge-warning anchorTag text-center">PRO</a>

                        </div>
                        <div className="col-6 ">
                            <div className="imgDiv">   
                                <img id="img" className="img-fluid" src="/girl.jpeg" height="150rem" width="150rem" />
                            </div>
                            <h3 className="text-white">{this.state.name} </h3>
                            <h4 className="text-white">{this.state.location} </h4>
                            <h5 className="text-white">{this.state.description} </h5>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8 d-flex justify-content-center">
                                    <button class="btn btnMessage m-1" type="submit">Message</button>
                                    <button class="btn btnFollow m-1" type="submit">Following</button>
                                </div>
                                <div className="col-2"></div>
                            </div>
                         </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6 ">
                            <h5 className="skills text-white">SKILLS</h5>
                            <ul className="text-white">
                                {this.state.skills.map(ele => {
                                    return (
                                        <li>{ele} </li>
                                    )
                                } )}
                            </ul>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
