import React, { Component } from 'react'
import './Watsaap.css'

export default class Watsaap extends Component {
    render() {
        return (
            <div className="bg-light">
                <div class="container-fluid">

<ul class="nav bg-success mt-3">
        <li className="nav-item ml-5 ">
          <img  className="m-3" src="data:image/jpeg;base64,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" alt="img" style={{height: "50px"}}/>
        </li>
        <li className="nav-item ml-auto mr-4">
          <a className="nav-link mt-3  text-white" href="https://www.g.com/about">Watsapp web</a>
        </li>
        <li className="nav-item ml-1 mr-4">
          <a className="nav-link mt-3  text-white" href="https://">Feature</a>
        </li>
        <li className="nav-item ml-3 mr-4">
          <a className="nav-link mt-3  text-white" href="https://omepage" >Download</a>
        </li>
        <li className="nav-item ml-1 mr-4">
          <a className="nav-link mt-3  text-white" href="https://">Security</a>
        </li>
        <li className="nav-item ml-1 mr-1">
          <a className="nav-link mt-3  text-white" href="https://">FAQ</a>
        </li>


        <li className="nav-item  btn purple  mt-3 ml-auto mr-1">
                <p className="nav-link  text-white">EN</p>
              </li>
    </ul>
    </div>


{/* ========================================2nd part========================== */}

<div className="container-fluid">
    <div className="row ">
        <div className="col-lg-4 margintop offset-2 col-sm-12">
             <h2>Simple. Secure.<br></br>
Reliable messaging.</h2>
<br></br>
<p>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
<br></br>
<p className="text text-disabled">Data charges may apply. Contact your provider for details.</p>

<h5 className="text text-success">Andriod</h5>
<h5 className="text text-success">iPhone</h5>
<h5 className="text text-success">Mac and windows pc</h5>
        </div>
        
        <div className="col-lg-6 mt-5 col-sm-12">
            <img className="ml-5" src="https://img.favpng.com/2/23/4/smartphone-feature-phone-whatsapp-android-mobile-phones-png-favpng-RtuTVLnYTTPnjd7Y2833em7gG.jpg" alt="img" style={{width:"400px" , height:"600px"}} />
        </div>

    </div>


</div>

{/* ===============thiird part============================ */}

<div className="container-fluid mt-5">
<div className="row">
  
   <div className="col-6  text-center lightgreen">
    <h3 className="mt-5">WhatsApp Business App</h3>
    <p className="mt-3">WhatsApp Business is a free to download app that built with the small <br></br> business owner in mind. Create a catalog to showcase your products and <br></br> services. Connect with your customers easily by using tools to automate,<br></br> sort and quickly respond to messages.</p>
    <p className="mt-3">WhatsApp can also help medium and large businesses provide customer <br></br>support and deliver important notifications to customers. Learn more <br></br> about WhatsApp Business API.</p>
    <img className="mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRhR9jePNsIxMYPmNoFHdwgf2fbR6kBZRFsCpL68yXyysx00e&s" alt="img" style={{width:"300px",height:"450px"}}/>
    
   </div>

   

   <div className="col-6  mt-5">
    <img class="mt-1" src="https://www.groovypost.com/wp-content/uploads/2017/02/2svWhatsApp.png" alt="img" style={{width:"600px", height:"500px"}}/>
    <h6 className="text-center">END-TO-END ENCRYPTION</h6>
    <h2 className="text-center">Security by Default</h2>
    <p className="text-center">Some of your most personal moments are shared on WhatsApp, which is <br></br> why we built end-to-end encryption into the latest versions of our app.<br></br> When end-to-end encrypted, your messages and calls are secured so only <br></br>> you and the person you're communicating with can read or listen to them, <br></br>and nobody in between, not even WhatsApp.</p>
  
  </div>


</div>

{/* /////////////////button */}
<div className="d-flex justify-content-center">
        
<button type="button" className="btn mt-5 btn-outline-success  p-4 badge badge-pill">Explore Features</button>
</div>



{/* ===================Footer============================== */}

<div className="container-fluid bg bg-dark mt-5">
<div className="row mt-5">

<div className="col-2 mt-5 text-white offset-1 " >
    <p className="text-muted">WHATSAPP</p>
    <br></br>
<p>Features <br></br>
Security <br></br>
Download <br></br>
WhatsApp Web <br></br>
Business</p>
</div>

<div className="col-2 mt-5 ml-3  text-white " >
    <p className="text-muted">COMPANY</p>
    <br></br>
    
<p>About <br></br>
Careers <br></br>
Brand Center <br></br>
Get in touch <br></br>
Blog <br></br>
WhatsApp Storie </p>
</div>


<div className="col-2 mt-5 ml-3  text-white " >
    <p className="text-muted">DOWNLOAD</p>
    <br></br>
<p>
Mac/PC <br></br>
Android  <br></br>
iPhone<br></br>
Windows Phone</p> 
</div>

<div className="col-2 mt-5 ml-3 text-white " >
    <p className="text-muted">HELP</p>
    <br></br>
<p>
FAQ <br></br>
Twitter <br></br>
Facebook</p>
</div>
</div>

{/* ////////footer */}

<div className="row mt-5">
  <div className="col-2 offset-1 text-white ">
      <h6>2020 © WhatsApp Inc.</h6>
  </div>
  <div className="text-white ml-3 col-2">
      <h6>Privacy & Terms</h6>
  </div>

</div>




</div>



</div>
















            </div>
        )
    }
}
