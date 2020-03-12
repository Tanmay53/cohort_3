import React from 'react'
class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <h2 className="text-center mt-5">We’d love to hear from you!</h2>
                <div className="row">
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-0 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/01/hub-tour-01.png" alt="bookatour" className="mt-3" height="70px"/>
                        <h3 className="mt-3">Book a Tour</h3>
                        <h5 className="text-muted mt-3">Want to visit our space? We’d love to show you around.</h5>
                        <button className="btn text-light background mt-3">BOOK A TOUR</button>
                    </div>
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-1 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/01/interface-2.png" alt="coworking" className="mt-3" height="70px"/>
                        <h3 className="mt-3">Coworking Inquiry</h3>
                        <h5 className="text-muted mt-3">Have any queries concerning membership, be it pricing or plans?</h5>
                        <button className="btn text-light background mt-3">GET AN ANSWER</button>
                    </div>
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-0 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/01/handshake.png" alt="gotspace" className="mt-3" height="70px"/>
                        <h3 className="mt-3">Got space?</h3>
                        <h5 className="text-muted mt-3">Have a space that you want to turn into a coworking space?</h5>
                        <button className="btn text-light background mt-3">TELL US MORE</button>
                    </div>
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-1 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2017/01/events.png" alt="event" className="mt-3" height="70px"/>
                        <h3 className="mt-3">Event Partnerships & Queries</h3>
                        <h5 className="text-muted mt-3">Want to conduct an event at one of our hubs or have any other event-related queries?</h5>
                        <button className="btn text-light background mt-3">KNOW MORE</button>
                    </div>
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-0 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2018/05/teamwork.png" alt="hr" className="mt-3" height="70px"/>
                        <h3 className="mt-3">HR Queries</h3>
                        <h5 className="text-muted mt-3">For any HR related queries, drop in an email at careers@91springboard.com</h5>
                        <button className="btn text-light background mt-3">TO APPLY</button>
                    </div>
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-5 offset-lg-1 text-center mt-5">
                        <img src="https://www.91springboard.com/wp-content/uploads/2018/05/workers.png" alt="inquiries" className="mt-3" height="70px"/>
                        <h3 className="mt-3">Corporate Inquiries</h3>
                        <h5 className="text-muted mt-3">For any corporate related queries, drop us an email at corpalliance@91springboard.com</h5>
                        <button className="btn text-light background mt-3">INQUIRIES</button>
                    </div>
                </div>
                <h2 className="text-center my-5">For any other queries, drop us an email !</h2>
                <div className="d-flex justify-content-center mb-3">
                    <img src="https://i.pinimg.com/originals/ca/5b/b2/ca5bb2432602254d6a426e74d189e058.png" alt="mail" height="30px"/>
                    <h3 className="pl-2">info@91springboard.com</h3>
                </div>
            </div>
        )
    }
}
export default Contact