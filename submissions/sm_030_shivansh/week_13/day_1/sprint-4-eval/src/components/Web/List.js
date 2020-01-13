import React from "react";

const obj = {
    WHATSAPP: ["Features", "Security", "Download", "WhatsApp Web", "Business"],
    COMPANY: ["About", "Careers", "Brand Center", "Get In Touch", "Blog", "WhatsApp Stories"],
    DOWNLOAD: ["Mac/PC", "Android", "iPhone", "Windows Phone"],
    HELP: ["FAQ", "Twitter", "Facebook"]
}

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        for (let key in obj) {


            return (
                <div className="text-white p-3 m-3">

                    <h6>{key}</h6>
                    {obj[key].map((ele) =>
                        <p><a href="#" className="text-white">{ele}</a></p>
                    )}

                </div>
            )
        }
    }
}

export default List;