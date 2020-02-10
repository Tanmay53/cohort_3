import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function MyProfile(props) {
    // const {this.state= {
    //     name: "Venkat K",
    //     location: "Bangalore",
    //     description: "User interface designer and fro",
    //     skills: ["UI / UX", "FRONT END DEVELOPMENT", "HTML", "CSS", "JavaScript", "React", "Node"]
    // }
    console.log(props.info.name,"outside")
    const mainCode = 
                    <div className="parentDiv">
                        {/* <div>I am good={props.info.location}</div> */}
                        <div className="cardDiv">
                            <div className="proAndImgFlexDiv">
                                <em id="pro">PRO</em>
                                <div><img src="/me11KB.jpg" alt="Venkat.jpeg"></img></div>
                            </div>
                            <div className="detailsDiv">
                                <h2>{props.info.name}</h2>
                                <strong>{props.info.location}</strong>
                                <p>{props.info.description}</p>
                                <div>
                                    <input type="button" value="Message" id="msgBtn"></input>
                                    <input type="button" value="Following"></input>
                                </div>
                            </div>
                            <div>
                                <div className="skillsWord">SKILLS</div>
                                <div id="skillsDiv">
                                    <div>{props.info.skills[0]}</div>
                                    <div>{props.info.skills[1]}</div>
                                    <div>{props.info.skills[2]}</div>
                                    <div>{props.info.skills[3]}</div>
                                    <div>{props.info.skills[4]}</div>
                                    <div>{props.info.skills[5]}</div>
                                    <div>{props.info.skills[6]}</div>
                                </div>
                            </div>
                        </div>
                    </div>

    return mainCode
}
const info= {
    name: "Venkat K",
    location: "Bangalore",
    description: "User interface designer and front-end developer",
    skills: ["UI / UX", "FRONT END DEVELOPMENT", "HTML", "CSS", "JavaScript", "React", "Node"]
}
ReactDOM.render(<MyProfile info={info}/>, document.getElementById("root"))