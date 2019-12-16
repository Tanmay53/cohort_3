import React from 'react';

class Uber extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className = "navbar navbar-expand-lg navbar-dark bg-dark text-white">
                    <div className = "container justify-content-between mx-auto">
                        <div className = "col-6 text-left">
                            <div className = "row">
                                <a className = "navbar-brand" href = "#">Uber</a>
                                <a className = "nav-link">Products</a>
                                <a className = "nav-link">Company</a>
                                <a className = "nav-link">Safety</a>
                                <a className = "nav-link">Help</a>
                            </div>
                        </div>
                        <div className = "col-6">
                            <div className = "row justify-content-end">
                                <a className = "nav-link">EN</a>
                                <a className = "nav-link">Log in</a>
                                <a className = "bg-light nav-link text-dark">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}


export default Uber;