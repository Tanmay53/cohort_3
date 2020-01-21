import React from 'react'

function BreakOutOfInboxSection() {
    return (
        <div>
            <React.Fragment>
                <div className="text-center">
                    <p className='display-4'>Break out of the inbox</p>
                    <p>Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                    
                    <video width="820" controls
                    poster="https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg" >
                        <source
                            src="https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4"
                            type="video/mp4"/>
                        Your browser doesn't support HTML5 video tag.
                    </video>
                </div>
            </React.Fragment>
        </div>
    )
}
export default  BreakOutOfInboxSection