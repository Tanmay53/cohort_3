import React, { Component } from 'react'

export default class CartTable extends Component {
    constructor(props){
        super(props)
        this.state ={
            cartdata : this.props.cartdata
        }
    }

    selectCatogry = (e) => {
        let selectValue = e.target.value;
        console.log(selectValue);

        if(selectValue.length === 0){
            this.setState({
                cartdata : this.props.cartdata
            })
        }
        else {
            let categoryfilter = this.props.cartdata.filter((items,i)=>{
                return items.category === selectValue;
            })
            this.setState({
                cartdata : categoryfilter
            })
        }
    }

    render() {
   
        console.log(this.state.cartdata)
        return (
            <div>
                {/* CART ITEM IN TABULAR FORM */}
                <table className="table mt-5">
                    <thead className="thead-dark table-striped table-bordered">
                        <tr>
                            <th>ITEM NAME</th>
                            <th>ITEM ID</th>
                            <th>ITEM DESC</th>
                            <th>ITEM CATEGORY
                                <select onClick={this.selectCatogry} className="custom-select">
                                    <option value="">All</option>
                                    {this.props.cartdata.map((cartitem,i)=> 
                                    <option value={cartitem.category} key={cartitem+i}>{cartitem.category}</option>)}
                                </select>
                            </th>
                            <th>PRICE</th>
                            <th>DELETE</th>
                            <th>TOTAL PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cartdata.map((cartitem,i)=>
                        <tr key={cartitem.itemId}>
                            <td>{cartitem.itemName}</td>
                            <td>{cartitem.itemId}</td>
                            <td>{cartitem.itemDescription}</td>
                            <td>{cartitem.category}</td>
                            <td>{cartitem.price}</td>
                            <td><button onClick={()=> this.props.del(cartitem.itemId)}> DELETE</button></td> 
                            <td> {this.state.cartdata.reduce((a,b)=>
                            {return a + parseInt(b.price)
                            },0)}</td>
                        </tr>
                        )}
                        <tr className="border text-center border-dark bg-info p-5 m-5">
                            {/* ADDING THE PRICE OF CART */}
                           <h3>Total Cart value is = 
                            {this.state.cartdata.reduce((a,b)=>
                            {return a + parseInt(b.price)
                            },0)}</h3>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
