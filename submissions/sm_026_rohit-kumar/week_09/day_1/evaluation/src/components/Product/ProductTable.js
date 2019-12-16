import React from 'react'

class ProductTable extends React.Component {
    constructor(props) {
        super(props)

        this.store = {
            category : 'All',
            cod : 'All'
        }

    }


    handleChange = (event) => {
        this.store[event.target.name] = event.target.value
        this.props.callbackHandleFilters(this.store)
        //console.log('store : ', this.store)
    }


    getInventoryStatus() {
        let res = []
        let dict = {}
        for(let i = 0; i < this.props.productData.length; i++) {
            dict[this.props.productData[i].category] = true
        }

        let categoreis = Object.keys(dict)
        for(let i = 0; i < categoreis.length; i++) {
            let sum = 0   
            sum = this.props.productData.filter((prod) => {
                    return prod.category == categoreis[i]
            }).reduce((acc, prod) =>{
                acc = acc + Number(prod.qty)
                return acc
            },0)

            res.push({'category' : categoreis[i], 'qty' : sum})
        }

        return res
    }

    

    render() {
        return(
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>
                    <select name='category' onChange={this.handleChange}  className='form-control'>
                        <option value='Others'>Others</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Fruits'>Fruits</option>
                        <option value='Accesseries'>Accesseries</option>
                    </select>
                    </div>
                    <div className='col-6'>
                        <select name = 'cod'  onChange = {this.handleChange} className='form-control'>
                            <option value='All'>COD filter</option>
                            <option  value='Yes'>Yes</option>
                            <option  value='No'>No</option>
                        </select>
                    </div>
                </div>

                
               
                <table className='table'>
                    <thead>
                        <th>Product Name</th>
                        <th>Product Id</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>COD Applicable ?</th>
                        <th>Qty</th>
                    </thead>
                    <tbody>
                        {this.props.productData.map((prod) => {
                            return  <tr>
                                        <td>{prod.productName}</td>
                                        <td>{prod.productId}</td>
                                        <td>{prod.sellerName}</td>
                                        <td>{prod.category}</td>
                                        <td>{prod.cod}</td>
                                        <td>{prod.qty}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
                <table className='table'>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getInventoryStatus().map((res) => {
                                return <tr> 
                                            <td>{res.category}</td>
                                            <td>{res.qty}</td>
                                        </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><b>Total Qty</b></td>
                                <td>
                                    {this.getInventoryStatus().reduce((acc, prod) => {
                                        acc = acc + prod.qty
                                        return acc
                                    },0)}
                                </td>
                            </tr>
                        </tfoot>
                </table>
            </div>
        )
    }
}

export default ProductTable