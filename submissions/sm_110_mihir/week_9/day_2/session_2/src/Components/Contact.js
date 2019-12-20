import React from "react";

export default function Contact() {
    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-4 col-12 p-5">
                    <h3>
                        We are based in Bengaluru{" "}
                        <img
                            src="https://zerodha.com/static/images/contact-bengaluru.svg"
                            alt=""
                        />
                    </h3>
                </div>
                <div className="col-md-4 col-12 p-5">
                    <h3>HQ</h3>
                    <p className="text-muted">
                        Zerodha, #153/154, 4th Cross, J.P Nagar 4th Phase, Opp.
                        Clarence Public School, Bengaluru - 560078
                    </p>
                </div>
                <div className="col-md-4 col-12 p-5">
                    <h3>Sales</h3>
                    <p className="text-muted">
                        Zerodha, #175/176, 2nd Floor, Next to Rainbow Hospital,
                        Bannergatta Road, Bilekahalli, Bengaluru - 560076
                    </p>
                </div>
            </div>
        </div>
    );
}
