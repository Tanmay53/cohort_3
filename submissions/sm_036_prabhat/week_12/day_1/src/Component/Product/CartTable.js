import React, { Component } from 'react'

export default class CartTable extends Component {
    constructor(props){
        super(props)
        this.state ={
            data : this.props.data
        }
    }

    selectCatogry = (e) => {
        let selectVal = e.target.value;
        console.log(selectVal);

        if(selectVal.length === 0){
            this.setState({
                data : this.props.data
            })
        }
        else {
            let filteredCatogry = this.props.data.filter((items,index)=>{
                return items.category === selectVal;
            })
            this.setState({
                data : filteredCatogry
            })
        }
    }

    render() {
         // let aaaa = this.state.data
        // let sum = 0
        // for(var i = 0; i < aaaa.length; i++){
        //     sum = aaaa(Number(aaaa.price[i]))
        // }
        // console.log(sum)
        console.log(this.state.data)
        return (
            <div>
                <table className="table m-5">
                    <thead className="thead-dark table-striped table-bordered">
                        <tr>
                            <th>Item Name</th>
                            <th>Item Id</th>
                            <th>Item Description</th>
                            <th>Item Category
                                <select onClick={this.selectCatogry} className="custom-select">
                                    <option value="">All</option>
                                    {this.props.data.map((items,index)=> <option value={items.category} key={items+index}>{items.category}</option>)}
                                </select>
                            </th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((items,index)=>
                        <tr key={items+index}>
                            <td>{items.itemName}</td>
                            <td>{items.itemId}</td>
                            <td>{items.itemDescription}</td>
                            <td>{items.category}</td>
                            <td>{items.price}</td>
                        </tr>
                        )}
                        <tr>
                            Total Cart value = 
                            {this.state.data.reduce((a,b)=>
                            {return a + Number(b.price)},0)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
