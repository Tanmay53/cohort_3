import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">
                <img 
                    src="https://mondrian.mashable.com/2018%252F09%252F13%252Ff8%252Fb8e27b3b340b4147b86c0d1c2cd7d1b5.67978.jpg%252F1200x630.jpg?signature=WzXjA-ZbPEBrTtMJ8waIt132wkk=" 
                    alt="uber"
                    className="w-10"
                    style={{width: "80px"}}
                />
              </a>
              <button style={{backgroundColor: "white"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Company</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Safety</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Help</a>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
}

export default Navbar