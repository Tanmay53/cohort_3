import React from "react"

class Cover extends React.Component {
    constructor() {
        super()
        this.state = {
            Data: [{
                img: "https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg",
                text: "Earn"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg",
                text: "Eat"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg",
                text: ""
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg",
                text: "Freignt"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg",
                text: "Business"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg",
                text: "Work"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1542252195/assets/69/e1d56d-4b83-4878-aab5-c37ea291e188/original/bike-outlined.svg",
                text: "Bike"
            },
            {
                img: "https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg",
                text: "Fly"
            }
            ],
            data2: [{
                img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg",
                title: "About us",
                content: "Find out how we started, what drives us, and how we’re igniting opportunity.",
            },
            {
                img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg",
                title: "Newsroom",
                content: "See announcements about our latest releases, initiatives, and partnerships.",
            },
            {
                img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg",
                title: "Global citizenship",
                content: "Read about our commitment to making a positive impact in the cities we serve.",
            }
            ],
            data3: [
                {
                    heading: "About us",
                    list: ["Newsroom", "Investor relations", "Global citizenship", "Safety", "Blog", "Careers", "Products"]
                },
                {
                    heading: "Products",
                    list: ["Ride", "Drive", "Eat", "Business", "Freight", "Health", "Uber Air", "Uber Works", "Advanced Technologies Group"]
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="container cover p-lg-5 p-md-3 p-sm-3">
                        <div className="row text-center bg-white mx-5 p-2">
                            {this.state.Data.map((ele) => <div className="col-lg-1 col-md-3 col-sm-12 mx-3"><img src={ele.img} /><div>{ele.text}</div></div>)}
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 bg-white mx-lg-5 p-lg-5 p-md-2 p-sm-1">
                            <h1 className="display-4 m-2">
                                Get in the driver's seat and get paid
                    </h1>
                            <p className="m-2">Drive on the largest network of active riders.</p>
                            <button className="btn btn-dark m-2">Sign up to Drive</button><br />
                            <small className="m-2">Learn more about driving and delivering</small>
                        </div>
                    </div>
                    <div className="cover2 p-5">
                        <h1 >Setting 700+ <br />cities in motion</h1>
                        <p>View all cities</p>
                    </div>
                    <div className="row my-5 py-5">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h1>
                                Our commitment to your safety
                        </h1>
                            <p>With every safety feature we add and every standard in our Community Guidelines we uphold, we’re committed to protecting you on the road ahead. Learn more about our Community Guidelines here.</p>
                            <p>See all safety features</p>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12"><img className="img-fluid" src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg" /></div>
                    </div>
                    <div className="row my-5 py-5">
                        {this.state.data2.map((ele) => <div className="col-lg-4 col-md-8 col-sm-12">
                            <div className="col-12"><img src={ele.img} /></div>
                            <div className="col-12"><h3>{ele.title}</h3></div>
                            <div className="col-12"><p>{ele.content}</p></div>
                            <div className="col-12"><p>Learn More</p></div>
                        </div>)}
                    </div>
                    <div className="row my-5 py-5">
                        <div className="col-6"><h1>Sign up to drive   ---></h1></div>
                        <div className="col-6"><h1>Sign up to ride  ---></h1></div>
                    </div>
                </div>
                <div className="container-fluid bg-dark py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 text-white">
                                <img className="img-fluid" style={{ height: "100px", width: "100px" }} src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/04e09deee72d5fce182103961d90edb8.svg" />
                                <h4>Help Center</h4>
                                <h4>English International</h4>
                                <h4>Bangalore</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12"><img src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/b5bc5aec0cbd8d48b47a447140043cdc.svg" /></div>
                                    <div className="col-lg-6 col-md-12 col-sm-12"><img src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/d5e4c298d2029a78333a44731948f699.svg" /></div>

                                </div>
                            </div>
                            {this.state.data3.map((ele) => <div className="mx-5 col-lg-2 col-md-4 col-sm-12 text-white"><div className="font-weight-bolder">{ele.heading}</div> <div>{ele.list.map((a) => <div>{a}</div>)}</div></div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover