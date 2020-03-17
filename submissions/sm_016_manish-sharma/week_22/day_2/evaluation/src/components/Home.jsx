import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {del} from '../redux/actions'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            albumslist:[]
        }
    }
    componentDidMount(){
        const{albumsListProps}=this.props
        this.setState({
            albumslist:albumsListProps
        })
    }
    sort=(e)=>{
        const{albumslist}=this.state
        if(e.target.value==='asc'){
            this.setState({
                albumslist:albumslist.sort((a,b)=>a.year-b.year)
            })
        }
        else{
            this.setState({
                albumslist:albumslist.sort((a,b)=>b.year-a.year)
            })
        }
    }
    filter=(e)=>{
        const{albumsListProps}=this.props
        if(e.target.value!==""){
            let newList=[]
            for(let i=0;i<albumsListProps.length;i++){
                if(albumsListProps[i].artist===e.target.value){
                    newList.push(albumsListProps[i])
                }
            }
            console.log('newList',newList,'target',e.target.value)
            this.setState({
                albumslist:newList
            })
        }
        else{
            this.setState({
                albumslist:albumsListProps
            })
        }
    }
    deleteItem=(e)=>{
        const{albumslist}=this.state
        const {del}=this.props
        del(e)
        let newAlbumList=[]
        for(let i=0;i<albumslist.length;i++){
            if(e!==albumslist[i].album){
                newAlbumList.push(albumslist[i])
            }
        }
        this.setState({
            albumslist:newAlbumList
        })
    }
    render(){
        const {artists }=this.props
        const {albumslist}=this.state
        return(
            <div>
                <div className='container text-center'>
                    <div className='container d-flex m-5'>
                        <Link to='/addentry' className='mx-auto'><button className='btn btn-outline-info'>Add new Artist/Album</button></Link>
                    </div>
                </div>
                <div className='conatainer pt-5 m-5'>
                    <div className='col-4'> Filter by Artist
                        <select onChange={this.filter} className='custom-select'>
                            <option value="">All</option>  
                            {artists.map(e=>(
                                <option key={e} value={e}>{e}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='container text-center'>
                    <div>
                        <table className='table'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>Artist</th>
                                    <th>Album</th>
                                    <th>Year 
                                        <select onChange={this.sort} className='mx-2'>
                                                <option value="">Sort</option>
                                                <option value="asc">Ascending</option>
                                                <option value="dsc">Descenidng</option>
                                        </select>
                                    </th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {albumslist.map(e=>
                                    <tr key={e.album}>
                                        <td>{e.artist}</td>
                                        <td>{e.album}</td>
                                        <td>{e.year}</td>
                                        <td><Link to={`/edit/${e.album}`}><button>Edit</button></Link></td>
                                        <td><button onClick={()=>this.deleteItem(e.album)}>Delete</button></td>
                                    </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    artists:state.artistsList,
    albumsListProps:state.albumsList
})

const mapDispatchToProps = dispatch=> ({
    del:(a)=>dispatch(del(a))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)