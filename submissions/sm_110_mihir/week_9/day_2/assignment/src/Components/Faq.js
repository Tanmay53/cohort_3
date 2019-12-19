import React from "react";

export default function Faq() {
    return (
        <div>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Refunds, Returns & Exchanges Policy
                            </button>
                        </h5>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            We are able to refund the price you paid for the
                            product, but not the shipping costs if paid. Please
                            make sure the returned product is carefully wrapped
                            and provide a tracking number for all return items
                            as we are not responsible for lost or damaged
                            products that are being returned to us. Note that
                            any returns arriving in damaged condition will not
                            be refundable. We ask that you are responsible for
                            shipping costs and tracking if exchanging or
                            returning a product.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Does the iPad Stand work with a glass screen
                                guard?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            It does not. If we allowed for a gap in the product
                            to accommodate for all of the worlds market in glass
                            screen guards, then for those who didn't use one -
                            the iPad would not be securely held in.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                What if something goes wrong?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            You’re covered by a 12 Month warranty, any issues
                            contact our customer support and we’ll make things
                            right.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
