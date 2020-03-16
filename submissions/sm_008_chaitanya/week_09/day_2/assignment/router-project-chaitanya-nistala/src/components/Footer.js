import React from 'react'
class Footer extends React.Component{
    render(){
        return(
            <div className="container my-5">
                <div className="row mar-height">
                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-3 text-dark small mb-5">
                        <h4 className="font-weight-bold mb-4">Stay updated with what’s going on</h4>
                        <input type="text" className="mb-4 form-control" placeholder="*your@email.com"/>
                        <button className="btn text-white background mb-4"><span className="small font-weight-bold">SUBSCRIBE</span></button>
                        <h4 className="font-weight-bold">Follow us on</h4>
                        <div className="row">
                            <div className="col-2">
                                <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/fb@3x.png" alt="facebook"/>
                            </div>
                            <div className="col-2">
                                <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/twitter@3x.png" alt="twitter"/>
                            </div>
                            <div className="col-2">
                                <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/linkedin@3x.png" alt="linkedin"/>
                            </div>
                            <div className="col-2">
                                <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/instagram@3x.png" alt="instagram"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-2 offset-lg-1 small text-dark mb-5">
                        <h4 className="font-weight-bold">Contact Us</h4>
                        <div className="d-flex flex-column">
                            <span>info@91springboard.com</span>
                            <span>08047489191</span>
                            <span className="text-muted">E-3, Rani Jhansi Road</span>
                            <span className="text-muted">Jhandewalan Extension</span>
                            <span className="text-muted">New Delhi</span>
                            <span className="text-muted">Delhi</span>
                            <span className="text-muted">110055</span>
                        </div>
                    </div>

                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-2 offset-lg-1 text-dark small mb-5">
                        <h4 className="font-weight-bold">Locations</h4>
                        {this.props.location.map(elements=>
                           <div className="d-flex flex-column mb-2" key={elements}>
                               <span>{elements}</span>
                           </div> )}
                    </div>

                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-2 offset-lg-1 text-dark small mb-5">
                        <h4 className="font-weight-bold">About</h4>
                        {this.props.about.map(elements=>
                           <div className="d-flex flex-column mb-2" key={elements}>
                               <span>{elements}</span>
                           </div> )}
                    </div>
                </div>
                <p className="font-weight-bold text-center text-muted">Copyright © 2019 | 91springboard</p>
            </div>
        )
    }
}
export default Footer