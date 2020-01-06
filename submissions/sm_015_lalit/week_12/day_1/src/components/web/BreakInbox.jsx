import React from 'react';
import './JumboCSS.css';
class BreakInbox extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <p className="display-4 font-weight-bold text-center mb-3">Break out of the inbox</p>
                <p className="text-center h4">Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                <img className="mx-auto row p-4" src="https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg" alt="" height="450"/>
                <div className="card-deck mx-5">
                    <div className="card border-0">
                    <i class="material-icons size mb-3">
                        card_travel
                        </i>
                        <p className="font-weight-bold">
                        Conversations, organised
                        </p>
                        <p>
                        Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.
                        </p>

                    </div>
                    <div className="card border-0">
                    <i class="material-icons size mb-3">
                        assignment_ind
                        </i>
                        <p className="font-weight-bold">
                        Stay in the loop, not out
                        </p>
                        <p>
                        Slack makes it simple to follow conversations or find important information in an easily searchable archive.
                        </p>

                    </div>
                    <div className="card border-0">
                    <i class="material-icons size mb-3">
                        chrome_reader_mode
                        </i>
                        <p className="font-weight-bold">
                        Give focus a chance
                        </p>
                        <p>
                        Unlike email, Slack lets you choose which conversations are most important – and which can wait.
                        </p>

                    </div>

                </div>
                <hr/>
                <div className="mt-4">
                <div className="row">
                <div className="ml-5 col">
                    <p className="col-10 display-4 font-weight-bold">Make the change to channels</p>
                    <p className="col-10">Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                </div>
                <div className="col">
                    <img className="col" src="https://a.slack-edge.com/9d2e8/marketing/img/channels/channels-inline1.en-IN.jpg" alt="" height="400"/>
                </div>
                </div>
                </div>
                <div className="my-4">
                <div className="d-flex justify-content-between">
                <div className="col mr-5">
                    <img className="col mr-5" src="https://a.slack-edge.com/9d2e8/marketing/img/shared-channels/shared-channels-inline3.en-IN.jpg" alt="" height="400"/>
                </div>
                <div className="ml-5 col">
                    <p className="ml-5 col-10 display-4 font-weight-bold">Shared channels bring companies together</p>
                    <p className="ml-5 col-10">Now channels can help you work as closely with external partners and clients as you do with teams down the corridor.</p>
                </div>
                
                </div>
                </div>
                <div className="bg-light container-fluid text-center">
                    <p className="pt-5 display-4 font-weight-bold">Trusted the world over</p>
                    <p className="pb-5 text-muted">Teams of every size, shape and sort have already made Slack the place where their work happens.</p>
                </div>
            </div>
        )
    }
}
export default BreakInbox