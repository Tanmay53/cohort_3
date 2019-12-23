/* eslint-disable no-useless-constructor */
import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className = "container mx-auto py-5 text-center">
                    <h1>Technology - <span className = "text-muted">Investments</span></h1>
                    <p>Sleek, modern, and intuitive trading platforms</p>
                </div>
                <hr></hr>
                <div className = "container mx-auto py-5">
                    <div className = "row">
                        <div className = "col-6">
                            <img src=  "/products-kite.png" className = "img-fluid" alt = "Kite"></img>
                        </div>
                        <div className = "col-6">
                            <h3 className = "mb-3">Kite</h3>
                            <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                            <button className = "btn btn-outline-primary border-0">Learn more</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;