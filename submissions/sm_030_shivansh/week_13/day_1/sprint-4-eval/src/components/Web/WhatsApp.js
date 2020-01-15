import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import Block from "./Block";
import Footer from "./Footer"

class WhatsApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <Navbar />
                <Main />
                <Block />
                <Footer />
            </div>

        )
    }
}


export default WhatsApp