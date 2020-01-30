import React from 'react'
import '../../../src/App.css'


function BBInstant(props){
    return(
        <div>
            {/* Nav */}
            <div className="contaier-fluid sticky-top">
            
                <div className="row">
                    <div className="col-6">
                    <img src="http://bbinstant.bigbasket.com/img/logo.png" alt="bbinstant" className="image-fluid"/>
                    </div>
                    <div className="col-7 col-md-6">
                     <ul class=" nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Range</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">How it works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Benefits</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Payment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className="box bg-light container-fluid">
            <header>
                <div className="d-inline-block">
                    <div>
                    <h1 className="mt-5"><b className="text-danger ml-5">big</b>basket introduces</h1>
                    <h1 className="ml-5 float-left">bbinstant</h1>
                    <br/>
                    <h3 className="ml-5 float-left">India's first unmanned cashless</h3>
                    <br/>
                    <h3 className="ml-5 float-left">smart store</h3>
                    </div>
                </div>
            </header>
                <div className="container-fluid bg-light">
                    <button type="button" class="ml-5 float-left btn btn-primary btn-lg">Get it <b>NOW</b></button>
                </div>
            </div>
            <div className="box bg-secondary">
               <div>
                   <div className="col-5"></div>
                   <center className="col-12 margin">
                       <h2>Wide range of</h2>
                       <h1 className="text-success">fresh daily essentials</h1>
                       <br/>
                       <h3>Choose from widest range of</h3>
                        <h3>fresh fruits and vegetables, dairy,</h3>
                        <h3>snacks, beverages and more</h3>
                   </center>
               </div>
            </div>
            <div className="container">
                <img src="http://bbinstant.bigbasket.com/img/howv5.jpg" className="img-fluid" alt="bbInstant"/>
            </div>
            <div className="container box bg-gradient-info">
                <div className="m-5"></div>
                <h1 className="ml-5 mt-5"><b>We've got you covered!</b></h1>
                <hr/>
                <h2><b>Discover fresh range, great prices and 24/7 unmatched convenience.</b></h2>
                <h4>bigbasket's bbinstant is a must try shopping experience which ensures that you get</h4>
                <h4>your basic needs covered 24x7.</h4>
            </div>
            <div className="container-fluid">
                <center><h1><b className="mr-2">Payment</b>methods</h1></center>
            </div>
            <div className="container-fluid row m-3">
                <div className="col-2"></div>
                <div className="col-8">
                    <img src="http://bbinstant.bigbasket.com/img/Vector%20Smart%20Object-4.png" className="m-3" alt="VISA"/>
                    <img src="http://bbinstant.bigbasket.com/img/Vector%20Smart%20Object-1.png" className="m-3" alt="paytm"/>
                    <img src="http://bbinstant.bigbasket.com/img/Logos.png" className="m-3" alt="simpl"/>
                    <img src="http://bbinstant.bigbasket.com/img/Vector%20Smart%20Object-5.png" className="m-3" alt="sodexo"/>
                    <img src="http://bbinstant.bigbasket.com/img/Vector%20Smart%20Object-2.png" className="m-3" alt="master card"/>
                    <img src="http://bbinstant.bigbasket.com/img/Vector%20Smart%20Object-3.png" className="m-3" alt="net banking"/>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="container-fluid">
                <center><h2>CONTACT US</h2></center>
                <hr/>
                <br/>
                <div className="row">
                <div className="col-5 row"></div>
                <div>
                <button type="button" class="ml-5 row col-10 float-left btn btn-primary btn-lg">Get it <b>NOW</b></button>
                </div>
                </div>
                <br/>
                <center><h1><b>Happy to talk to you!</b></h1></center>
                <center><h3>Our customer support will reach to you soon</h3></center>
                <br/><br/>
                <center>bbinstant customer support</center>
                <center>Email us: <a href="Email us: bbinstant@bigbasket.com">Email us: bbinstant@bigbasket.com</a></center>
                <center>Call Us: +91-8068328777</center>
                <br/>
            </div>
            <div className="buttomBox background">
                <center className="mt-5 p-5"><h3>Download the bbinstant app</h3></center>
                <div className="container-fluid row">
                <div className="col-5 row"></div>
                <div className="col-6 row">
                    <img src="http://bbinstant.bigbasket.com/img/googleplay.png" className="m-1" alt="google play store"/>
                    <img src="http://bbinstant.bigbasket.com/img/app%20store%20logo.png" alt="apple store"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BBInstant