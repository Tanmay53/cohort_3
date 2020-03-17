import React from 'react'
import { connect } from 'react-redux'
import {addArtist,addAlbum} from '../redux/actions'

class AddEntry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            artist:'',
            album:'',
            year:'',
            artistname:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    artistadd=(e)=>{
        e.preventDefault()
        const {addArtist}=this.props
        const {artistname}= this.state
        addArtist(artistname)
    }
    albumadd=(e)=>{
        e.preventDefault()
        const {artist,album,year}=this.state
        const {addAlbum}=this.props
        let obj={
            artist:artist,
            album:album,
            year:year
        }
        if(obj.artist==="" || obj.album==="" || obj.year===""){
            alert('Please fill the required fields')
        }
        else{
            addAlbum(obj)
        }
    }
    render(){
        const { artists } = this.props
        return(
            <div>
                <div className='container m-5 border bg-warning rounded'>
                    <div className='form-group'>
                        <form onSubmit={this.artistadd}>
                            <div className='my-2 h2'>Add a new Artirst</div>
                            <input className='col-6 form-control border border-dark' name='artistname' onChange={this.changeHandler} type='text' />
                            <input className='my-3 btn btn-success' type='submit' />
                        </form>
                    </div>
                </div>
                <div className='container m-5 bg-success rounded'>
                    <div className='form-group'>
                    <div className='my-4 h3'>Add a new Album</div>
                        <form onSubmit={this.albumadd}>
                            <label>Select Artist</label>
                            <br></br>
                            <select name='artist' onChange={this.changeHandler} className='custom-select col-6 border border-success'>
                                <option value="">Select Artist</option>
                                {artists.map(e=>(
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <br></br>
                            <label>Album Name</label>
                            <input name='album' onChange={this.changeHandler} className='col-6 form-control  border border-dark' type='text' />
                            <label>Release Year</label>
                            <input name='year' onChange={this.changeHandler} className='col-2 form-control  border border-dark' type='number' />
                            <input className='my-3 btn btn-info' type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    artists:state.artistsList
})

const mapDispatchToProps =dispatch=> ({
    addArtist:(a)=>dispatch(addArtist(a)),
    addAlbum:(b)=>dispatch(addAlbum(b))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddEntry)