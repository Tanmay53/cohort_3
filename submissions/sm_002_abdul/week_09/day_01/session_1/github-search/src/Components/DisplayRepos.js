import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class DisplayRepos extends React.Component{
  render(props){
    console.log(`props repository data`,this.props.repData)
    // console.log(`this.props.currentModal.owner`,this.props.currentModal['owner'].avatar_url)
    return (
      <div>
        <table className='table table-striped table-light'>
          <thead>
            <tr>
              <th>Owner's Pic</th>
              <th>Repo Name</th>
              <th>Repo Id</th>
              <th>Created At </th>
              <th>Forks Count</th>
              <th>Created At</th>
              <th>Display Owner's Profile</th>
            </tr>
          </thead>
          <tbody>
              {this.props.repData.map(el=>{
                return  <tr
                          key={el.id}>
                          <td>
                            <img
                              src={el.owner.avatar_url}
                              height={75} 
                              width={75}
                              alt='owner-avatar'/>
                          </td>
                          <td>
                            {el.full_name}
                          </td>
                          <td>
                            {el.id}
                          </td>
                          <td>
                            {el.created_at}
                          </td>
                          <td>
                            {el.forks_count}
                          </td>
                          <td>
                            <a 
                              href={el.owner.html_url} 
                              target='blank'>
                                View Owner's Profile
                            </a>
                          </td>
                          <td>
                            <button
                              className='btn btn-primary'
                              value={el.id} 
                              onClick={this.props.displayModal}>View Profile Here</button>

                              <Modal show={this.props.isModalOpen} onHide={this.props.hideModal} onShow={this.props.repModalLoaded}>
                                <ModalHeader closeButton>
                                  <ModalTitle className="text-center">Repo Name : {this.props.currentModal.full_name}</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                  <div className="card text-center">
                                      <img src={this.props.currentModal.owner && this.props.currentModal.owner.avatar_url} className="card-img-top" alt="..."/>
                                      <h5 className="text-center">ID : {this.props.currentModal.id}</h5>
                                      <h5 className="text-center">{this.props.currentModal.created_at}</h5>
                                  </div>
                                </ModalBody>
                                <ModalFooter>
                                  <button className="btn btn-primary mx-5" onClick={this.props.hideModal}>Close Modal</button>
                                  <button className="btn btn-secondary mx-5"onClick={this.props.hideModal}>Hide Modal</button>
                                </ModalFooter>
                              </Modal>
                          </td>
                        </tr>
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DisplayRepos