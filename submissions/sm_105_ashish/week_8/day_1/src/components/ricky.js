import React from 'react';

class Profile extends React.Component{
    render(){
        return (
            <div>
               <div class="container">
                   <div class="main">
                       <button>PRO</button>
                       <br></br>
                       <img class="logo" src="./pic.jpg"></img>
                       <h1>Ashish kumar</h1>
                       <h2>INDIA</h2>
                       <h3>User Interface designer and <br></br>full-stack developer.</h3>
                       <div class="buttonDiv">
                           <button class="message">Message</button>
                           <button class="following">Following</button>
                       </div>
                       <div>
                           <p class="bottom">SKILLS</p>
                           <div class="skills">
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
               </div>
            </div>
        );
    }
}


export default Profile