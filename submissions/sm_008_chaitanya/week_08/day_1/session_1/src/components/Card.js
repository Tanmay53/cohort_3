import React from 'react';
import styles from './Card.css'
class Card extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row my-5">
                    <div class="col-8 col-md-8 col-lg-5 text-white">
                        <div class="card bg-primary" className="designcolor">
                        <a href="#" class="btn btn-warning rounded col-2 mt-5 mx-5 text-center">PRO</a>
                            <img src="/123.jpg" height="25%" width="25%" class="img-fluid rounded-circle mx-auto mt-5"/>
                            <div class="card-body text-center ">
                                <h3 class="text-center card-title">N V CHAITANYA</h3>
                                <h5 class="card-title">BANGLORE</h5>
                                <h5 class="card-text">User interface designer and front-end developer</h5>
                                <div class="d-flex">
                                    <div class="col-6 col-md-6 col-lg-6">
                                        <a href="#" class="btn btn-lg btn-info">Message</a>
                                    </div>
                                    <div class="col-6 col-md-6 col-lg-6">
                                        <a href="#" class="btn btn-lg btn-outline-info">Following</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-white">
                                <h6>SKILLS</h6>
                                <a href="#" class="btn btn-outline-info m-2 text-white">UI/UX</a>
                                <a href="#" class="btn btn-outline-info m-2 text-white">Front End Development</a>
                                <a href="#" class="btn btn-outline-info text-white">HTML</a>
                                <a href="#" class="btn btn-outline-info m-2 text-white">CSS</a>
                                <a href="#" class="btn btn-outline-info m-2 text-white">JavaScript</a>
                                <a href="#" class="btn btn-outline-info m-2 text-white">React</a>
                                <a href="#" class="btn btn-outline-info m-2 text-white">Node</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card