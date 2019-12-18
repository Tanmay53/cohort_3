import React from 'react'

class ProductForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productName : '',
            productId : '',
            sellerName : '',
            category : 'Others',
            cod : false,
            qty : ''
        }

    }

    handleChange = (event) => {
            if(event.target.name == 'cod') {
                let val
                if(event.target.checked) {
                    val = 'Yes'
                }
                else {
                    val = 'No'
                }
                this.setState ({
                    [event.target.name] :  val
                })
            }
            else {
                this.setState ({
                    [event.target.name] :  event.target.value
                })
            }

            //console.log(this.state)
    }

    handleClick = (event)  => {
        //this.props.productData.push(this.state)
        this.props.callbackUpdateProductData(this.state)
        //console.log(this.props.productData)
    }


    render() {
        return (
            <div className='mt-5 ml-5'>
                <table>
                    <tr>
                        <td>Product Name : </td>
                        <td>
                            <input onChange={this.handleChange} value={this.state.productName}  name='productName' className="form-control" type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Product id : </td>
                        <td>
                            <input onChange={this.handleChange} value={this.state.productId}  name='productId' className="form-control" type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Seller Name : </td>
                        <td>
                            <input onChange={this.handleChange} value={this.state.sellerName}  name='sellerName' className="form-control" type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Category : </td>
                        <td>
                            {/* <input onChange={this.handleChange} value={this.state.category}  name='category' className="form-control" type="text"></input> */}
                            <select name='category' onChange={this.handleChange}  className='form-control'>
                                <option value='Others'>Others</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Fruits'>Fruits</option>
                                <option value='Accesseries'>Accesseries</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>COD </td>
                        <td>
                        <div class="form-group form-check">
                            <input name='cod' onChange={this.handleChange}  type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Applicable?</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Qty </td>
                        <td>
                            <input name='qty'  onChange={this.handleChange} value={this.state.qty}  className="form-control" type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={this.handleClick} className='btn btn-primary' >Add</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default ProductForm