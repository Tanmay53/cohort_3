import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addArtist } from './../../redux/action'

class AddArtist extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.props.addArtist(this.state.artist)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container-fluid bg bg-dark p-4">
                    <h1 className="text-center text-white">Add Artist</h1>
                </div>

                <div className="container">
                  
                        <div className="d-flex justify-content-center">
                            <div className="row mt-5">
                                <form onSubmit={this.handelSubmit}>
                                    <div className="form-group">
                                        <label>Enter Artist Name</label>
                                        <input type="text" name="artist" value={this.state.artist} onChange={this.handelChange} className="form-control p-4" placeholder="Name" />
                                    </div>
                                    <button type="submit" className="btn-block p-2 btn-success">Add Artist</button>
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
    // loginData : state.loginData
})

const mapDispatchToProps = dispatch => ({
    addArtist : (payload)=> dispatch(addArtist(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddArtist)