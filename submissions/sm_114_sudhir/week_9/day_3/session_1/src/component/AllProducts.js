import React from 'react'

const productArr = [
    {
        name : "SmartPhone",
        price: 30,
        id : 0
    },
    {
        name : "Watch",
        price : 20,
        id : 1
    },
    {
        name : "Shirt",
        price : 50,
        id : 2
    },
    {
        name : "Pants",
        price : 100,
        id : 3
    }
]


const AllProduct = (Props) => {
    return (
        <React.Fragment>
            <h2>Products</h2>
            <div>
                {props.productArr.map(ele => {
                    return (
                        <div key = {ele.id}>
                            <p>Name : {ele.name}</p>
                            <Link>Click here to see the product details</Link>
                        </div>
                    )
                })}

            </div>
        </React.Fragment>
    )
}