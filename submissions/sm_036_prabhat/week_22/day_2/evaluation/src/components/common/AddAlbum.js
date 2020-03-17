import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAlbum } from "./../../redux/action";

class AddAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            album : "",
            year : "",
            artist : ""
        }
    }

    handelChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.addAlbum(this.state)
    }

    render() {
        let artistData = this.props.artistData;
        console.log(this.state);
        return (
            <div>
                <div className="container-fluid bg bg-dark p-4">
                    <h1 className="text-center text-white">Add Album</h1>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="row mt-5">
                            <form onSubmit={this.handelSubmit}>
                                <div className="form-group">
                                    <label>Enter Album Name</label>
                                    <input type="text" name="album" value={this.state.album} onChange={this.handelChange} className="form-control p-2" placeholder="Enter Album Name" />
                                </div>
                                <div className="form-group">
                                    <label>Enter Year</label>
                                    <input type="number" name="year" value={this.state.year} onChange={this.handelChange} className="form-control p-2" placeholder="Enter Year" />
                                </div>
                                <div className="form-group">
                                    <label>Select Artist</label>
                                    <select className="custom-select" name="artist" value={this.state.artist} onChange={this.handelChange} >
                                        {this.props.artistData.map((item,index)=><option key={item+index} value={item}>{item}</option>)}
                                    </select>
                                </div>
                                <button type="submit" className="btn-block p-2 btn-success">Add Album</button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center p-5">
                        <Link to='/home'><button className='btn btn-primary px-5 py-3'>Go to Home</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artistData: state.artistData
})

const mapDispatchToProps = dispatch => ({
    addAlbum : (payload)=> dispatch(addAlbum(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum)