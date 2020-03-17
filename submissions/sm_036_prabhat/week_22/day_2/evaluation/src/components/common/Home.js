import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { deleteAlbum } from "./../../redux/action"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage : 1,
            postPerPage : 10,
            data : this.props.albumData,
        }
    }

    paginate = () =>{

    }

    render() {
        console.log(this.props.albumData)
        const indexOfLast = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLast - this.state.postsPerPage;
        const currentPosts = this.state.data.slice(indexOfFirstPost, indexOfLast);
        const toalt = Math.ceil(this.props.albumData.length/10)
        return (
            <div>
                <div className="container-fluid bg bg-info">
                    <h1 className="text-center p-4 text-white">Music Album Records</h1>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-around p-4">
                        <Link to="/artist">
                            <button className="btn btn-success">Add Artist</button>
                        </Link>
                        <Link to="/album">
                            <button className="btn btn-success">Add Album</button>
                        </Link>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Artist</th>
                                <th scope="col">Album</th>
                                <th scope="col">Year
                                
                                </th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.albumData.map((item,index)=>
                            <tr key={item.year+index}>
                                <td>{item.artist}</td>
                                <td>{item.album}</td>
                                <td>{item.year}</td>
                                <td><Link to={`/home/edit/${index}`}>Edit</Link></td>
                                <td><button onClick={(item)=>this.props.deleteAlbum(index)}>Delete</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* <nav>
                    <ul className='pagination'>
                        {toalt.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => this.paginate(number)} href='!#' className='page-link'>
                            {number}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    albumData : state.albumData,
})

const mapDispatchToProps = dispatch => ({
    deleteAlbum : (payload)=> dispatch(deleteAlbum(payload))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)