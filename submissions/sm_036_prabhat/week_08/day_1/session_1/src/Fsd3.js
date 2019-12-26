import React from "react";
import ReactDOM from "react-dom";

function Fsd3 (){
    return(
        <div>
            <div className="card">
                <div className="flex">
                    <div className="pill">PRO</div>
                    <div>
                        <img className="image " src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
                <div className="text">
                    <h3>Ricky Park</h3>
                    <div>NEW YORK</div>
                    <div>User interface designed and</div>
                    <div>front end developer</div>
                    <div className="flexButton">
                        <button className="btn11">Message</button>
                        <button className="btn22">Following</button>
                    </div>
                    <div className="contentBox">
                        <div className="contentBoxRow">
                            <button>Skill</button>
                        </div>
                        <div className="contentBoxRow">
                            <button>UI/UX</button>
                            <button>Front End Developer</button>
                            <button>HTML</button>
                        </div>

                        <div className="contentBoxRow">
                            <button>CSS</button>
                            <button>JavaScript</button>
                            <button>React</button>
                            <button>Node</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Fsd3;