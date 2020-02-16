import React, { Component } from 'react'
// import BootBox from 'react-bootbox'

export default class Home extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          show:false
    //     }
    // }
    // showAlert = () => {
    //     alert('Yes is clicked');
    //   }
    
    //   handleClose = () => {
    //     this.setState({show:false})
    //   }
    render() {
        return (
            <div>
                <div className="text-center m-auto display-1">
                    This is home page
                </div>
                {/* <button onClick={() => { this.setState({ show: true }) }}>Click me to open BootBox</button>
                <BootBox
                    message="Do you want to Continue?"
                    show={this.state.show}
                    onYesClick={this.showAlert}
                    onNoClick={this.handleClose}
                    onClose={this.handleClose} ></BootBox> */}
            </div>
        )
    }
}

