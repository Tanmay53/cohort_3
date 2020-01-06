import React from 'react';

class CardCreate extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            // <h1>{this.props.ele.map(val => val.name)}</h1>
            <div>
                {this.props.ele.map(val => {
                    return (
                        <div key={val.name}>
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row no-gutters">
                                    <div className="col-4">
                                        <img src="http://www.imgworlds.com/wp-content/uploads/2015/11/ttd-marvel-tonysskydesc.jpg" className="card-img" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <div className="card-body">
                                            <h5 className="card-title text-danger">{val.name}</h5>
                                            <p className="text-muted">{val.address}</p>
                                            <p className="text-muted">Cost Rs {val.cost} for one</p>
                                            <p>Min Rs. {val.minCost}</p>
                                            <p>Accept {val.payment} payments only</p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            <span className="badge badge-warning py-1 px-2">{val.rating}</span>
                                            <p className="text-muted"><small>{val.votes} votes</small></p>
                                            <p className="text-muted"><small>{val.reviews} reviews</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        )
    }
}

export default CardCreate;