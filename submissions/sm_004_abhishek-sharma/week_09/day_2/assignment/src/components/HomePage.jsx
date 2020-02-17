import React from 'react'
import MENS_DATA from './data/MensData'
import WOMENS_DATA from './data/WomensData'
import Categories from './preview/Categories'
const HomePage = () => {
    const menCategories = MENS_DATA
    const womenCategories = WOMENS_DATA
    console.log(menCategories, womenCategories)
    return (
        <React.Fragment>
            {/* Discount Banner */}
            <div className = "container-fluid bg-light">  
                <img className = "img-fluid" src="https://product.koovs.com/home-CategoryBanner-NRuwRI.jpg" alt="banner" />
            </div>
            {/* Categories */}
            <div className = "container-fluid py-2" style = {{backgroundColor : "#bba7f9"}}>
                <div className = "row py-4">
                    <div className = "col d-flex justify-content-center text-white">
                        <h1>SHOP BY CATEGORY</h1>
                    </div>
                </div>
                {/* Mens Categories */}
                <div className = "row my-2 ">
                    <div className = "offset-1"></div>
                    {menCategories
                        .map(({id, ...otherProps}) => (
                        <Categories key = {id} {...otherProps}  />
                    ))}   
                </div>
                {/* Womens Categories */}
                <div className = "row my-4 ">
                    <div className = "offset-1"></div>
                    {womenCategories
                        .map(({id, ...otherProps}) => (
                        <Categories key = {id} {...otherProps}  />
                    ))}   
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default HomePage
