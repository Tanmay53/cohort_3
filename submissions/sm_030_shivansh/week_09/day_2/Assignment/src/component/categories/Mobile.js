import React from 'react';
import Link from "react-router-dom";

const Mobile = (props) => {

    const data = props.data;
    console.log("mobile", props);

    // const handleClick = (data) => {
    //     <Product data={data} />
    // }
    const listItems = data.map((ele) => (

        <div className="col-12 col-md-6 col-lg-4" key={ele.id}>
            <div className="card-deck m-2">
                <div className="card">
                    <img src={ele.images} className="card-img-top" alt="One plus Tv" />
                    <div className="card-body">
                        <h5 className="card-title"><i className="fas fa-rupee-sign mr-2"></i>{ele.price}</h5>
                        <p className="card-text">
                            {ele.description.brief}
                        </p>
                        <p className="card-text"><small className="text-muted">Ships from and sold by {ele.seller}.</small></p>

                        <div className="text-center">
                            <a href="#" className="btn btn-info m-2" >Details</a>
                            <a href="#" className="btn btn-danger m-2">Add to Cart</a>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    ))

    return (
        <>
            <h1 className="text-center my-5">Mobile</h1>
            <div className="row" >

                {listItems}
            </div>
        </>
    )
}

export default Mobile;