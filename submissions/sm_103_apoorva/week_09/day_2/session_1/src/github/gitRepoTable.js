import React from 'react'

class Repodata extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    moreInfo=()=>
    {
        console.log(this.props.label)
    }

    render()
    {
        return(
            <React.Fragment>
                <tr>
                <td>{this.props.label.id}</td>
                <td>{this.props.label.full_name}</td>
                <td>{this.props.label.owner.id}</td>
                <td><img src={this.props.label.owner.avatar_url} height="120px" alt="no image"></img></td>
                <td>{this.props.label.score}</td>
                <td>
                    <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
                    More Info
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-primary" id="exampleModalLabel" >User Info</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    <li className="text-muted">Language: {this.props.label.language}</li>
                                    <li className="text-muted">Created At: {this.props.label.created_at}</li>
                                    <li className="text-muted">Last Updated At: {this.props.label.updated_at}</li>
                                    <li className="text-muted"><a href={this.props.label.html_url} target="_target">Repo Link</a></li>
                                    <li className="text-muted"><a href={this.props.label.owner.html_url} target="_target">Owner Profile Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </td>
                </tr>
            </React.Fragment>          
        )
    }
}

export default Repodata