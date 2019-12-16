import React from 'react'
import './uber.css'
import Navbar from './Components/Navbar'
import Activity from './Components/Activities'
import About from './Components/AboutUs'
import Arrows from './Components/SignArrows'

class Uber extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div>
                    <Navbar />
                    <div className='container bodyimg d-flex-column px-5 pt-2 pb-5'>
                        <div className='mt-5 bg-white d-flex head-snippet'>
                            <Activity link='https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg' name='Earn' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg' name='Ride' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg' name='Eat' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg' name='Freight' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg' name='Business' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg' name='Work' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1542252195/assets/69/e1d56d-4b83-4878-aab5-c37ea291e188/original/bike-outlined.svg' name='Bike' />
                            <Activity link='https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg' name='Fly' />
                        </div>
                        <div className='p-3 bg-white head-snippet'>
                            <div>
                                <h1 className='font-weight-bolder'>Get in the <br/> driver's seat and <br/> get paid</h1>
                                
                            </div>
                            <div className='py-4'>
                                <p>Drive on the largest network of active riders</p>
                            </div>
                            <div>
                                <button className='px-5 py-3 bg-dark border border-dark text-white font-weight-bold'>Sign up to drive</button>
                            </div>
                            <div className='my-4'>
                                <a href='#' className='py-2 text-dark border-bottom border-dark'>Learn more about driving and delivering</a>    
                            </div>
                           </div>
                        </div>
                    <div className='container motion d-flex-column'>
                        <div className='px-4 pt-4 pb-1 font-weight-bolder'><h1>Setting 700+ <br/>
                            cities in motion </h1>
                        </div>
                        <div className='px-4 py-2'>
                                <a href='#' className='py-2 text-dark border-bottom border-dark'>View all cities</a>    
                        </div>
                    </div>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-5'>
                                <h1 className='py-2'>Our commitment to your safety</h1>
                                <p className='py-2'>With every safety feature we add and every standard in our Community Guidelines we uphold, we’re committed to protecting you on the road ahead. Learn more about our Community Guidelines here.</p>
                                <div className='px-0 py-2'>
                                     <a href='#' className='py-2 text-dark border-bottom border-dark'>See all safety feature</a>    
                                </div>     
                            </div>
                            <div className='col-5'>
                                <img className='img-fluid pt-5' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg' />
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>
                    <div className='container my-5'>
                       <About />    
                    </div>
                    <div className='container my-3'>
                        <div className='row'>
                            <div className='col-1'></div>
                            <Arrows name='Sign up to drive'/>
                            <Arrows name='Sign up to ride' />
                            <div className='col-1'></div>
                        </div>
                    </div>
                    <div className='footer-box bg-dark text-white'>
                        <div className='container border-bottom border-white py-5 my-5'>
                            <div className='d-flex justify-content-around'>
                                <div className='d-flex flex-column'>
                                    <div className='my-3'><h1>Uber</h1></div>
                                    <small className='my-2'>Help Center</small>
                                    <small className='my-2'>English</small>
                                    <small className='my-2'>Banglore</small>
                                    <div className='d-flex'>
                                        <img className='my-2' src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/b5bc5aec0cbd8d48b47a447140043cdc.svg'></img> 
                                        <img className='my-2 mx-2' src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/d5e4c298d2029a78333a44731948f699.svg'></img> 
                                    </div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='my-3'><h5>About us</h5></div>
                                    <small className='my-2'>Newsroom</small>
                                    <small className='my-2'>Investor relations</small>
                                    <small className='my-2'>Global citizenship</small>
                                    <small className='my-2'>Safety</small>
                                    <small className='my-2'>Blog</small>
                                    <small className='my-2'>Careers</small>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='my-3'><h5>Products</h5></div>
                                    <small className='my-2'>Ride</small>
                                    <small className='my-2'>Drive</small>
                                    <small className='my-2'>Eat</small>
                                    <small className='my-2'>Business</small>
                                    <small className='my-2'>Freight</small>
                                    <small className='my-2'>Health</small>
                                    <small className='my-2'>Uber Air</small>
                                    <small className='my-2'>Uber works</small>
                                    <small className='my-2'>Advanced Technologies Group</small>
                                </div>
                            </div>
                        </div>
                        <div className='container d-flex justify-content-around'>
                            <div>© 2019 Uber Technologies Inc.</div> 
                            <div>Privacy</div>
                            <div>Accessibility</div>
                            <div>Terms</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Uber