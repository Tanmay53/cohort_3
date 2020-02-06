import React from 'react';
function Card() {
    return (
        <div>
            <div class="container">
                <div class="card">
                <span class="badge badge-warning">PRO</span>
                    <img src="/56878000.jpeg" class="rounded-circle" alt="..." id="img"/>
                    <div class="card-body">
                        <h2 class="text-center">GANGIREDDY</h2>
                        <h5 class="text-center">BANGLORE</h5>
                        <p class="text-center">User interface designer and front-end developer</p>
                        <div class="row justify-content-center m-4">
                            <p class="rounded"id="blue">Message</p>
                            <p class="rounded" id="cen">Following</p> 
                        </div>
                        
                        <h5>skills</h5>
                        <div class="row row1">
                            <p class="bord">UI/UX</p>
                            <p class="bord">Front End Developement</p>
                            <p class="bord">HTML</p>
                        </div>
                        <div class="row row1">
                            <p class="bord">CSS</p>
                            <p class="bord">JavaScript</p>
                            <p class="bord">React</p>
                            <p class="bord">Node</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Card