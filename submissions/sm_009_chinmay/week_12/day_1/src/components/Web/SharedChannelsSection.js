import React from 'react'

export default function SharedChannelsSection() {
    return (
        <React.Fragment>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <video loop autoPlay src="https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4" class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body ">
                            <br/> <br/><br/> <br/>
                            <h5 class="card-title align-middle display-4 p-2 font-weight-bold">Shared channels bring companies together</h5>
                            <p class="card-text p-2">Now channels can help you work as closely with external partners and clients as you do with teams down the corridor.</p>
                            <a href="" className='p-2'>See how with shared channels -></a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}