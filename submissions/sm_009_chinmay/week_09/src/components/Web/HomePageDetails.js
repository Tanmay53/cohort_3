import React, { Component } from 'react'

class HomePageDetails extends Component {
    constructor(){
        super()
        this.state = {
            HomePageInfo: [
                {
                imgSrc: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_north,w_1280,h_727/v1558483958/assets/3a/b709e3-54eb-4f13-8618-2bf08addf5dd/original/earn_2x.jpg",
                cardTitle1: "Get in the",
                cardTitle2: "driver's seat and",
                cardTitle3:  "get paid",
                cardText: "Drive on the largest network of active riders.",
                buttonText: "Sign Up to Drive",
                logoImgSrc: "https://via.placeholder.com/120X100/FFFFFF/0000FF",
                linkText: "Learn more about driving and delivering"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                    {this.state.HomePageInfo.map((e)=> 
                    <div className="card">
                        <img src={e.imgSrc} className="overflow-auto card-img imgwrapper" alt="..." />
                            <div className="card-img-overlay">
                                <br /><br />
                                <div className='col-md-10 col-sm-12 ml-8 overflow-auto'>
                                    <div className='col-md-12 col-sm-12 text-justify d-flex bg-white' style={{height:100}}>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                                <img className='ml-2' src={e.logoImgSrc} />
                                        </div>
                                        
                                    </div>
                                    <div className='bg-white col-md-8 col-sm-12 overflow-auto' style={{width:500}}>
                                        <h3 style={{fontSize:'5vw'}} className="card-title text-left display-4 ml-4 overflow-auto">{e.cardTitle1}</h3>
                                        <h3 style={{fontSize:'5vw'}} className="card-title text-left display-4 ml-4 overflow-auto">{e.cardTitle2}</h3>
                                        <h3 style={{fontSize:'5vw'}} className="card-title text-left display-4 ml-4 overflow-auto">{e.cardTitle3}</h3>
                                        <p className="card-text text-left ml-4">{e.cardText}</p>
                                        <p className='text-left ml-4 overflow-auto'>
                                        <button className="card-text btn btn-dark">{e.buttonText}</button>
                                        </p>
                                        <a className='ml-4'><u>{e.linkText}</u></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default HomePageDetails;