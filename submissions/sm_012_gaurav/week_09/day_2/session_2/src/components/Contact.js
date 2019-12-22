/* eslint-disable no-useless-constructor */
import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className = "text-center container mx-auto my-5 py-5">
                    <h1>Contact us</h1>
                </div>
                <hr></hr>
                <div className = "container mx-auto py-5 mt-5">
                    <div className = "row">
                        <div className = "col-3">
                            <h3>Support portal</h3>
                            <p>Have a query?</p>
                            <button className = "btn btn-primary">Create a ticket</button>
                        </div>
                        <div className = "col-3">
                            <h4>New account opening</h4>
                            <p>9:00 AM - 6:00 PM</p>
                            <p>080 4913 2020</p>
                            <p>080 6666 2020</p>
                        </div>
                        <div className = "col-3">
                            <h4>Support</h4>
                            <p>8:30 AM - 6:00 PM</p>
                            <p>080 4040 2020</p>
                            <p>080 6620 2020</p>
                        </div>
                        <div className = "col-3">
                            <h4>Call & trade</h4>
                            <p>9:00 AM - 12:00 AM</p>
                            <p>080 4040 2020</p>
                            <p>080 6620 2020</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}


export default Contact;