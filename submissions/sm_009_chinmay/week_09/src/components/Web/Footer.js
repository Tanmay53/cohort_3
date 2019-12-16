import React, { Component } from 'react'

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            
            footerItems: [
                {   
                    id:'foot1',
                    header5:"Uber",
                    para: ["Help Center", "English(Internation)", "Bangalore"],
                },
                {
                    id:'foot2',
                    header5: "About Us",
                    para: ["Newsroom", "Investor relations", "Global citizenship", "Safety","Blog", "Careers"]
                },
                {
                    id:'foot3',
                    header5: "Products",
                    para: ["Ride", "Drive", "Eat","Business", "Freight", "Health", "Uber Air","Uber Works", "Advanced Technologies Group"]
                }
                
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <br /><br />
                    <div style={{backgroundColor: 'black'}} className="jumbotron jumbotron-fluid footer_text mb-0 bg-dark text-white">
                    <div className = "row ml-3">
                        {
                            this.state.footerItems.map((e)=> 
                                <div className = "container col-2">
                                    <h5 className="font-weight-bold">{e.header5}</h5>
                                    <span className='small mt-2'>
                                        {e.para.map((e)=> <p> {e}</p>)}
                                    </span>
                                </div>
                        )}
                    </div>
                    
                    <hr />
                    <br /><br />
                    <div className="row mt-2 mb-0 p-0">
                        <p className = "ml-5 mr-5"><span className='small'>© 2019 Uber Technologies Inc.</span></p>
                        <p className = "ml-5"><span className='small'>Privacy</span>
                        </p>
                        <p className = "ml-5" ><span className='small'>Accessibility</span></p>
                        <p className="ml-5" ><span className='small'>Terms</span></p>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer;