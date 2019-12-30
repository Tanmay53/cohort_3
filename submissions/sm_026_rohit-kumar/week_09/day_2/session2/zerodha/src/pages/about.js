import React from 'react'
import Banner from '../components/banner'
import ImageCard from '../components/imageCard'
import Footer from '../components/footer'

class About extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
            <div className='component'>
                <div className='row'>
                    <div className='col'>
                        <Banner>
                            <h3><b>We pioneered the discount broking model in India.<br/>
                                Now, we are breaking ground with our technology.</b></h3>
                        </Banner>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-4 offset-2'>
                        <p>
                            with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.
                            Over 1.5+ million clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className='col-4'>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center m-5'>
                        <h2>People</h2>
                    </div>
                    <div className='col-4 offset-2 text-center'>
                        <img style={{height:'300px', width:'300px'}} className='rounded-circle' src='https://zerodha.com/static/images/nithin-kamath.jpg'/>
                        <h3>Nitin kamath</h3>
                        <p>Founder, CEO</p>
                    </div>
                    <div className='col-4'>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                            He was named one of the “Top 10 Businessmen to Watch Out for in 2016 in India” by The Economic Times for pioneering and scaling discount broking in India.
                            Playing basketball is his zen.
                        </p>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-10 offset-1 d-flex'>
                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Austin.jpg',
                                              name : 'Austin Prakesh',
                                              post: 'Director - Strategy' }} />

                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Nikhil.jpg',
                                              name : 'Nikhil Kamath',
                                              post: 'Co-founder & CIO' }} />
                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Kailash.jpg',
                                              name : 'Dr. Kailash Nadh',
                                              post: 'CTO' }} />
                    </div>

                    <div className='col-10 offset-1 d-flex'>
                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Venu.jpg',
                                              name : 'Venu Madhav',
                                              post: 'Chief of Operations' }} />

                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Hanan.jpg',
                                              name : 'Hanan Delvi',
                                              post: 'Chief of Client Relations' }} />
                        <ImageCard attrib = {{src:'https://zerodha.com/static/images/Seema.jpg',
                                              name : 'Seema Patil',
                                              post: 'Chief of Quality' }} />
                    </div>                    
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default About