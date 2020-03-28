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

    /*using local storage to persists the data even after referesh using local storage*/

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
    /*When the user adds artist it updates artists state and populate the dropdown accordingly*/

    let updatedArtistsList = [...this.state.artists,artist]

    this.setState({
      artists : updatedArtistsList,
    })

    localStorage.setItem("artists",JSON.stringify(updatedArtistsList))
  }

  addNewSong = (newSong) =>{
    //When the user inputs new song details and submit. It updates the playlist state and data of table

    let updatedPlaylist = [...this.state.playlist,newSong]

    this.setState({
      playlist : updatedPlaylist,
      filteredPlaylist : updatedPlaylist

    })

    localStorage.setItem("playlist",JSON.stringify(updatedPlaylist))
    localStorage.setItem("filteredPlaylist",JSON.stringify(updatedPlaylist))
  }

  editDataSubmit = ( id, updatedAlbum, updatedYear )=>{

    // The current function is invoked when the user clicks on edit button in the table
    // It edits the data and updates the state accordingly

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

    // The current function is invoked when the user clicks on delete button. It deletes the required element
    // And updates the state accordingly

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

    // When the user clicks on dropdown of sort by date. This current function gets invoked. 
    // it sorts the data of table in ascending and descending order of dates


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

    // When the user clicks on dropdown of filter by artist. This current function gets invoked.
    // It updates the data of the table filtering it by the artist selected

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
        <Form                                   //Form component in which user inputs data
          artists={this.state.artists} 
          addArtist = {this.addArtist}
          addNewSong = {this.addNewSong}/>

        <div className="row">                         {/*sort and filter components*/}
          <Sort
            sort = {this.sort}/>  

          <Filter
            artists = {this.state.artists}
            filter = {this.filter}/>
        </div>


        <Table                                  /*Table which displays data*/
          playlist={this.state.filteredPlaylist}
          editDataSubmit={this.editDataSubmit}
          deleteData={this.deleteData}/>
      </>
    )
  }
}

export default Playlist