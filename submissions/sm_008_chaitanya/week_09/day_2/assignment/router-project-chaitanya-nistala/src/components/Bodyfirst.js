import React from 'react'
class Bodyfirst extends React.Component{
    render(){
        return(
            <div className="container my-5">
                <div className="row">
                    <div className=" col-10 col-md-5 col-lg-5">
                        <h4 className="font-weight-bold mb-3">Discover a new way of working</h4>
                        <p>Our coworking spaces play home to a diverse set of working professionals. Each with their own experiences,
                        expertise and skills. Drop in and say hi.</p>
                    </div>
                    <div className="col-10 col-md-4 col-lg-4 mt-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text text-muted bg-light border-right-0" id="basic-addon1"><i className="fas fa-map-marker-alt"></i></span>
                            </div>
                            <input type="text" className="form-control border-left-0" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 mt-4 mb-3 text-center">
                        <button className="btn background text-white">Get Started</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mt-4">
                        <div className="embed-responsive embed-responsive-16by9 rounded">
                        <iframe className="embed-responsive-item" width="240" height="120" src="https://www.youtube.com/embed/Arbnqj6P9P4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mt-4">
                        <h4 className="font-weight-bold">The #91life</h4>
                        <p>Start by taking a 3D tour of one of our spaces. It’s super fun!</p>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mt-4">
                        <div className="embed-responsive embed-responsive-16by9 rounded">
                        <iframe className="embed-responsive-item" width="240" height="120" src="https://www.youtube.com/embed/NfFtYQDFCeo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mt-4">
                        <h4 className="font-weight-bold">Take a 3D Tour</h4>
                        <p>Still wondering what we do? Watch this video to find out.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bodyfirst