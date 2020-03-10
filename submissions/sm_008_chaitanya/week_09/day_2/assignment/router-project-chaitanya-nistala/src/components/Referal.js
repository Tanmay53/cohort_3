import React from 'react'
class Referal extends React.Component{
    render(){
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 mb-3">
                        <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/12/Asset-4.png" alt="91spb" height="35px"/>
                        <hr className="bg-secondary"/>
                        <h3 className="font-weight-bold">Gift a friend the joy of coworking</h3>
                        <h5>Refer someone who will enjoy coworking with 91springboard & both of you get a 20% referral reward*</h5>
                        <input type="text" className="form-control small mb-3" placeholder="Your Name*"/>
                        <input type="text" className="form-control small mb-3" placeholder="Your Email*"/>
                        <input type="text" className="form-control small mb-3" placeholder="Your Mobile Number*"/>
                        <input type="checkbox"/><label className="pl-2 text-muted"> Remember me!</label><br/>
                        <button className="btn text-white background col-12">Refer Now</button>
                        <hr className="mt-5"/>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/DSC_9775a-1.jpg" alt="refer" className="img-fluid rounded"/>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <small>If you are a 91springboard team member <b>click here </b>to refer</small>
                    <h5 className="font-weight-bold mt-2">Work's fun when you have friends around</h5>
                    <small>Follow this simple 2 step process.</small>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-6 col-lg-5 d-flex mb-2">
                        <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/11/user-01.png" alt="step1" height="70px"/>
                        <div className="pl-3">
                            <h6 className="font-weight-bold">Step 1</h6>
                            <p>Fill up the form above to get your unique referral link and share it with your friends.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 offset-lg-2 d-flex">
                        <img src="https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/11/sale-date-01.png" alt="step2" height="70px"/>
                        <div className="pl-3">
                            <h6 className="font-weight-bold">Step 2</h6>
                            <p>Once they become a member, both of you get a payout equivalent to 20% of their first month’s invoice. </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Referal

