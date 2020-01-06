import React from 'react';

const HomePageLanding = () => {
        return (
            <React.Fragment>
                <div class="card">
                    <img className='container-fluid' src="https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg" alt=""/>

                    <div className="card-img-overlay mt-5 ml-4">
                        <h1 class="display-4 font-weight-bold">Slack replaces email <br/> inside your company</h1>
                        <p class="lead">Keep conversations organised in Slack, the smart <br/> alternative to email.</p>
                        <a class="btn btn-primary btn-lg mr-2" href="#" role="button">Try Slack</a>
                        <a class="btn btn-outline-primary btn-lg" href="#" role="button">See Demo</a>
                        <p><small>Already using Slack? <a href="">Sign in.</a></small></p>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default HomePageLanding; 