import React from 'react'

function Slack() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='navbar-brand ml-3'>
                    <img src='https://cdn.vanderbilt.edu/vu-web/medschool-wpcontent/sites/45/2019/10/30221738/slack-logo.png' alt='logo' style={{ height: '60px', objectFit: 'contain' }} />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="">
                                Why Slack?</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">How it works</a>
                                <a className="dropdown-item" href="#">Security</a>
                                <a className="dropdown-item" href="#">Customers</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="">
                                Solutions</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Engineering</a>
                                <a className="dropdown-item" href="#">Financial services</a>
                                <a className="dropdown-item" href="#">Sales</a>
                                <a className="dropdown-item" href="#">IT</a>
                                <a className="dropdown-item" href="#">Marketing</a>
                                <a className="dropdown-item" href="#">Customer Support</a>
                                <a className="dropdown-item" href="#">Human Resources</a>
                                <a className="dropdown-item" href="#">Project MAnagement</a>
                                <a className="dropdown-item" href="#">Media</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="">
                                Solutions</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Resources Library</a>
                                <a className="dropdown-item" href="#">Slack Tips</a>
                                <a className="dropdown-item" href="#">Blog</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-2">
                        <li><a className='text-dark' href='#'>Enterprise</a></li>
                    </ul>
                    <ul className="navbar-nav mx-2 mr-auto">
                        <li><a className='text-dark' href='#'>Pricing</a></li>
                    </ul>

                    <div className='btn text-white mr-4' style={{background:'#6B006B'}}>Your Workspace</div>
                </div>
            </nav>

            <div>
            <div className='m-5 p-5 col-6' style={{ position:'absolute'}}>
                <div className='display-4 font-weight-bold'>Slack replaces email Inside your company</div>
                <div className='h5 mt-2'>Keep conversations organised in Slack, the smart</div>
                <div className='h5'>alternative to email.</div>
                <div className='d-flex flex-row'>
                    <div className='btn text-white align-self-center' style={{background:'#6B006B',height:'50px',width:'150px'}}>Try slack</div>
                    <div className='btn align-self-center m-2' style={{color:'#6B006B',border:'1px solid #6B006B',height:'50px',width:'150px'}}>See the demo</div>
                </div>
                <div><small>Already on slack?  <a href='#'>  Sign in.</a></small></div>
            </div>    
            <video autoPlay="1" loop="1" poster="https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg" style={{ width: '1350px', height:'500px', objectFit: 'cover' }}>
                    <source src='https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4' type='video/mp4' />
            </video>
            </div>


            <div className='col-8 mx-auto my-5'>
                <div className='d-flex justify-content-center'>
                    <h1 className='mt-5'>Break out of the inbox</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div>Working in channels gives everyone in your team a shared view of progress and purpose.</div>
                </div>
                <div className='my-5'>
                <video autoPlay="1" loop="1" style={{width:'900px', objectFit: 'contain' }}>
                    <source src='https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4' type='video/mp4' />
                </video>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='col ml-5'>
                    <div><i class="material-icons" style={{fontSize:'60px'}}>flip_to_front</i></div>
                    <h5>Conversations, organised</h5>
                    <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                </div>
                <div className='col'>
                    <div><i class="material-icons" style={{fontSize:'60px'}}>list_alt</i></div>
                    <h5>Stay in the loop, not out</h5>
                    <p>Slack makes it simple to follow conversations or find important information in an easily searchable archive.</p>
                </div>
                <div className='col'>
                    <div><i class="material-icons" style={{fontSize:'60px'}}>emoji_flags</i></div>
                    <h5>Give focus a chance</h5>
                    <p>Unlike email, Slack lets you choose which conversations are most important – and which can wait.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col mx-5 my-5'>
                    <div className='display-4 font-weight-bold mt-5'>Make the change to channels</div>
                    <div>Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</div>
                    <a href="#">Learn more about channels -></a>
                </div>
                <div className='col ml-5'>
                <video autoPlay="1" loop="1" style={{width:'600px', objectFit: 'contain' }}>
                    <source src='https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4' type='video/mp4' />
                </video>
                </div>
            </div>

            <div className='row'>
                <div className='col mx-5 my-5'>
                <video autoPlay="1" loop="1" style={{width:'600px', objectFit: 'contain' }}>
                    <source src='https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4' type='video/mp4' />
                </video>
                </div>
                <div className='col ml-5 my-5'>
                <div className='display-4 font-weight-bold mt-5'>Shared channels bring companies together</div>
                    <div>Now channels can help you work as closely with external partners and clients as you do with teams down the corridor.</div>
                    <a href="#">See how with shared channels -></a>
                </div>
            </div>

            <div style={{background:'#52004C',height:'250px'}}>
                <div className='d-flex justify-content-center text-white my-5 pt-5'>
                    <h1>Choose a better way to work</h1>
                </div>
                <div className='d-flex justify-content-center mb-5 pb-5'>
                    <div className='btn bg-white mx-2' style={{color:'#52004C'}}> Try Slack </div>
                    <div className='btn text-white border-white' style={{background:'#52004C'}}> Contact Sales </div>
                </div>
            </div>

        </div>
    )
}

export default Slack