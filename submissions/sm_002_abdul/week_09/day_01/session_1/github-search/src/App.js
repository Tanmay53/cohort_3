import React from "react";
import axios from "axios";
import "./App.css";
import InputTaker from "./Components/InputTaker";
import DisplayTable from "./Components/DisplayTable";
import Modal from 'react-bootstrap/Modal'
import DisplayRepos from './Components/DisplayRepos'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen:false,
      searchBy: "",
      name: "",
      language:"",
      data: [],
      currentModalId:'',
      currentModal:'',
      repData:[]
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    {
      this.state.searchBy==='users'
      &&
      axios
        .get(
          `https://api.github.com/search/${this.state.searchBy}?q=${this.state.name}`
        )
        .then(resp => {
          this.setState({
            data: [...resp.data.items]
          });
        })
        .catch(error => console.log("error in user's call"))
    }

    {
      this.state.searchBy==='repositories'
      &&
      axios
        .get(
          `https://api.github.com/search/${this.state.searchBy}?q=${this.state.name}+language:${this.state.language}&sort=stars&order=desc`
        )
        .then(response=> {
          this.setState({
            repData:[...response.data.items]
          })
        })
        .catch(error=>console.log('error in repositories call'))
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  displayModal = (event) => {
    console.log("Display Modal Clicked")
    console.log(Number(event.target.value));
      this.setState({
        isModalOpen:true,
        currentModalId:event.target.value
      })
  }

  hideModal=(e)=>{
    console.log(`hide modal clicked`)
    this.setState({
      isModalOpen:false
    })
  }

  modalLoaded=()=>{
    console.log('modal loaded',this.state.currentModalId)
    var clickedUser = this.state.data.filter(el => {
      return (Number(el.id) === Number(this.state.currentModalId));
    })
    console.log(`clickedUser`,clickedUser[0])
    this.setState({
      currentModal:clickedUser[0]
    })
  }

  repModalLoaded=()=>{
    var clickedUser = this.state.repData.filter(el => {
      return (Number(el.id) === Number(this.state.currentModalId));
    })
    console.log(`clickedUser`,clickedUser[0])
    this.setState({
      currentModal:clickedUser[0]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <InputTaker
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          items={this.state}
        />

        {
        this.state.searchBy==='users'
         && 
         <DisplayTable
          modalLoaded={this.modalLoaded}
          currentModal={this.state.currentModal}
          isModalOpen={this.state.isModalOpen}
          tableData={this.state.data}
          displayModal={this.displayModal}
          hideModal={this.hideModal}
        />
        }
        {
          this.state.searchBy==='repositories'
          &&
          <DisplayRepos
            repModalLoaded={this.repModalLoaded}
            currentModal={this.state.currentModal}
            isModalOpen={this.state.isModalOpen}
            repData={this.state.repData}
            displayModal={this.displayModal}
            hideModal={this.hideModal}
            />
        }
      </div>
    )
  }
}

export default App;
