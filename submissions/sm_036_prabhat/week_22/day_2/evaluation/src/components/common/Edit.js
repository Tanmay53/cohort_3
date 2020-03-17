import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAlbum, updateAlbum } from "./../../redux/action";

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            album : "",
            artist : "",
            year : ""
        }
    }

    handelChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        let newData = {
            album : this.state.album,
            artist : this.state.artist,
            year : this.state.year,
           
        }
        let id = this.props.match.params.id
        this.props.updateAlbum({id: id, obj: newData})
    }


    componentDidMount(){
        let id = this.props.match.params.id
        console.log(id)
        let data = this.props.albumData.filter((item,index)=>index==id)
        console.log(data[0])
        this.setState({
            album : data[0].album,
            artist : data[0].artist,
            year : data[0].year,
        })
    }

    render() {
        let artistData = this.props.artistData;
        console.log(this.state);
        return (
            <div>
                <div className="container-fluid bg bg-dark p-4">
                    <h1 className="text-center text-white">Update Album</h1>
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
                                        {this.props.artistData.map(item=><option key={item} value={item}>{item}</option>)}
                                    </select>
                                </div>
                                <button type="submit" className="btn-block p-2 btn-success">Update Album</button>
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
    artistData: state.artistData,
    albumData : state.albumData
})

const mapDispatchToProps = dispatch => ({
    addAlbum : (payload)=> dispatch(addAlbum(payload)),
    updateAlbum : (payload) => dispatch(updateAlbum(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)