import React, { Component } from 'react'
import Navbar from './Navbar'
import HomePageLanding from './HomePageLanding'
import BreakOutOfInboxSection from './BreakOutOfInboxSection'
import FeatureCards from './FeatureCards'
import MakeChangesSection from './MakeChangesSection'
import SharedChannelsSection from './SharedChannelsSection'
import Footer from './Footer'

class Slack extends Component {
    constructor() {
        super()
        this.state = {
            navbarList: [
                {
                item: ["Why Slack?", "Solutions", "Resources", "Enterprise", 'Pricing'], 
                logoLink: "https://www.stickpng.com/assets/images/5cb480b85f1b6d3fbadece78.png"
                }
            ],
            homePageLandingList: [
                {
                    heading: 'Slack replaces email inside your company',
                    button1Label: 'Try Slack',
                    button1Class: 'btn btn-primary btn-lg mr-2',
                    button2Label: 'See Demo',
                    button2Class: 'btn btn-outline-primary btn-lg',
                }
            ],
            featureCardsList: [
                {
                    title: ['Conversations, organised', 'Stay in the loop, not out', 'Give focus a chance'],
                    info: ['Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.', 'Slack makes it simple to follow conversations or find important information in an easily searchable archive.', 'Unlike email, Slack lets you choose which conversations are most important – and which can wait.']
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <Navbar data={this.state.navbarList}/>
                <HomePageLanding data={this.state.homePageLandingList} />
                <BreakOutOfInboxSection />
                <FeatureCards data={this.state.featureCardsList}/>
                <MakeChangesSection />
                <SharedChannelsSection />
                <Footer />
            </div>
        )
    }
}
export default Slack