import React from 'react'

class CartTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           arr:[]
        }
    }
    render(){
        
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Desc</th>
                        <th>Category</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    {
                        this.props.dataout.map(e=><thead key={e.name}>
                                                    <tr>
                                                        <td>{e.name}</td>
                                                        <td>{e.ids}</td>
                                                        <td>{e.desc}</td>
                                                        <td>{e.category}</td>
                                                        <td>{e.price}</td>
                                                    </tr>
                                                    </thead>
                                                    )
                    }
                </table>
                <div className='mt-5 text-center'>
                    <h1 className='text-primary'>Total price:{this.props.priceout}</h1>
                </div>
            </div>
        )
    }
}

export default CartTable