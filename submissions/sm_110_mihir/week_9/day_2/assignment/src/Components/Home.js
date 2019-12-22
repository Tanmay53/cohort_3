import React from "react";

export default function Home() {
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide text-left"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100 img-fluid caroselH"
                            src="https://cdn.shopify.com/s/files/1/0002/8092/0115/files/iPad-Connect-Diagram.gif?v=1520920154"
                            alt="Second slide"
                        />
                        <div className="carousel-caption d-none d-md-block text-left w-25 text-dark">
                            <h5 className="display-4">iPad</h5>
                            <button className="font-weight-light btn btn-primary">
                                Cases, mounts, & accessories.
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img
                            className="d-block w-100 caroselH"
                            src="https://cdn.shopify.com/s/files/1/0173/8828/files/190718_AirPods_Charger_01_1600x.jpg?v=1563432361"
                            alt="First slide"
                            height="600px"
                        />
                        <div className="carousel-caption d-none d-md-block text-dark text-left w-25">
                            <h5 className="display-4">
                                Wireless Charger for Airpods
                            </h5>
                            <button className="btn btn-primary ">
                                Christmas Sale!!
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            className="d-block w-100 img-fluid caroselH"
                            src="https://cdn.shopify.com/s/files/1/0173/8828/products/0000s_0000s_0000_iPhone_X_Case_-_Storm_1000x.jpg?v=1534817879"
                            alt="Third slide"
                        />
                        <div className="carousel-caption d-none d-md-block text-left w-25 text-dark">
                            <h5 className="display-4">iPhone</h5>
                            <button className="font-weight-light btn btn-primary ">
                                Cases, mounts, & accessories.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <main className="container mt-5 py-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0173/8828/files/Business-Banner-Wide_800x.jpg?v=1532312056"
                            alt=""
                            className="w-75"
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row ">
                            <h3 className="display-3">Proper for Business</h3>
                        </div>
                        <div className="row">
                            <p className="lead">
                                Use your iPad as a powerful business tool —
                                Mounts and stands designed to promote engagement
                                and simplify customer interaction in Retail,
                                Hospitality, and Enterprise environments alike.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
