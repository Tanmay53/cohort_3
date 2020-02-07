import React from 'react';
import styles from './Card.css'
class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-8 col-md-8 col-lg-5 text-white">
                        <div className="card" className="designcolor">
                        <a href="#" className="btn btn-warning rounded col-2 mt-5 mx-5 text-center">PRO</a>
                            <img src="/123.jpg" height="25%" width="25%" className="img-fluid rounded-circle mx-auto mt-5"/>
                            <div className="card-body text-center ">
                                <h3 className="text-center card-title">N V CHAITANYA</h3>
                                <h5 className="card-title">BANGLORE</h5>
                                <h5 className="card-text">User interface designer and front-end developer</h5>
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
                                <a href="#" className="btn btn-outline-info m-2 text-white">UI/UX</a>
                                <a href="#" className="btn btn-outline-info m-2 text-white">Front End Development</a>
                                <a href="#" className="btn btn-outline-info text-white">HTML</a>
                                <a href="#" className="btn btn-outline-info m-2 text-white">CSS</a>
                                <a href="#" className="btn btn-outline-info m-2 text-white">JavaScript</a>
                                <a href="#" className="btn btn-outline-info m-2 text-white">React</a>
                                <a href="#" className="btn btn-outline-info m-2 text-white">Node</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card