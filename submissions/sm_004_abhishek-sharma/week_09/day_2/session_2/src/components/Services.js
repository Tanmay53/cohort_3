import React from 'react'

const Services = () => {
    return (
        <div className = "container py-4">
            <div className = "row py-4 mb-4">
                <div className = "col py-4 mb-4">
                    <div className = "text-center">
                        <h1 className = "display-4 font-weight-normal">Technology –<span className = "text-muted"> Investments</span></h1>
                        <div>
                            <p className = "lead">Sleek, modern, and intuitive trading platforms </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-8">
                    <div className = "row">
                        <div className = "col-10">
                            <img src = "https://zerodha.com/static/images/products-kite.png" className = "img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className = "col-4">
                    <div className = "row mt-4 ">
                        <div className = "col-8 px-2">
                            <h1>Kite</h1>
                            <p>Our ultra-fast flagship trading platform with streaming market data, 
                                advanced charts, an elegant UI, and more. Enjoy the Kite experience
                                seamlessly on your Android and iOS devices. 
                            </p>
                            <a href = "tere_maa_ki_ch**.com">Learn more --></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
