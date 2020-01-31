import React from 'react'
import { Link } from 'react-router-dom'

class Product2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            qty:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    sendData=()=>{
        this.props.parentCallback2([this.props.datas[0].name,this.state.qty,Number((this.props.datas[0].price))*Number((this.state.qty))])
        alert('Your item is successfully added to the Cart')
    }
    render(){
        return(
            <div className='text-center'>
                {
                    this.props.datas.map(e=>
                        <div key={e.id} className='container col-md-6 col-12'>
                         <div className="card">
                             <div className='d-flex flex-md-row flex-column'>
                                 <div className='col'>
                                    <img src={`${e.src}`} className="card-img-top" alt="img" />
                                 </div>
                                 <div className='col'>
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className='card-text'>₹ {e.price} /Kg</p>
                                    <p className="card-text">{e.desc}</p>
                                    <hr></hr>
                                    <div className='d-flex'>
                                        <p className='col-3 text-center my-auto'>Kgs</p>
                                        <input type='number' name='qty' onChange={this.changeHandler} value={this.state.qty} className='col-4 mr-2 ml-0'/>
                                        <div onClick={this.sendData} className='col-4 btn btn-info'>Add to cart</div>
                                    </div>
                                 </div>
                             </div>
                            </div>
                        </div>      
                )}
                <div className='my-5'></div>
                <Link to='/shop'><div className='btn btn-success'>Continue Shopping</div></Link>
            </div>
        )
    }
}

export default Product2