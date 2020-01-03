import React from 'react'
import './Card.css'
class Card extends React.Component {
    render() {
        return (
            <div className="mainBody">
                <div className="upperCard">
                    <div>
                        <div className="proTag">PRO</div>
                        <img className="laundiPic" src="https://randomuser.me/api/portraits/women/79.jpg" alt="laundiKaPic" />
                    </div>
                    <div>
                        <div><h3>Ricky Park</h3></div>
                        <div><h5>NEW YORK</h5></div>
                    </div>
                    <div className = "about">
                        <p>User Interface designer and front-end developer</p>
                    </div>
                    <div>
                        <button className="cardBtn msgBtn">Message</button>
                        <button className="cardBtn followBtn">Following</button>
                    </div>
                </div>

                <div className="footer">
                    <div className="footerHeading">SKILLS</div>
                    <div className="skills">
                        <div>UI/UX</div>
                        <div>Front End Development</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Node</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card