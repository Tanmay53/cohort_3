import React from 'react';
import './Style.css'

class Part1 extends React.Component {
    render() {
        return (
            <div className="container-fluid backImage">
                <div className="row mt-md-5">
                    <div className="col-4 offset-2 mt-5 d-none d-none d-md-block">
                        <h2 className="font-weight-lighter mt-5">Simple. Secure.</h2>
                        <h2>Reliable messaging.</h2>
                        <p className="text-secondary mt-4">With WhatsApp, you'll get fast, simple, secure messaging and calling for free*,
                        available on phones all over the world.</p>
                        <p className="text-muted"><small>* Data charges may apply. Contact your provider for details.</small></p>
                        <div className="textColor font-weight-normal">
                            <div>
                                <img className="pr-1 " src="https://static.whatsapp.net/rsrc.php/yE/r/TDpp7fh8s7a.svg" alt="androidLogo" />Android
                            </div>
                            <div className="mt-3">
                                <img className="pr-1 " src="https://static.whatsapp.net/rsrc.php/yX/r/QBqjMTNuxPz.svg" alt="appleLogo" />iPhone
                            </div>
                            <div className="mt-3">
                                <img className="pr-1 " src="https://static.whatsapp.net/rsrc.php/yk/r/w9G2-B0wRmZ.svg" alt="pcLogo" />Mac or Windows PC
                            </div>
                            <div className="mt-3">
                                <img className="pr-1 " src="https://static.whatsapp.net/rsrc.php/yA/r/4P8ZuBUhtG2.svg" alt="windowsLogo" />Windows Phone
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-6 col-8 offset-sm-3 offset-2 offset-md-0">
                        <img className = "img-fluid whatsAppPhone" src="https://static.whatsapp.net/rsrc.php/v3/yU/r/aIUMc-wmaFw.png" alt = "whatsAppPhone" />

                    </div>
                </div>
            </div>
        )
    }
}

export default Part1