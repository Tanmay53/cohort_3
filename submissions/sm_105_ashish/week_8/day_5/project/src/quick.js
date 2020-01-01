import React from 'react';

function QuickSearch () {
    return (
        <div className="container my-4">
            <div className= "row">
                <div className="col-12">
                    <h1>Quick Searches</h1>
                    <p className = "text-secondary">Discover Restraunt by type of meals.</p>
                </div>
                <div className="col-12 border">
                    <div className="row">
                        <div className="col-1 text-center m-4">
                            <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp" alt="1" className="img" />
                            <p>Delivery</p>
                        </div>
                        <div className="col-1 text-center m-4">
                            <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" alt="2" className="img" />
                            <p>Breakfast</p>
                        </div>
                        <div className="col-1 text-center m-4">
                            <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" alt="3" className="img" />
                            <p>lunch</p>
                        </div>
                        <div className="col-1 text-center m-4">
                            <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" alt="4" className="img" />
                            <p>dinner</p>
                        </div>
                        <div className="col-1 text-center m-4">
                            <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" alt="5" className="img" />
                            <p>cafes</p>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default QuickSearch;