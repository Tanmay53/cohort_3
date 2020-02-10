import React from 'react';
function Card(props) {
    return (
        <div className="container ml-4">
            <div className="row my-5">
                <div className="col-8 col-md-8 col-lg-5 text-white">
                    <div className="card designcolor container">
                        <a href="#" className="btn btn-warning rounded col-2 mt-5 mx-5 text-center">PRO</a>
                        <img src="/123.jpg" height="25%" width="25%" className="img-fluid rounded-circle mx-auto" />
                        <div className="card-body text-center ">
                            <h3 className="text-center card-title">{props.cdata[0]}</h3>
                            <h5 className="card-title">{props.cdata[1]}</h5>
                            <h5 className="card-text">{props.cdata[2]}</h5>
                            <div className="d-flex">
                                <div className="col-6 col-md-6 col-lg-6">
                                    <a href="#" className="btn btn-lg btn-info">Message</a>
                                </div>
                                <div className="col-6 col-md-6 col-lg-6">
                                    <a href="#" className="btn btn-lg btn-outline-info">Following</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-white">
                            <h6>SKILLS</h6>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][0]}</a>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][1]}</a>
                            <a href="#" className="btn btn-outline-info text-white">{props.cdata[3][2]}</a>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][3]}</a>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][4]}</a>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][5]}</a>
                            <a href="#" className="btn btn-outline-info m-2 text-white">{props.cdata[3][6]}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card