import React from 'react';
const Card = (props) => {
    // console.log(props.info4[1])
    return (
        <div>
            <div className="container">
                <div className="card">
                <span className="badge badge-warning">PRO</span>
                    <img src="/56878000.jpeg" className="rounded-circle" alt="..." id="img"/>
                    <div className="card-body">
                        <h2 className="text-center">{props.info1}</h2>
                        <h5 className="text-center">{props.info2}</h5>
                        <p className="text-center">{props.info3}</p>
                        <div className="row justify-content-center m-4">
                            <p className="rounded"id="blue">Message</p>
                            <p className="rounded" id="cen">Following</p> 
                        </div>
                        
                        <h5>skills</h5>
                        <div className="row row1">
                            <p className="bord">{props.info4[0]}</p>
                            <p className="bord">{props.info4[1]}</p>
                            <p className="bord">{props.info4[2]}</p>
                        </div>
                        <div className="row row1">
                            <p className="bord">{props.info4[3]}</p>
                            <p className="bord">{props.info4[4]}</p>
                            <p className="bord">{props.info4[5]}</p>
                            <p className="bord">{props.info4[6]}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div> 
    );                       
        
};
export default Card