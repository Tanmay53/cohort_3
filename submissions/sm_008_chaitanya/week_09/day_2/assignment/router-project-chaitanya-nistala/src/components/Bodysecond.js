import React from 'react'
class Bodysecond extends React.Component{
    render(){
        return(
            <div className="container my-5">
               <div className="row my-5">
                  <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 mt-5">
                        <h4 className="font-weight-bold">Think community, not company.</h4>
                        <p>Our workspace experience is designed to foster a sense of belonging. 
                           Each space boasts a community of potential co-founders, clients and teammates.</p>
                  </div>
                  <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1">
                     <div id="thinkcommunity" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <img className="d-block w-100 img-resize" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/DSC9012.jpg" alt="Fourth slide"/>
                           </div>
                           <div className="carousel-item">
                              <img className="d-block w-100 img-resize" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/DSC8006-1.jpg" alt="Fifth slide"/>
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#thinkcommunity" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#thinkcommunity" role="button" data-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5">
                     <div id="educate" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <img className="d-block w-100 img-resize" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/DSC0648.jpg" alt="Fourth slide"/>
                           </div>
                           <div className="carousel-item">
                              <img className="d-block w-100 img-resize" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/DSC0641.jpg" alt="Fifth slide"/>
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#educate" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#educate" role="button" data-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
                  <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 mt-5">
                     <h4 className="font-weight-bold">Events that educate and enrich</h4>
                     <p>We conduct 2000+ events a year across our spaces. With everything from blockchain workshops to open 
                        mic nights. So go on, have your pick.</p>
                     <h5>Explore events ></h5>
                  </div>
               </div>
            </div>
        )
    }
}
export default Bodysecond