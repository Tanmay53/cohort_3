import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props){
        super(props)

    }
    render() {
        console.log(this.props.userrep)
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Repos Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.userrep.map(val => {
                                return (
                                    <h5>Repos Name :- {val.name}</h5>
                                )
                            })}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
