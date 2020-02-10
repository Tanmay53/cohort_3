import React from 'react';
import "./app.css"
class App extends React.Component {
    render() {
        return (
            <div class="parentDiv">
                <div class="cardDiv">
                    <div class="proAndImgFlexDiv">
                        <em id="pro">PRO</em>
                        <div><img src="/me11KB.jpg" alt="Venkat.jpeg"></img></div>
                    </div>
                    <div class="detailsDiv">
                        <h2>Venkat K</h2>
                        <strong>Bangalore</strong>
                        <p>User interface designer and <br></br>
                            front-end developer</p>
                        <div>
                            <input type="button" value="Message" id="msgBtn"></input>
                            <input type="button" value="Following"></input>
                        </div>
                    </div>
                    <div>
                        <div class="skillsWord">SKILLS</div>
                        <div id="skillsDiv">
                            <div>UI / UX</div>
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
        );
    }
}
export default App