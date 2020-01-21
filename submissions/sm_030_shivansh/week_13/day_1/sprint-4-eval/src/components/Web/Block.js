import React from 'react';

class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6 text-center block1">
                    <div className="container mx-lg-4 my-2">
                        <h1 className="mt-5">WhatsApp Business App</h1>

                        <p>WhatsApp Business is a free to download app that built with the small business owner in mind.
                            Create a catalog to showcase your products and services.
                            Connect with your customers easily by using tools to automate,
                            sort and quickly respond to messages.
                        </p>

                        <p>
                            WhatsApp can also help medium and large businesses provide customer support
                            and deliver important notifications to customers.
                            Learn more about WhatsApp Business API.
                        </p>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBA0SFLQvn0S-gOur2ko6XXCsyXmmglssjNeq7MzfQ9szWbnNjQ&s" className="mt-3" />

                    </div>

                </div>

                <div className="col-12 col-md-6 text-center block2">
                    <div className="container mx-lg-4 my-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgA8G-quv-NzMvPmKxRAs_vdxKmOXh7BkI_8BU6SZZpwqNMvA&s"

                            className="my-5"
                        />
                        <h1>Security by Default</h1>

                        <p>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.
                        </p>





                    </div>
                </div>

                <div className="my-5 text-center col-12">
                    <button className="btn btn-lg btn-outline-success rounded-pill">EXPLORE FEATURES</button>
                </div>

            </div>
        )
    }
}

export default Block;