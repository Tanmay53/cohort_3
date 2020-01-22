import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            Men : [{name : "Stirt", price : 500, id : 0},{name : "Pant", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            Women : [{name : "Top", price : 500, id : 0},{name : "Jeans", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            Unisex : [{name : "Top", price : 500, id : 0},{name : "Jeans", price : 1500, id : 1},{name : "Tshirt", price : 800, id : 2}],
            arr : []
        }
    }

    componentDidMount(){
        let obj = {...this.state}
        delete obj.arr;
        this.setState({
            arr : Object.keys(obj)
        })
    }

    render() {
        // console.log(this.state.arr)
        // console.log("url",this.props);
        return (
            <React.Fragment>
                <div className="container">
                <h1 className="text-center">Clothing Categories</h1>
                    <ul className="h3">
                        {this.state.arr.map((item,index) => <Link key={index} to = {`${this.props.match.url}/${item.toLowerCase()}`}><li>{item}</li></Link>)}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
