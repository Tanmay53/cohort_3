import React from "react";

function Pvr() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="http://google.com">
            <img
              src="https://www.pvrcinemas.com/assets/images/favicon.png"
              id="navlogo"
            />
          </a>

          <form className="form-inline my-2 my-lg-0 col-md-8">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <select className="form-control">
              <option>Delhi Ncr</option>
              <option>Bangalore</option>
              <option>Bhopal</option>
              <option>Kolkata</option>
              <option>Punjab</option>
            </select>
          </form>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Magazines
                </a>
              </li>
              <li className="nav-item">
                <a href="#explore-head-section" className="nav-link">
                  Cinemas
                </a>
              </li>
              <li className="nav-item">
                <a href="#create-head-section" className="nav-link">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link">
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      // section home
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid h-60"
            src="http://coolwallpaperz.info/user-content/uploads/wall/o/97/skyfall_2012_movie-wide.jpg"
          />
        </div>
        <div className="col-md-6 h-60">
          <img
            className="img-fluid"
            src="https://www.elsetge.cat/myimg/f/13-139800_hd-movie-wallpapers-1080p-widescreen-movie-wallpapers-darkness.jpg"
          />
        </div>
      </div>
      <section id="black">
        <div className="container px-4">
          <div className="col-12 rounded h-30">
            <div className="row">
              <div className="col-md-7 p-4">
                <h3 className="text-ligth">
                  Introducing an exclusive loyality app that pays you back.
                </h3>
                <button className="btn btn-ligth">Know more</button>
                <h2 className="text-muted">Already a member ?</h2>
              </div>
              <div className="col-md-4 offset-1 p-4">
                <img
                  src="https://www.pvrcinemas.com/assets/images/companies/herologo-pvr.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <h2 className="text-light">Now Showing</h2>
          <div className="col-md-3 bg-light"></div>
          <div className="col-md-3">
            <img
              className="img-fluid"
              src="https://newsroom.ibm.com/image/security%2Bthumbnail%2B400x400.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="col-md-3">
            <img
              className="img-fluid"
              src="https://newsroom.ibm.com/image/security%2Bthumbnail%2B300x300.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="col-md-3">
            <img
              className="img-fluid"
              src="https://newsroom.ibm.com/image/security%2Bthumbnail%2B300x300.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pvr;
