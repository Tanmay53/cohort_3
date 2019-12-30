import React from 'react';
class Card extends React.Component {
    render() {
        return (
            <div className="">
                <div style={{ width: "480px" }} className="card-body  shadow mt-1 py-0">
                    <div className="row d-flex justify-content-between ">
                        <div className="mr-1 mt-2 mx-auto">
                            <img className="img-fluid" style={{ width: "99px", height: "120px", borderRadius: "5px" }} src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='food'/>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="mr-5">
                                <h3 className="text-danger">{this.props.Title}</h3>
                                <div className="text-muted">{this.props.Categories}</div>
                                <div>Cost ₹{this.props.Cost} for one</div>
                                <div>Min ₹{this.props.Min}  •  Up to {this.props.Time} min</div>
                                <div>Accepts {this.props.Payment} payments only</div>
                            </div>
                            <div className="mt-2 pr-1 ">
                                <div className="badge-success text-right badge-pill mr-2 ml-5 px-2 col-6 font-weight-bold text-white mb-2 text-center">{this.props.Ratings}</div>
                                <div className="text-muted text-right">{this.props.Votes} votes</div>
                                <div className="text-muted text-right">{this.props.Reviews} reviews</div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-end border border-right-0 ">
                        <div className="text-success p-1 btn btn-light border border-right-0 ">Order Online ></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card