import React from 'react'

export default function MakeChangesSection() {
    return (
        <React.Fragment>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <div class="card-body ">
                            <br/> <br/><br/> <br/>
                            <h5 class="card-title align-middle display-4 p-2 font-weight-bold">Make the change to channels</h5>
                            <p class="card-text p-2">Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                            <a href="" className='p-2'>Learn more about channels -></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <video loop autoPlay src="https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4" class="card-img" alt="..."/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
