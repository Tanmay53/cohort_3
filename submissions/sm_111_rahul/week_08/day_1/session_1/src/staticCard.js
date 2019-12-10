import React from 'react';

class StaticCard extends React.Component{
    render(){
        return(
        <div>
            <div id="wrapper">
                <div id="card">
                    <button id="pro">PRO</button>
                    <span>
                        <img src="/girl.jpg" height="200px" width="200px">

                        </img>
                    </span>
                    <h1 id="ricky">Ricky Park</h1>
                    <h3>NEW YORK</h3>
                    <p>
                        User interface designer and<br/> 
                        front-end developer
                    </p>
                    <div>
                        <span id="btn1">Message</span>
                        <span id="btn2">Following</span>
                    </div>
                    <div id="footer">
                        
                            <h3>SKILLS</h3>
                            
                            <span>UI/UX</span>
                            <span>Front End Development</span>
                            <span>HTML</span>
                            <span>CSS</span>
                    
                        
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node</span>
                                          
                    </div>
                </div>
            </div>
        </div>
        ); 
    }
}

export default StaticCard