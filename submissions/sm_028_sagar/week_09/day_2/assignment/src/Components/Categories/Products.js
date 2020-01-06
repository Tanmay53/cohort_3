import React from 'react'

export default function Products(props) {
    console.log('selected product ',props)
    const id = props.match.params.id
    const productObj = props.productArr.find(item => item.id === id)
    if(productObj){
        return (
            <div className='container'>
                <div className="card mb-3 mt-5" style={{maxWidth: '540px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={productObj.path} className="card-img" alt={productObj.name} />
                        </div>
                        <div className="col-md-8">                    <div className="card-body">
                            <h5 className="card-title">{productObj.name}</h5>
                            <p className="card-text">{productObj.detail}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }else return <h1 className='text-center text-secondary'>ITEM NOT FOUND!!!</h1>
    
}
