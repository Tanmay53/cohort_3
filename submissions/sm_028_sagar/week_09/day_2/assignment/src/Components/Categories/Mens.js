import React from 'react'
import ProductCard from './ProductCard'
// import {Route,Link} from 'react-router-dom'

export default function Mens(props) {
    return (
        <div className='container'>
            <h1 className='text-center'>Men's Wear</h1>
            <div className='card-deck'> 
                {props.productArr.map(item => 
                    //rendering each product item on men's page
                   <ProductCard key={item.id} path={item.path} label={item.name} price={item.price} id={item.id} url={`${props.match.url}/${item.id}`} />
                )
                }
            </div>            
        </div>
    )
}
