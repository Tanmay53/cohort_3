import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div className="container text-center ">
                <div className="h2">Break out of the inbox</div>
                <p>Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                <div className="embed-responsive embed-responsive-16by9 border border-dark">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/EYqxQGmQkVw" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}
