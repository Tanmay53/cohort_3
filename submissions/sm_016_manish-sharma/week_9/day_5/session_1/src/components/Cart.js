import React from 'react'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            total:0,
            coupon:'',
            couponFlag:false
        }
    }
    componentDidMount=()=>{
        this.setState({
            total:this.props.cartData.array.reduce((a,e)=>{return a+e[2]},0)
        })
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    clickHandler=()=>{
        this.setState({
            couponFlag:true
        })
    }

    render(){
        // console.log(this.props.cartData)
        return(
            <div>
                <div className='display-2'>My Cart</div>
                <input type='text' className='m-3' onChange={this.changeHandler} name='coupon' value={this.state.coupon} />
                <div onClick={this.clickHandler} className='m-3 btn btn-info'>Add Coupon Code</div>
                <div className='my-4'></div>
                <table className='table shadow'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.cartData.array.map(e=>
                                <tr key={e[2]}>
                                    <td>{e[0]}</td>
                                    <td>{e[1]} kg</td>
                                    <td>₹ {e[2]}</td>
                                </tr>
                        )
                        }
                    </tbody>
                    
                </table>
                <br></br>
                <div className='mx-4'>
                   <div className='h2'>Total Price: ₹ {this.state.total}</div>
                   <div className='h2'>GST (12%) : ₹ {(this.state.total/100)*12}</div>
                   {
                       (this.state.coupon=='VM202MAX' && this.state.couponFlag==true ? 
                       (<>
                       <div className='h2'>Discount : - ₹ {(this.state.total/100)*10}</div>
                       <div className='h2'>Final Price : ₹ {(this.state.total+((this.state.total/100)*12))-((this.state.total/100)*10)} </div>
                       </>)
                       :
                       <div className='h2'>Final Price : ₹ {this.state.total+((this.state.total/100)*12)} </div>
                       )
                   }
                </div>
            </div>
        )
    }
}

export default Cart