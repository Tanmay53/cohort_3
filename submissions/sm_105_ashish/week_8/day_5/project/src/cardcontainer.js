import React from 'react';

function CardContainer (){
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 text-center">
                <div className="text-left">
                    <h4>Collections.</h4>
                    <p className ="tect-secondary">Explore curated lists of top restaurants, cafes, pubs, and bars in Patna, based on trends</p>
                </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card mb-3" style={{width:'340px'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img src="https://asset1.cxnmarksandspencer.com/is/image/mands/20190925_FTO_Refresh_SB-21789_03?wid=700&qlt=100&fmt=pjpeg" class="card-img cardimg" alt="trend"/>
                                    </div>
                                    <div class="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Trending this week</h5>
                                            <p className="card-text">Most popular cusines</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card mb-3" style={{width:'350px'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img src="https://thenypost.files.wordpress.com/2019/09/junk-food-turns-kid-blind.jpg?quality=90&strip=all&w=618&h=410&crop=1" class="card-img cardimg" alt="2"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <p className="card-title"><b>Multi-visit Restraunts in patna.</b></p>
                                            <p className="card-text">This is a wider card with supporting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card mb-3" style={{width:'340px'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTKnC0Wig7GqMV3Qkp4MLZdhpWbsWEFpFJEoLcjga6S2ezE8a8" class="card-img cardimg" alt="3"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Pocket Friendly</h5>
                                            <p className="card-text">This is a wider card with supporting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card mb-3" style={{width:'350px'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZlFeX7rcU2J2xNpPj7hS6Op1GxOwp0gUHRWjNn88lUY4sJoH0" class="card-img cardimg" alt="4"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Luxary Dining.</h5>
                                            <p className="card-text">This is a wider card with supporting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className ="text-danger bg-light border py-2">All collections in patna</div>
                        </div>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <div className="text-left">
                        <h4>Order Food online.</h4>
                        <p>Best order delivering at your door step.</p>
                    </div>
                    <div className="card mb-3" style={{width:'400px',height:'370px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <div className="text-left">
                                        <h5 className="card-title">Enter your delivery location.</h5>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Type delivery location here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">Detect *</span>
                                            </div>
                                    </div>
                                    <button type="button" className="btn btn-success form-control">Order Food online!</button>
                                    <hr></hr>
                                    <p className="text-success">Use code ZOMATO to get up to 50% OFF. TCs apply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardContainer;