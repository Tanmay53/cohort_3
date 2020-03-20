import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAlbums} from '../../Redux/Albums/Action'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount() {
        const url = "http://127.0.0.1:5000/"
        this.props.getAlbums(url)
    }
    
    render() {
        let count = 1
        console.log(this.props)
        return (
            this.props.ifData ?
            (
                <div className="container-fluid text-center">
                    <h1>Music Album Records</h1>
                    <div className="container">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Album</th>
                                <th scope="col">Year</th>
                                <th scope="col">Edit </th>
                                <th scope="col">Delete </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.data.records.map(ele => {
                                        return (
                                            <tr key = {ele.id}>
                                                <th scope="row">{count++}</th>
                                                <td>{ele.name}</td>
                                                <td>{ele.album_name}</td>
                                                <td>{ele.year}</td>
                                                <td><button type="button" className="btn btn-warning">Update</button></td>
                                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            ) :
            (
                <div className="container-fluid text-center">
                    <h1>Music Album Records</h1>
                    <div className="container">
                        <h1>Data is yet to come</h1>
                    </div>

                </div>
            )
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.albumsReducer.data,
    ifData: state.albumsReducer.ifData,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    getAlbums: (payloadUrl) => 
    dispatch(getAlbums(payloadUrl))
})

export default connect (mapStateToProps, mapDispatchToProps) (Home)

