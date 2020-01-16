import React from 'react';

export default class Moreinfo extends React.Component {

    render() {
        return (
            <div className="mt-5 text-center">
                <div className="row">
                    <img className="img-fluid shadow mx-auto mb-2" style={{ height: "250px" }} src={this.props.avatar} alt="" />
                </div>
                <div className="">
                    <div className="text-center">
                        <p className="h5 text-info">{this.props.id}</p>
                        <p className="h4 text-danger">{this.props.name}</p>
                        <p className="h5">{this.props.node}</p>
                        <p className="text-primary h5">{this.props.url}</p>
                        <button onClick={this.props.back} type="button" className="mt-4 btn btn-danger shadow">Back</button>

                    </div>
                </div>
            </div>

        )
    }
}