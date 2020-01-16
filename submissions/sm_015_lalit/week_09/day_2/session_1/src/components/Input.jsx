import React from 'react';
export default class Input extends React.Component {

    render() {
        return (
            <div className="col mt-5 text-center">
                <div>
                    <img className="col-lg-1 col-sm-4 col-md-2 col-xm-2" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="" />
                    <h4 className="my-3">Search Github</h4>
                </div>
                <div className="input-group d-flex justify-content-center">
                    <input className="col-3 mb-1 pr-0 form-control" type="text" name="query" onChange={this.props.change} value={this.props.valueUp} id="" />
                    <div className="input-group-append">
                        <select onChange={this.props.selectChange} className="custom-select px-4 border-0 bg-warning rounded-0 text-white p-0" name="" id="selected">
                            <option>Users</option>
                            <option>Repos</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}