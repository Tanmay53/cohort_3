import React from 'react'

const NewProduct = (props) => {
    console.log(props)
    const productObj = productArr.find((element) => element.id == props.match.params.id) //This line makes sure that products are only displayed if they are found!
    if(productObj){
        return(
            <React.Fragment>
                <div style = {{border : "1px solid black"}}>
                    <p> Name : {productObj.name} </p>
                    <p> Price : {productObj.price} </p>
                </div> 
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <h1> Product not found, invalid id </h1>
            </React.Fragment>
        );
    }
}

export default NewProduct;