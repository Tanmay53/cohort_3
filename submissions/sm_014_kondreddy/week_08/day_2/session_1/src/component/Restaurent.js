import React from "react";
class Restaurent extends React.Component{
    // constructor(props){
    //     super(props)
    // }
render(){
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src={this.props.data.imgurl} className="card-img" style=
                                        {{height:"100"}} alt="..." />
                                </div>
                                <div className="col-6">
                                    <h2 className="text text-danger font-weight-bold">{this.props.data.name}</h2>
                                    <small><h6 className="text-muted">{this.props.data.description}</h6></small>
                                    <h6 >{this.props.data.location}</h6>
                                    <h6 >{this.props.data.payment}</h6>
                                </div>
                                <div className="col-3 text-right">
                                    <h4><span className="badge badge-success">{this.props.data.rating}</span></h4>
                                    <small><p className="text-muted">{this.props.data.votes}</p></small>
                                    <small><p className="text-muted">{this.props.data.reviews}</p></small>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <a href="foo"><h5 className="d-flex flex-row-reverse text-success">order online ></h5></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Restaurent 