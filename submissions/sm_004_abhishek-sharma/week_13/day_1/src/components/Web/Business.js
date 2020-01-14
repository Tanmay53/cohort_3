import React from 'react';
import './Style.css'

class Business extends React.Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-6 col-12 businessAppColor">
                        <h4 className="businessCardMargin">WhatsApp Business App</h4>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <p className="pt-2 cardTextSize"><span><a href="#">WhatsApp Business</a></span> is a free to download app that built with the small
                                business owner in mind. Create a catalog to showcase your products and services.
                                Connect with your customers easily by using tools to automate, sort and quickly
                                respond to messages.
                                </p>
                                <p className="cardTextSize">WhatsApp can also help medium and large businesses provide customer support
                                    and deliver important notifications to customers. Learn more about
                                    <spna><a href="#"> WhatsApp Business API.</a></spna>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 offset-3 pt-5">
                                <img className=" businessImg" src="https://static.whatsapp.net/rsrc.php/v3/yD/r/XGGxbGw5FZI.png" alt="businessImg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 securityColor">
                        <div className="row">
                            <div className=" offset-3 securityCircle"></div>
                        </div>
                        <p className="text-uppercase mt-3">End-to-end encryption</p>
                        <h4>Security by Default</h4>
                        <div className="row">
                            <div className="col-10 offset-1 cardTextSize mt-3">
                                <p>Some of your most personal moments are shared on WhatsApp, which is why we built
                                end-to-end encryption into the latest versions of our app. When end-to-end encrypted,
                                 your messages and calls are secured so only you and the person you're communicating
                                 with can read or listen to them, and nobody in between, not even WhatsApp.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business