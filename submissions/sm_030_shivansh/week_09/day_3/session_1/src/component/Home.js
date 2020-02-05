import React from 'react';
import { Link } from 'react-router-dom';
import styles from './component.module.css';

const Home = () => {

    return (
        <div>


            <div class="bg-dark">
                <div class="container d-flex justify-content-center text-white text-center">
                    <h2 class="mr-3">Super Sales <span className="d-lg">:</span></h2>
                    <h2 class="text-wrap d-flex align-items-center">Grab10</h2>
                </div>
            </div>

            {/* carousel */}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">


                    <div class="carousel-item active">
                        <img src="/images/carousel1.webp" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="/images/carousel2.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/carouselMobile.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/carouselTv.webp" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div className="text-center m-4">
                <h1>Shop By Categories</h1>

            </div>

            <div className="row">
                <Link className="col-12 col-lg-6 my-2" to="component/categories/television">

                    <div className="card">
                        <img src="/images/television.jpeg" className={`card-img img-fluid ${styles.gridImages}`} alt="television poster" />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Television</button>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link className="col-12 col-lg-6 my-2" to="/component/categories/mobile">

                    <div className="card">
                        <img src="/images/mobile.jpeg"
                            className={`card-img img-fluid ${styles.gridImages}`}
                            alt="mobile poster"
                        />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Mobile</button>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link className="col-12 col-lg-6 my-2" to="/component/categories/laptop">

                    <div className="card">
                        <img src="/images/laptop.jpeg" className={`card-img img-fluid ${styles.gridImages}`} alt="television poster" />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Laptop</button>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link className="col-12 col-lg-6 my-2" to="/component/categories/gaming">

                    <div className="card">
                        <img src="/images/gaming.jpeg" className={`card-img img-fluid ${styles.gridImages}`} alt="television poster" />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Gaming</button>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link className="col-12 col-lg-6 my-2" to="/component/categories/accesories">

                    <div className="card">
                        <img src="/images/accesories.jpeg" className={`card-img img-fluid ${styles.gridImages}`} alt="television poster" />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Accesories</button>
                            </div>

                        </div>
                    </div>
                </Link>
                <Link className="col-12 col-lg-6 my-2" to="/component/categories/appliance">

                    <div className="card">
                        <img src="/images/appliance.jpeg"
                            className={`card-img img-fluid ${styles.gridImages}`}
                            alt="television poster" />
                        <div className="card-img-overlay ">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <button className="btn btn-lg btn-danger text-white">Home Appliances</button>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </div >

    )
}

export default Home;