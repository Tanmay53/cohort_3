import React from 'react';
var nav = ["Uber", "Products", "Company", "Safety", "Help", "EN", "Login", "Sign Up"]
function App() {
    return (
        <div>
            <div class="NAV container-fluid" >
                <div>{nav[0]}</div>
                <div>{nav[1]}</div>
                <div>{nav[2]}</div>
                <div>{nav[3]}</div>
                <div>{nav[4]}</div>
                <div>{nav[5]}</div>
                <div>{nav[6]}</div>
                <div>{nav[7]}</div>
            </div>
            <div class="bgImg">
                        <div class="container">
                            <div class="row ml-5 flexing bg-white text-dark">
                                <div class="ml-5 mt-5 "><img class="icon" src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg"></img></div>
                                <div class="ml-5 mt-5"><img class="icon" src="https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg"></img></div>
                            </div>
                            <div class="row ml-5 flexing bg-white">
                                
                                    <div class="ml-5 mt-2 text-dark">Earn</div>
                                    <div class="ml-5 mt-2 text-dark">Ride</div>
                                    <div class="ml-5 mt-2 text-dark">Eat</div>
                                    <div class="ml-5 mt-2 text-dark">Freight</div>
                                    <div class="ml-3 mt-2 text-dark">Business</div>
                                    <div class="ml-2 mt-2 text-dark">Work</div>
                                    <div class="ml-5 mt-2 text-dark">Bike</div>
                                    <div class="ml-5 mt-2 text-dark">Fly</div>       
                            </div>
                            <div class="row bg-white text-dark sidebox ml-5">
                                <div class="m-4 display-4 font-weight-bolder">Get in the driver's seat and get paid</div>
                                <div class="lead ml-2">Drive on the largest network of active riders.</div>
                                <div class="bg-dark text-white pt-3 ml-5">Sign Up to drive</div>
                                <div class="ml-3"><u>Learn more about driving and delivering</u></div>
                            </div>
                        </div>
                    </div>
            </div>
    );
}
export default App;