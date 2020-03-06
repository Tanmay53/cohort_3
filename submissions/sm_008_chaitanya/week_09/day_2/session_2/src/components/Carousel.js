import React from 'react'
class Carousel extends React.Component{
    render(){
        return(
            <div className='container-fluid jumbotron-fluid'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 carousel-height" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/home_img-01-1.png" alt="First slide"/>
                            <div className="carousel-caption d-none d-lg-block text-left pl-4 carousel-dec">
                                <h4 className="font-weight-bold text-dark mb-2">Experience 21st century Workshops</h4>
                                <h5 className="text-dark mb-3">Egronomically designeed contemporary office space created to <br/>foster collaboration</h5>
                                <button className="btn text-light background">Book a tour</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-height" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/home_img-03-1.png" alt="Second slide"/>
                            <div className="carousel-caption d-none d-lg-block text-left pl-4 carousel-dec">
                                <h4 className="font-weight-bold text-dark my-2">We're constantly growing,just like your business.</h4>
                                <div className="d-flex">
                                    <select name="" className="form-control col-lg-6 mr-3 small">
                                       <option value="--">Upcoming locations</option>
                                       <option value="1">ORR - Jp Nagar,Bangalore</option>
                                       <option value="2">Mohan Estate.Delhi(60 Days FREE*)</option>
                                    </select>
                                    <button className="btn text-light background">Pre-book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-height" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/home_img-02-1.png" alt="Third slide"/>
                            <div className="carousel-caption d-none d-lg-block text-left pl-4 carousel-dec">
                                <h4 className="font-weight-bold text-dark my-2">Rs.10,000+ worth of services for Free</h4>
                                <h5 className="text-dark mb-3">Get yout business boosters today.</h5>
                                <button className="btn text-light background">Book a tour</button>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Carousel