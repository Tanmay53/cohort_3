import React from 'react';
import ListBy from './component1'




function MainCont(){
    return (
        <div className='container-fluid bgimg'>
            <div className="row">
                <div className="col-10 m-auto bg-light">
                    <div className="row">
                        <ListBy url="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg" Name="Earn"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg" Name="Ride"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg" Name="Eat"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg" Name="Freight"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg" Name="Bussiness"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg" Name="Work"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1542252195/assets/69/e1d56d-4b83-4878-aab5-c37ea291e188/original/bike-outlined.svg" Name="Bike"/>
                        <ListBy url="https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg" Name="Fly"/>
                    </div>
                </div>
            </div>
            <div className= "row">
                <div className="col-11 m-auto">
                    <div className = "col-4 bg-light mx-5">
                        <p className="display-4">Get In the drivers's seat and get paid</p>
                        <p>Drive on the largest network of Active drivers.</p>
                        <p className="bg-dark text-light text-center col-5 bgs pt-2">Sign up to Drive</p>
                        <p>Learn More About Driving and delivering.</p>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div> 
    )
    
}

export default MainCont;