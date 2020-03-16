import React from 'react'
import {Link} from 'react-router-dom'
import './About.css'

class About extends React.Component{
  render(){
    return (
      <div className="container-fluid text-center border-bottom">

        <section className="heading-about border-bottom container">
          <h2 className="font-weight-bold">We pioneered the discount broking model in India.<br/>
          Now, we are breaking ground with our technology.</h2>
        </section>

        <article className="row text-left intro-article">

          <section className="col-md-2"></section>

          <section className="col-md-4 px-md-2 col-sm-12">
            <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
            </p>
            <p>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients. 
            </p>
            <p>
            Over 1.5+ million clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes. 
            </p>
          </section>
          
          <section className="col-md-4 px-md-2 col-sm-12">
            <p>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. 
            </p>
            <p>
            <Link className="text-primary">Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. 
            </p>
            <p>
            And yet, we are always up to something new every day. Catch up on the latest updates on our <Link className="text-primary">blog</Link> or see what the media is <Link className="text-primary">saying about us</Link>           
            </p>
          </section>
        </article>

        {/*People section*/}
        <h2 className="my-5">People</h2>
        <div className="d-none d-md-block">
          <section className="row">
            <section className="col-1"></section>

            <section className="col-4 text-center">
              <img src="https://zerodha.com/static/images/nithin-kamath.jpg" className="ceo-img img-fluid" alt="ceo-img" />
              <h5 className="my-3">Nithin Kamath</h5>
              <small className="my-3">Founder, CEO</small>
            </section>

            <section className="col-5 text-left py-3">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p>
                He was named one of the "Top 10 Businessmen to Watch Out
                for in 2016 in India" by The Economic Times for pioneering
                and scaling discount broking in India.
              </p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <Link>TradingQnA</Link> / <Link>Twitter</Link> </p>
            </section>
            <section className="col-2"></section>
          </section>
        </div>

        <div className="d-md-none">

          <section className="container">
            <section className="col-12 text-center">
              <img src="https://zerodha.com/static/images/nithin-kamath.jpg" className="ceo-img img-fluid" alt="ceo-img" />
              <h5 className="my-3">Nithin Kamath</h5>
              <small className="my-3">Founder, CEO</small>
            </section>
          </section>

          <section className="col-12 text-left py-3">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p>
                He was named one of the "Top 10 Businessmen to Watch Out
                for in 2016 in India" by The Economic Times for pioneering
                and scaling discount broking in India.
              </p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <Link>TradingQnA</Link> / <Link>Twitter</Link> </p>
          </section>
        </div>

        <section className="container text-center team-container">

          <div className="row">

            <section className="col-md-4 my-md-0 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Austin.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Austin Prakesh</h5>
                <small className="my-3">Director - Strategy</small>
            </section>

            <section className="col-md-4 my-md-0 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Nikhil.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Nikhil Kamath</h5>
                <small className="my-3">Co-founder & CIO</small>
            </section>

            <section className="col-md-4 my-md-0 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Kailash.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Dr. Kailash Nath</h5>
                <small className="my-3">CTO</small>
            </section>

            <section className="col-md-4 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Venu.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Venu Madhav</h5>
                <small className="my-3">Cheif Of Operations</small>
            </section>

            <section className="col-md-4 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Hanan.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Hanan Delvi</h5>
                <small className="my-3">Cheif of Client Relations</small>
            </section>

            <section className="col-md-4 col-sm-12 my-sm-5">
                <img src="https://zerodha.com/static/images/Seema.jpg" className="team-img img-fluid" alt="team-img" />
                <h5 className="my-3">Seema Patil</h5>
                <small className="my-3">Cheif of Quality</small>
            </section>

          </div>
          
        </section>

      </div>
    )
  }
}

export default About