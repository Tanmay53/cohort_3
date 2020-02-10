import React from 'react'

class SubRest extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row my-3">
                    <div className="col-12 col-md-10 col-lg-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-3">
                                    <img src={this.props.link} className="img-fluid size rounded my-4 ml-4" />
                                </div>
                                <div className="col-7">
                                    <h2 className="text-danger mt-3"><b>{this.props.name}</b></h2>
                                    <p className="text-muted h6">{this.props.category}</p>
                                    <p className="text-muted m-0">Cost {this.props.cost} for one</p>
                                    <p className="h5">Min 50<b>.</b> Up to 30 min </p>
                                    <p>Accepts {this.props.payment}</p>
                                </div>
                                <div className="col-2">
                                    <p className="mt-4 rounded bg-success text-center text-white h3 font-weight-bold mr-5 py-1">{this.props.rating}</p>
                                    <p className="text-muted m-0"><b>{this.props.votes} votes</b></p>
                                    <p className="text-muted"><b>{this.props.review} reviews </b></p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-right h5"><a href="#" className="text-decoration-none text-success">order online > </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubRest
