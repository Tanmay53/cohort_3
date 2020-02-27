import React from "react";

const Header = () => {
  return (
    <div >
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <div className="rounded-circle wrap-img mt-5 mb-4 shadow">
          <img
            src="myImg3.jpg"
            alt=""
            height="100%"
            width="100%"
            className="rounded-circle p-2 border border-primary"
          />
        </div>
        <h3 className="my-name">Suyash Misrha</h3>
        <p className="text-muted">Full Stack Developer</p>
        <div className="d-block d-md-flex">
          <div>
            <span className="pr-2 text-warning">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span className="mr-3 text-muted">Bangalore, India</span>
          </div>
          <div>
            <span className="pr-2 text-warning">
              <i class="fas fa-mobile-alt"></i>
            </span>
            <span className="mr-3 text-muted">+91 860 4427 882</span>
          </div>
          <div>
            <span className="pr-2 text-warning">
              <i class="far fa-envelope"></i>
            </span>
            <span className="mr-3 text-muted">
              suyashmishra143143@gmail.com
            </span>
          </div>
        </div>
        <div className="container px-5 text-center pt-3 ">
          <p className="lead px-5 my-details w-60 mx-auto poppins">
            An aspiring Full Stack Web Developer, molded and shaped by Masai
            School's intensive training program. I want to work in such a way
            that can inspire others and lead to the growth of mine as well as
            the organisation I will work with.
          </p>
          <a href="#">
            <i
              class="fab fa-github-alt text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a href="#">
            <i
              class="fab fa-twitter text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a href="#">
            <i
              class="fab fa-linkedin-in text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a href="#">
            <i
              class="fab fa-hackerrank text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
          <a href="#">
            <i
              class="fab fa-instagram text-muted px-2 my-icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="btn cv-btn mb-5 dosis" >DWONLOAD CV</a>
      </div>
      
    </div>
  );
};

export default Header;
