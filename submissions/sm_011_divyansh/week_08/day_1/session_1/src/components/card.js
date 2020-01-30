import React from "react";

function Card() {
    return (
        <div className="container">
            <div className="card bg-primary ">
                <img src="div.jpg" className="rounded-circle " width="100px" height="100px" />
                <p className="text-center text-light mt-1">Ricky Park</p>
                <p className="text-center text-light mt-1 ">NEW YORK</p>
                <p className="text-center text-light mt-1 ">User interface designer and front-end developer</p>
                <div className="text-center">
                    <button className=" btn btn-success col-2 mt-2 ml-2">Message</button>
                    <button className=" btn btn-success col-2 mt-2 ml-2">Following</button>
                </div>
                <div className="">
                    <div className="card-body bg-primary mt-1 text-center">
                        <div className="card-text text-light">Skills</div>

                        <div className="row text-center">
                            <p class="card-text border">UI/UX</p> 
                            <p class="card-text border">Front End Development</p>
                            <p class="card-text border">HTML</p>
                        </div>
                        <div className="row text-center">
                            <p class="card-text border">CSS</p>
                            <p class="card-text border ">Javascript</p>
                            <p class="card-text border">React</p>
                            <p class="card-text border">Node</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Card;



