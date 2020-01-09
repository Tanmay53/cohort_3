/** @format */

import React, { Component } from "react";
class Faq extends Component {
  render() {
    return (
      <div className="container card p-3">
        <h1>Frequently Asked Questions</h1>
        <hr></hr>
        <div className="p-2">
          <h2>Where can I purchase the AppleCare Protection Plan?</h2>
          <p style={{ fontFamily: "Lora, serif", fontSize: "22px" }}>
            The AppleCare Protection Plan is available at the Apple Online Store
            and many Apple-authorised resellers and wireless service providers.
          </p>
        </div>
        <div className="p-2">
          <h2>
            How do I initiate repair service under the AppleCare Protection
            Plan?
          </h2>
          <p style={{ fontFamily: "Lora, serif", fontSize: "22px" }}>
            Carry-in service - Carry your product into an Apple Authorised
            Service Provider.<br></br>
            Onsite service - Contact us and we’ll help you arrange an
            Apple-authorised repair for your desktop Mac at your location, at no
            additional charge.<br></br>
            Do-It-Yourself - service Contact us and we may be able to send you
            what you need to service your own product, such as accessories.
          </p>
        </div>
        <div className="p-2">
          <h2>Is the AppleCare Protection Plan transferable?</h2>
          <p style={{ fontFamily: "Lora, serif", fontSize: "22px" }}>
            Yes. If you choose to sell or give away your Apple product, you can
            also transfer the ownership of the AppleCare Protection Plan.
            <br></br>
            Please see the Terms and Conditions for complete details.
          </p>
        </div>
        <div className="p-2">
          <h2>
            When I purchase the AppleCare Protection Plan, do I need to register
            it?
          </h2>
          <p style={{ fontFamily: "Lora, serif", fontSize: "22px" }}>
            In most cases, if you purchase the AppleCare Protection Plan at the
            same time as your Apple hardware from selected Apple resellers, you
            will not n to register it as your AppleCare agreement will be
            automatically registered.<br></br>
            With automatic registration, you will receive a proof of coverage,
            either immediately in the form of a receipt that indicates the end
            date of your AppleCare product coverage, or within 30 days in the
            form of a Proof of Coverage certificate.
          </p>
        </div>
      </div>
    );
  }
}

export default Faq;
