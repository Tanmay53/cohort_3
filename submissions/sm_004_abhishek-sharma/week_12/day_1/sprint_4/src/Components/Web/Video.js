import React from 'react';

class Video extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h1 className="display-4 font-weight-bold">Break out of the inbox</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p className="text-center font-weight-bold">Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                    </div>
                </div>
                <div className="row text-center mt-5 pb-5">
                    <div className = "col-10 offset-1">
                        <div class="shadow-lg embed-responsive embed-responsive-16by9">
                            <iframe title="aboutSlack" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video
