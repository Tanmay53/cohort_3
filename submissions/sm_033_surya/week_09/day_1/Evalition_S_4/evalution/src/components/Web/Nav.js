import React from "react"

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {
                img: "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/04e09deee72d5fce182103961d90edb8.svg",
                arra: ["Products", "Company", "Safety", "Help"],
                arra2: ["En", "Login", "sign up"]
            }
        }
    }
    render() {
        return (
            <div className="bg-dark container-fluid p-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-1 "><img className="img-fluid" src={this.state.data.img} /></div><div className="col-lg-6 col-md-8 col-sm-12"><div className="row">{this.state.data.arra.map((ele) => <div className="col-lg-2 col-md-6 col-sm-12" >{ele}</div>)}</div></div>
                        <div className="col-4 offset-lg-1 offse-sm-0"><div className="row" >{this.state.data.arra2.map((ele) => <div className="col-lg-3 col-md-6 col-sm-12 offset-sm-0" >{ele}</div>)}</div></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav