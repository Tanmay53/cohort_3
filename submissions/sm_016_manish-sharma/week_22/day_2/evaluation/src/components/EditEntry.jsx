import React from 'react'
import { connect } from 'react-redux'
import {edit} from '../redux/actions'

class EditEntry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            artist:'',
            album:'',
            year:'',
            initialEntry:{}
        }
    }
    componentDidMount(){
        const {albumsList}=this.props
        let obj= albumsList.find(e=>e.album===this.props.match.params.album)
        this.setState({
            initialEntry:obj,
            artist:obj.artist
        })
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    editEntry=(e)=>{
        e.preventDefault()
        const {edit}=this.props
        const {artist,album,year,initialEntry}=this.state
        let obj={
            artist:artist,
            album:album,
            year:year,
        }
        let payload={newEntry:obj,initialEntry:initialEntry}
        // console.log(payload)
        edit(payload)
    }
    render(){
        const{initialEntry}=this.state
        const{artists}=this.props
        return(
            <div>
                <div className='container m-5 border border-dark'>
                    <div className='form-group'>
                    <div className='my-4 h2'>Edit Menu:</div>
                        <form onSubmit={this.editEntry}>
                            <label>Change Artist name</label>
                            <br></br>
                            <select name='artist' onChange={this.changeHandler} value={initialEntry.artist} className='custom-select col-6 border border-success'>
                                {artists.map(e=>(
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <br></br>
                            {/* <input name='artist' onChange={this.changeHandler} className='col-6 form-control border border-dark' placeholder={initialEntry.artist} type='text' /> */}
                            <label>Change Album Name</label>
                            <input name='album' onChange={this.changeHandler} placeholder={initialEntry.album} className='col-6 form-control  border border-dark' type='text' />
                            <label>Change Release Year</label>
                            <input name='year' onChange={this.changeHandler} placeholder={initialEntry.year} className='col-2 form-control  border border-dark' type='number' />
                            <input className='my-3 btn btn-info' type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    albumsList:state.albumsList,
    artists:state.artistsList
})

const mapDispatchToProps =dispatch=> ({
    edit:(a)=>dispatch(edit(a))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditEntry) 