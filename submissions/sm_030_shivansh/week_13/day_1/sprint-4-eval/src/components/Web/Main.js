import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row">

                    <div className="col-12 col-md-6">
                        <h1>Simple. Secure.<br />
                            Reliable messaging.</h1>
                        <p>With WhatsApp, you'll get fast, simple, secure messaging <br />
                            and calling for free*, available on phones all over the world.</p>
                        <small>* Data charges may apply. Contact your provider for details.</small>
                        <div>
                            <div className="my-3"><a href="#" className="text-success"><i className="fab fa-android mr-3"></i>Android</a></div>
                            <div className="my-3"><a href="#" className="text-success"><i className="fab fa-apple mr-3"></i>iPhone</a></div>
                            <div className="my-3"><a href="#" className="text-success"><i className="fas fa-desktop mr-3"></i>Mac or Windows PC</a></div>
                            <div className="my-3"><a href="#" className="text-success"><i className="fab fa-windows mr-3"></i>Windows Phone</a></div>

                        </div>


                    </div>

                    <div className="col-12 col-md-6">

                        <img src="https://www.clickatell.com/content/uploads/2018/07/screen-1.png"
                            className="img-fluid"
                        />

                    </div>


                </div>
            </div>
        )
    }
}


export default Main