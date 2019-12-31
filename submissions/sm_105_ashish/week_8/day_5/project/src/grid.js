import React from 'react';
import ManipulateGrid from './grids'

function GridData () {
return (
    <div className = 'container'>
        <div className = "row">
            <div className = "col-9 m-auto">
                <div className ="row">
                    <ManipulateGrid num="24" input='COUNTRIES'/>
                    <ManipulateGrid num="1.5M" input='RESTRAUNTS'/>
                    <ManipulateGrid num="120M" input='FOODIES EVERY MONTH'/>
                    <ManipulateGrid num="30M" input='PHOTOS'/>
                    <ManipulateGrid num="10M" input='REVIEWS'/>
                    <ManipulateGrid num="18M" input='BOOKMARKS'/>
                </div>
            </div>
        </div>
    </div>
)
}
export default GridData;