import React from 'react'
import Carousel from './Carousel'
import ImageColumn from './ImageColumn'


const  Section6 = () => {
    const data = [{img:"https://a.slack-edge.com/80588/marketing/img/stories/intuit/slack-customer-intuit.jpg", logo:"https://a.slack-edge.com/80588/marketing/img/stories/intuit/intuit.png"}, {img:"https://a.slack-edge.com/80588/marketing/img/stories/lyft/slack-customer-lyft.jpg", logo:"https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"}, {img:"https://a.slack-edge.com/80588/marketing/img/stories/shopify/slack-customer-shopify.jpg", logo:"https://a.slack-edge.com/80588/marketing/img/stories/shopify/shopify.png"}]
    return(
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <h1 className="text-center font-weight-bolder">Trusted the world over</h1>
                <p className="text-center text-muted">teams of every size, shape and sort have already made Slack the place where their work happens.</p>
                <a href=''>See all customers stories</a>

                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    {data.map(e => <Carousel key={e.logo} data={e} />)}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <div className="my-5">
                    <div className="row">
                        <ImageColumn src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/trivago-logo.png" />
                        <ImageColumn src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/vodafone-logo.png" />
                        <ImageColumn src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/shopify-logo.png" />
                        <ImageColumn src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/treebo-logo.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6