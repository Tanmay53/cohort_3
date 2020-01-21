import React, { Component } from 'react';
import { Link ,Route } from "react-router-dom";
import Item from "./Item";


class ProductItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            Men : [{name : "Shirt", price : 500, id : 0},{name : "Pant", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            Women : [{name : "Top", price : 500, id : 0},{name : "Jeans", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            Unisex : [{name : "Top", price : 500, id : 0},{name : "Jeans", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            arr : [],
        }
    }

    componentDidMount(){
        let type = this.props.match.params.type
        console.log(type)
        let data = this.state
        for(let key in data){
            if(key.toLowerCase() === type){
                this.setState({
                    arr : data[key]
                })
                break
            }
        }
    }
    
    render() {
        console.log("product" , this.props)
        console.log("Arr data" ,this.state.arr)

        console.log(this.props.match.url)
        if(this.state.arr.length !== 0)
            return (
                <React.Fragment>
                    <div className="container">
                        {this.state.arr.map(item => 
                        <div className="card p-3 m-3 col-5" key={item.name}>
                            <Link to= {`${this.props.match.url}/${item.id}`}><div> Name : {item.name}</div></Link>                  
                        </div>
                        )}
                    </div>
                    <Route path = {`${this.props.match.path}/:id`} render = {(props) => <Item {...props} data = {this.state.arr}/>} />
                </React.Fragment>
            )
        else 
        return (
            <div className="container">
                <div className="card p-3 m-3 col-5">
                    <div>404 : Product Page Not Found</div>
                </div>
            </div>
        )
    }
}

export default ProductItem;
