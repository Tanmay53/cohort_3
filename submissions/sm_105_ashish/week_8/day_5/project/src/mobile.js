import React from 'react';

function Mobile () {
return (
    <div className = "container border">
        <div className="row">
            <div className = "col-5 m-auto text-right">
                <img src = "https://www.uberdoo.com/img/header_mobile_img.png" className = "my-4 mobile" alt = "mobile"/>
            </div>
            <div className = "col-5 m-auto">
                <h4>Get the Zomato app.</h4>
                <p className = "text-secondary" >See menus and for near by restraunts and bookmark your favourite place on the go.</p>
                <p style = {{fontSize:'14px'}}>We'll send you a link. Open it in your phone to download the app.</p>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">+91</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder = "Enter Phone Number"/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-success text-light">Text App Link</span>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-5"><hr></hr></div>
                    <div className = "col-2"><b>OR</b></div>
                    <div className = "col-5"><hr></hr></div>
                </div>
                <div className="input-group mt-3">
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder = "Enter Mail id"/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-success text-light">Email App Link</span>
                    </div>
                </div>
                <div className = "row my-2">
                    <div className = "col-4 m-2">
                        <img src = "https://b.zmtcdn.com/images/mobile/applestore@2x.png?output-format=webp" className = "gp"  alt = "gp"/>
                    </div>
                    <div className = "col-4 m-2">
                        <img src = "https://b.zmtcdn.com/images/mobile/googleplay@2x.png?output-format=webp" className = "gp" alt = "io"/>
                    </div>
                </div>

                
            </div>

        </div>
    </div>
)
}

export default Mobile;