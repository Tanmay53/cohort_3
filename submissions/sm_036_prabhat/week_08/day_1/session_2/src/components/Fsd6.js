import React from "react";
import ReactDOM from "react-dom";

const Fsd6 = () => {
    const obj = {
        name: "Ricky Park",
        location: "NEW YORK",
        discription: "User interface designed and front end developer",
        skill: ["UI/UX", "Front End Developer", "HTML", "CSS", "JavaScript", "React", "Node"],
    }
    return (
        <div className="card">
            <div className="flex">
                <div className="pill">PRO</div>
                <div>
                    <img className="image " src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
            <div className="text">
                <h3>{obj.name}</h3>
                <div>{obj.location}</div>
                <div className="widthFix">{obj.discription}</div>
                <div className="flexButton">
                    <button className="btn11">Message</button>
                    <button className="btn22">Following</button>
                </div>
                <div className="contentBox">
                    <div className="contentBoxRow">
                        <button>Skill</button>
                    </div>
                    <div className="contentBoxRow">
                        {obj.skill.map((ele) => <button>{ele}</button>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fsd6;