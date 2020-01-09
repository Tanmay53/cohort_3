import React, { Component } from 'react'

class ViewCitiesInfo extends Component {
    constructor(){
        super()
        this.state = {
            CitiesInfo: [
                {
                imgSrc: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1280/v1556927537/assets/e4/ade93c-0b7b-4990-bda4-afef96793277/original/Modalities_banner_home.jpg",
                textTitle1: "Setting 700+",
                textTitle2: "cities in motion",
                linkText: "View all cities"
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                    {this.state.CitiesInfo.map((e)=> 
                    <div className="card">
                        <img src={e.imgSrc} className="card-img" alt="..." />
                            <div className="card-img-overlay ">
                                <br /><br />
                                <div className='col-md-10 ml-8'>
                                    <div>
                                        <h3 style={{fontSize:'5vw'}} className="card-title text-left display-3 ml-4">{e.textTitle1}</h3>
                                        <h3 style={{fontSize:'5vw'}} className="card-title text-left display-4 ml-4">{e.textTitle2}</h3>
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

export default ViewCitiesInfo;