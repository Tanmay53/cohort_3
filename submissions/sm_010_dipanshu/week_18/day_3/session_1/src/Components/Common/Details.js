import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/Action";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      image: "",
      imageData: "",
      image2: "",
      image2Data: ""
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.props.logout();
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    const config = {
      baseURL: "http://localhost:5000",
      url: "/details",
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      timeout: 10000
    };

    axios(config)
      .then(res => {
        this.setState({
          id: res.data.details.id,
          name: res.data.details.name,
          email: res.data.details.email,
          image: res.data.details.image
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  reader = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
  };

  handlePictureSelected = async event => {
    let imageData = "";

    let filesize = (event.target.files[0].size / 1024 / 1024).toFixed(4); // MB

    if (filesize <= 0.1) {
      await this.reader(event.target.files[0]).then(result => {
        imageData = result;
      });

      await this.setState({
        imageData: imageData
      });
    } else {
      alert("Image too big. Try uploading images less than 100KB");
    }
  };

  handlePictureUpload = event => {
    event.preventDefault();

    let token = localStorage.getItem("token");
    const config = {
      baseURL: "http://localhost:5000",
      url: "/details/upload",
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      timeout: 10000,
      data: { image: this.state.imageData }
    };

    axios(config)
      .then(res => {
        this.setState({
          image: res.data.details.image
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  handlePictureUploadFromForm = event => {
    this.setState({
      image2Data: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", this.state.image2Data);

    let token = localStorage.getItem("token");
    const config = {
      baseURL: "http://localhost:5000",
      url: "/details/upload-form",
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "post",
      timeout: 10000,
      data: formData
    };

    axios(config)
      .then(res => {
        this.setState({
          image2: res.data.details.image_url
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="container mt-5 shadow shadow-lg border p-3 border-dark">
          <div>
            <div className="card">
              <img
                className="mx-auto mt-3"
                src={
                  this.state.image === ""
                    ? "/static/user_stock_image.png"
                    : this.state.image
                }
                width="200px"
                height="200px"
                alt="Card cap"
                style={{ borderRadius: "50%" }}
              />
              <img
                className="mx-auto mt-3"
                src={
                  this.state.image2 === ""
                    ? "/static/user_stock_image.png"
                    : this.state.image2
                }
                width="200px"
                height="200px"
                alt="Card cap"
                style={{ borderRadius: "50%" }}
              />
              <div className="row mx-auto mt-3 p-3">
                <input
                  type="file"
                  className="btn btn-sm btn-outline-success"
                  accept="image/*"
                  id="imageSelect"
                  onChange={this.handlePictureSelected}
                ></input>
                <button
                  className="btn btn-sm btn-outline-info ml-3"
                  id="submitPicture"
                  onClick={this.handlePictureUpload}
                >
                  Upload
                </button>
                <input
                  type="file"
                  className="btn btn-sm btn-outline-success ml-3"
                  accept="image/*"
                  onChange={this.handlePictureUploadFromForm}
                ></input>
                <button
                  className="btn btn-sm btn-outline-info ml-3"
                  id="submitPictureForm"
                  onClick={this.handleSubmit}
                >
                  Upload
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">Name : {this.state.name}</h5>
                <p className="card-text">Email : {this.state.email}</p>
                <p className="card-text">ID : {this.state.id}</p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-danger mt-3 mb-3"
            onClick={this.handleClick}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
