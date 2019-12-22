import React from "react";
import Banner from "../common/Banner";

const Contact = () => {
  return (
    <React.Fragment>
      <Banner name="Conatct Us" />
      <div className="container py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86115304544!2d85.07283134398827!3d25.608175486708294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1576668549588!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameborder="0"
          title="google-map"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Contact;
