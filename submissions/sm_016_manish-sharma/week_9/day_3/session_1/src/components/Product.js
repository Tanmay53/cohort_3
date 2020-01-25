import React from 'react'

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
    }
    componentDidMount=()=>{
        let flt=this.props.fruits.filter(e=> e.id==this.props.match.params.id)
        this.setState({
            datas:flt
        })
    }
    // dataxx=this.props.fruits.filter(e=> e.id==this.props.match.params.id)
    render(){
        // console.log(this.state.datas)
        // console.log('Product match',this.props)
        return(
            <div>
                {
                    this.state.datas.map(e=>
                        <div key={e.id} className='container col-md-6 col-12'>
                         <div className="card">
                             <div className='d-flex row'>
                                 <div className='col'>
                                    <img src={`/${e.src}`} className="card-img-top" alt="" />
                                 </div>
                                 <div className='col'>
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className='card-text'>₹ {e.price} /Kg</p>
                                    <p className="card-text">{e.desc}</p>
                                    <hr></hr>
                                    <div className='row'>
                                        <p className='col-3 text-right'>Kgs</p>
                                        <input type='number' className='col-4 mr-2 ml-0'/>
                                        <div className='col-4 btn btn-info'>Add to cart</div>
                                    </div>
                                 </div>
                             </div>
                            </div>
                        </div>      
                )}
            </div>
        )
    }
}

export default Product