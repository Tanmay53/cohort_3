import React from "react";

const Cart = () => {
    return (
        <div>
            <h1>Your Cart</h1>
            <div className="card mb-3" >
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="row my-2">

                            <div className="col-12 col-lg-3">
                                <img src="/images/television/TCL.webp"
                                    className="img-fluid m-3" alt="product image"
                                    style={{ height: 150, width: 200 }}
                                />
                            </div>

                            <div className="col-12 col-lg-9">
                                <h5>OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand).</h5>
                                <h5 className="my-3 text-danger">₹ 16999</h5>
                                <p>
                                    <span className="mr-2">Qty:</span>
                                    <button className="btn btn-primary">-</button>
                                    <span className="border p-2" >0</span>
                                    <button className="btn btn-primary">+</button>
                                </p>
                                <div className="row my-1">

                                    <div className="col-6">
                                        <small><i className="far fa-heart fa-lg mr-2"></i>Move to Wishlist</small>
                                    </div>

                                    <div className="col-6">
                                        <small><i class="far fa-trash-alt mr-2"></i>Remove</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex m-3">
                                    <h6>Subtotal:</h6>
                                    <h6 className="ml-auto">₹ 16999</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4 border bg-light">
                        <div className="d-flex my-2 justify-content-between">
                            <h6 className="d-flex align-items-center">COUPON</h6>
                            <input placeholder="Enter coupon code" className="form-control mx-2" />
                            <button className="btn btn-info">Apply</button>
                        </div>

                        <hr />
                        <div className="my-3">
                            <h5>ORDER SUMMARY</h5>
                            <div className="d-flex m-3">
                                <h6>Subtotal:</h6>
                                <h6 className="ml-auto">₹ 16999</h6>
                            </div>
                            <div className="d-flex m-3">
                                <h6>Tax(GST):</h6>
                                <h6 className="ml-auto">₹ 1000</h6>
                            </div>
                            <hr />
                            <div className="d-flex m-3">
                                <h6>Total:</h6>
                                <h6 className="ml-auto">₹ 17999</h6>
                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}


export default Cart;