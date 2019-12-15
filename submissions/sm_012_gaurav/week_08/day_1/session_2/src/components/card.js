import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div className = "flex-column main">
           <div className = "flex-column content1">
                <p className = "pro">PRO</p>
                <div className = "circle"></div>
                <h3>Ricky Park</h3>
                <p className = "bold">NEW YORK</p>
                <p id = "desc">User interface designer and front-end developer</p>
                <div className = "flex-r">
                    <button className="message">Message</button>
                    <button className="follow">Following</button>
                </div>
            </div>
           <div className = "content2">
               <p className = "bold">SKILLS</p>
               <div className = "flex-r skills">
                    <p>UI / UX</p>
                    <p>Front End Development</p>
                    <p>HTML</p>
               </div>
               <div className = "flex-r skills">
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Node</p>
               </div>
           </div>
        </div>
    );
};

export default Card;