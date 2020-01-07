import React from 'react'

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            ids: '',
            desc: '',
            category: '',
            price: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleClick=()=>{
        this.props.callback(this.state)
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-success'>Enter the details</h1>
                <div className='row'>
                    <div className='form-group mx-2'>
                        <h5>Product Name</h5>
                        <input name='name' value={this.state.name} onChange={this.handleChange} className='input-control' type='text' />
                    </div>
                    <div className='form-group mx-2'>
                        <h5>Product ID</h5>
                        <input name='ids' value={this.state.ids} onChange={this.handleChange} className='input-control' type='text' />
                    </div>
                    <div className='form-group mx-2'>
                        <h5>Product Description</h5>
                        <input name='desc' value={this.state.desc} onChange={this.handleChange} className='input-control' type='text' />
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group mx-2'>
                        <h5>Product category</h5>
                        <input name='category' value={this.state.category} onChange={this.handleChange} className='input-control' type='text' />
                    </div>
                    <div className='form-group mx-2'>
                        <h5>Product Price</h5>
                        <input name='price' value={this.state.price} onChange={this.handleChange} className='input-control' type='text' />
                    </div>
                </div>
                <div onClick={this.handleClick} className='btn text-white col-4a' style={{ background: '#E3408C' }}>Submit</div>
            </div>
        )
    }

}

export default ProductForm