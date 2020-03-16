import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class DisplayTable extends React.Component{
  render(props){
    console.log(`props current modal`,this.props.currentModal)
    return (
      <div>
        <table className='table table-striped table-dark'>
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Login</th>
              <th>Id</th>
              <th>Score</th>
              <th>Repos URL</th>
              <th>HTML URL</th>
              <th>Display Profile</th>
            </tr>
          </thead>
          <tbody>
              {this.props.tableData.map(el=>{
                return  <tr
                          key={el.id}>
                          <td>
                            <img
                              src={el.avatar_url}
                              height={75} 
                              width={75}
                              alt='avatar'/>
                          </td>
                          <td>
                            {el.login}
                          </td>
                          <td>
                            {el.id}
                          </td>
                          <td>
                            {el.score}
                          </td>
                          <td>
                            <a 
                              href={el.repos_url} 
                              target='blank'>
                                Click To View Repos
                            </a>
                          </td>
                          <td>
                            <a 
                              href={el.html_url} 
                              target='blank'>
                                Click To View Profile
                            </a>
                          </td>
                          <td>
                            <button
                              className='btn btn-primary'
                              value={el.id} 
                              onClick={this.props.displayModal}>View Profile Here</button>

                              <Modal className="d-flex align-items-center justify-content-center" show={this.props.isModalOpen} onHide={this.props.hideModal} onShow={this.props.modalLoaded}>
                                <ModalHeader closeButton>
                                  <ModalTitle className="text-center">Login Name : {this.props.currentModal.login}</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                  <div className="card text-center">
                                      <img src={this.props.currentModal.avatar_url} className="card-img-top" alt="..."/>
                                      <h5 className="text-center">ID : {this.props.currentModal.id}</h5>
                                      <h5 className="text-center">Score : {this.props.currentModal.score}</h5>
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

export default DisplayTable