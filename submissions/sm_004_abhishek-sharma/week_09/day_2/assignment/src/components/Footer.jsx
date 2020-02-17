import React from 'react'
// import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className = "container-fluid bg-light">
            <div className = "row text-dark text-center mt-2 p-4">
                <div className = "col-3">
                    <div className = "row d-flex flex-column py-2 border-right">
                        <div className = "text-muted"><h3>ABOUT</h3></div>
                        <div className = "font-weight-bold mb-1">Contact Us</div>
                        <div className = "font-weight-bold mb-1">About Us</div>
                        <div className = "font-weight-bold mb-1">Careers</div>
                    </div>
                </div>
                <div className = "col-3">
                    <div className = "row d-flex flex-column py-2 border-right">
                        <div className = "text-muted"><h3>HELP</h3></div>
                        <div className = "font-weight-bold mb-1">Payments</div>
                        <div className = "font-weight-bold mb-1">Shipping</div>
                        <div className = "font-weight-bold mb-1">Cancellation  Returns</div>
                        <div className = "font-weight-bold mb-1">FAQ</div>
                    </div>
                </div>
                <div className = "col-3">
                    <div className = "row d-flex flex-column border-right">
                        <div className = "text-muted"><h3>POLICY</h3></div>
                        <div className = "font-weight-bold mb-1">Return Policy</div>
                        <div className = "font-weight-bold mb-1">Terms Of Use</div>
                        <div className = "font-weight-bold mb-1">Security</div>
                        <div className = "font-weight-bold mb-1">Privacy</div>
                    </div>
                </div>
                <div className = "col-3">
                    <div className = "row d-flex flex-column">
                        <div className = "text-muted"><h3>SOCIAL</h3></div>
                        <div className = "font-weight-bold mb-1">Facebook</div>
                        <div className = "font-weight-bold mb-1">Twitter</div>
                        <div className = "font-weight-bold mb-1">YouTube</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
