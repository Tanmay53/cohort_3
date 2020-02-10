import React from "react";


const About = props => {
  return (
    <React.Fragment>

    {/* Intro Heading */}
    <div className = "container py-4">
        <div className = "row py-4">
            <div className = "col-8 offset-2 py-4">
                <h3>We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology. </h3>
            </div>
        </div>
    </div>
    {/* Newspaper Style Info */}
    <div className = "container mt-3">
        <div className = "row">
            <div className = "col-10 offset-1">
                <div className = "row">
                    <div className = "col-6">
                        <p className = "lead">We kick-started operations on the 15th of August, 
                            2010 with the goal of breaking all barriers that traders and investors 
                            face in India in terms of cost, support, and technology.
                        </p>
                        <p className = "lead">Today, our disruptive pricing models and in-house technology
                             have made us the biggest stock broker in India in terms of active retail clients.  
                        </p>
                        <p className = "lead">Over 1.5+ million clients place millions of orders every day
                            through our powerful ecosystem of investment platforms, contributing over 15% of 
                            all Indian retail trading volumes.  
                        </p>
                    </div>
                    <div className = "col-6">
                        <p className = "lead">In addition, we run a number of popular open online educational 
                            and community initiatives to empower retail traders and investors. 
                        </p>
                        <p className = "lead">Rainmatter, our fintech fund and incubator, has invested in 
                            several fintech startups with the goal of growing the Indian capital markets. 
                        </p>
                        <p className = "lead">And yet, we are always up to something new every day. 
                            Catch up on the latest updates on our blog or see what the media is saying about us. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default About;
