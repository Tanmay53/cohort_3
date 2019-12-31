import React from 'react';

class Carousel extends React.Component{
    constructor(){
        super()

    }

    render(){
        return (
            <div>
                <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleControls" ClassName="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="img-fluid w-100" src="https://cdn.mos.cms.futurecdn.net/nv3Spw2XZnRQ2so4Bbkk9M-768-80.jpg" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fliud w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2GHVwbdheKPBGMo1gxbh5Su2zyDMt1hL3xXhSgxbL8HkGhrG&s" alt="Third slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid w-100" src="https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/sites/5/2019/11/Disney-Plus-Logo_supplied_1536x864.jpg" alt="Second slide"/>
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
                </div>
                <br />
                <div className="row p-2">
                    <div className="container bg-secondary p-3 rounded">
                        <div className="row">
                            <div className="col-8">
                                <h3 className="font-weight-light text-white">Introducing an exclusive loyalty program that pays you back!</h3>
                                <button className="btn p-2 bg-light">KNOW MORE</button>
                                <button className="btn text-white ml-4">ALREADY A MEMBER?</button>
                            </div>
                        <div className="col-4">
                            <img src="https://www.pvrcinemas.com/assets/images/companies/herologo-pvr.png" />
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}

export default Carousel;