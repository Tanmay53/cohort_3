import React from 'react';
import List from "./List"
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <List />
                        </div>
                        <div className="col-6 col-lg-3">
                            <List />
                        </div>
                        <div className="col-6 col-lg-3">
                            <List />
                        </div>
                        <div className="col-6 col-lg-3">
                            <List />
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Footer;