import React from 'react';
import './Style.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row footerColor cardTextSize">
                    <div className="container-fluid mt-3 pb-5">
                        <div className="row mt-5">
                            <div className="col-xl-2 col-md-3 col-6 offset-xl-1 offset-0">
                                <div className="text-secondary font-weight-bold">WHATSAPP</div>
                                <div className="text-white mt-3">
                                    <div>Features</div>
                                    <div>Security</div>
                                    <div>Download</div>
                                    <div>WhatsApp Web</div>
                                    <div>Business</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="text-secondary font-weight-bold">COMPANY</div>
                                <div className="text-white mt-3">
                                    <div>About</div>
                                    <div>Careers</div>
                                    <div>Brand Center</div>
                                    <div>get in touch</div>
                                    <div>Blog</div>
                                    <div>WhatsApp Stories</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="text-secondary font-weight-bold mt-sm-5 mt-md-0 ">DOWNLOAD</div>
                                <div className="text-white mt-3">
                                    <div>Mac/PC</div>
                                    <div>Android</div>
                                    <div>iPhone</div>
                                    <div>Windows Phone</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="text-secondary font-weight-bold mt-sm-5 mt-md-0">HELP</div>
                                <div className="text-white mt-3">
                                    <div>FAQ</div>
                                    <div>Twitter</div>
                                    <div>Facebook</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottomColor py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-4">
                                <div className="text-secondary">2020©WhatsApp Inc.</div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                                <div className="text-white">Privacy & Terms</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer