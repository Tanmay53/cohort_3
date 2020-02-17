import React from 'react';
import { MDBView, MDBMask } from 'mdbreact';
import swal from 'sweetalert'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg">
              <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                <h2>This Navbar isn't fixed</h2>
                <h5>When you scroll down it will disappear</h5>
                <br />
                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
              </MDBMask>
            </MDBView>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;