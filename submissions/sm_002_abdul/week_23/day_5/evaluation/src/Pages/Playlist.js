import React from "react"
import Form from "../Components/Form"
import Table from '../Components/Table'
import Sort from "../Components/Sort"
import Filter from "../Components/Filter"


if (localStorage.getItem("artists")===null){
  localStorage.setItem("artists",JSON.stringify([]))
}

if (localStorage.getItem("playlist")===null){
  localStorage.setItem("playlist",JSON.stringify([]))
}

if (localStorage.getItem("filteredPlaylist")===null){
  localStorage.setItem("filteredPlaylist",JSON.stringify([]))
}

class Playlist extends React.Component{
  constructor(){
    super()
    this.state = {
      artists : [],
      playlist : [],
      filteredPlaylist : []
    }
  }

  componentDidMount(){
    let artists = JSON.parse(localStorage.getItem('artists'))

    let playlist = JSON.parse(localStorage.getItem('playlist'))

    let filteredPlaylist = JSON.parse(localStorage.getItem('filteredPlaylist'))

    //console.log(artists)

    if (artists.length>0){
      this.setState({
        artists : [...artists]
      })
    }

    if (playlist.length>0){
      this.setState({
        playlist : [...playlist]
      })
    }

    if (filteredPlaylist.length===0){
      this.setState({
        filteredPlaylist : [...playlist]
      })
    }
    else {
      this.setState({
        filteredPlaylist : [...filteredPlaylist]
      })
    }

  }

  addArtist = (artist) =>{
    let updatedArtistsList = [...this.state.artists,artist]

    this.setState({
      artists : updatedArtistsList,
    })

    localStorage.setItem("artists",JSON.stringify(updatedArtistsList))
  }

  addNewSong = (newSong) =>{
    let updatedPlaylist = [...this.state.playlist,newSong]

    this.setState({
      playlist : updatedPlaylist,
      filteredPlaylist : updatedPlaylist

    })

    localStorage.setItem("playlist",JSON.stringify(updatedPlaylist))
    localStorage.setItem("filteredPlaylist",JSON.stringify(updatedPlaylist))
  }

  editDataSubmit = ( id, updatedAlbum, updatedYear )=>{

    console.log('playlist editDataSubmit parameter',id,updatedAlbum,updatedYear)

    let editedData = this.state.playlist.map(el=>{
      
      if (el.id === id){
        el.album = updatedAlbum;
        el.year = updatedYear
      }
      return el
    })

     console.log("edited data", editedData)

    this.setState({
      playlist : editedData,
      filteredPlaylist : editedData
    })

    localStorage.setItem('playlist',JSON.stringify(editedData))
    localStorage.setItem('filteredPlaylist',JSON.stringify(editedData))
  }

  deleteData = (id) =>{
    let dataAfterDeletion = this.state.playlist.filter(el=>{
      return el.id!==id
    })

    this.setState({
      playlist : dataAfterDeletion,
      filteredPlaylist : dataAfterDeletion
    })

    localStorage.setItem('playlist',JSON.stringify(dataAfterDeletion))
    localStorage.setItem('filteredPlaylist',JSON.stringify(dataAfterDeletion))
  }

  sort = (e) =>{
    if (e.target.value!==''){

      if (e.target.value==="ascending"){

        let ascendingSortedPlaylist = this.state.playlist.sort((a,b)=>{
          return (a.year - b.year)
        })

        this.setState({
          filteredPlaylist : ascendingSortedPlaylist
        })

        localStorage.setItem('filteredPlaylist',JSON.stringify(ascendingSortedPlaylist))
      }

      if (e.target.value==="descending"){

        let descendingSortedPlaylist = this.state.playlist.sort((a,b)=>{
          return (b.year - a.year)
        })

        this.setState({
          filteredPlaylist : descendingSortedPlaylist
        })

        localStorage.setItem('filteredPlaylist',JSON.stringify(descendingSortedPlaylist))
      }
    }
    if (e.target.value === "") {
      this.setState({
        filteredPlaylist:[...this.state.playlist]
      })
    }
  }

  filter = (e) =>{
    let selectedArtist = e.target.value

    if (selectedArtist !== ""){

      let playlistAfterFilter = this.state.playlist.filter(elem=>{
        return (elem.artist===selectedArtist)
      })

      this.setState({
        filteredPlaylist : [...playlistAfterFilter]
      })
    }

    if (selectedArtist === ""){
      this.setState((prevState)=>{
        return {
          filteredPlaylist : [...prevState.playlist]
        }
      })
    }

  }


  render(){
    console.log("playlist", this.state)
    return (
      <>
        <Form
          artists={this.state.artists}
          addArtist = {this.addArtist}
          addNewSong = {this.addNewSong}/>

        <div className="row">
          <Sort
            sort = {this.sort}/>

          <Filter
            artists = {this.state.artists}
            filter = {this.filter}/>
        </div>


        <Table
          playlist={this.state.filteredPlaylist}
          editDataSubmit={this.editDataSubmit}
          deleteData={this.deleteData}/>
      </>
    )
  }
}

export default Playlist