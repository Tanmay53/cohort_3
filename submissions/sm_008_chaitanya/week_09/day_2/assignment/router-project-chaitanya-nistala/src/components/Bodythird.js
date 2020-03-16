import React from 'react'
class Bodythird extends React.Component{
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 mb-5">
                        <h4 className="font-weight-bold">Business boosters that pack a punch</h4>
                        <p>We’ve cracked some massive deals with service providers of all kinds. Deals that guarantee you 
                            services worth Rs. 10,00,000 for FREE. And that doesn’t include the discounts. No kidding!</p>
                        <button className="btn background text-white">Get a boost</button>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 mb-5">
                        <div id="businesscarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                 <div className="carousel-item active mt-3">
                                    <img className="d-block w-100 bussimg" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/10/instamojo1.png" alt="instamojo"/>
                                </div> 
                                {this.props.business.map(elements=>
                                 <div className="carousel-item mt-3" key={elements.alt}>
                                    <img  className="d-block w-100 bussimg" src={elements.url} alt={elements.alt}/>
                                 </div> )}
                            </div>
                            <a className="carousel-control-prev" href="#businesscarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#businesscarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 mb-5">
                        <h4 className="font-weight-bold">You're in good company</h4>
                        <p>With 2500+ companies working out of our spaces, the opportunities for collaboration are endless.</p>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 mb-5">
                        <div id="companycarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                 <div className="carousel-item active mt-3">
                                    <img className="d-block w-100 bussimg" src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/member_logos-05.png" alt="zomato"/>
                                </div> 
                                {this.props.company.map(elements=>
                                 <div className="carousel-item mt-3" key={elements.alt}>
                                    <img  className="d-block w-100 bussimg" src={elements.url} alt={elements.alt}/>
                                 </div> )}
                            </div>
                            <a className="carousel-control-prev" href="#companycarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#companycarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bodythird