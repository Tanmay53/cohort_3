import React from 'react'
export default class ProductDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    componentDidMount(){
    let clickedName=this.props.match.params.name
    console.log(clickedName)
    let clickedProduct=this.props.info.filter(e=>e.name==clickedName)[0]
    console.log(clickedProduct)
    this.setState({
        data:clickedProduct
    })
    }
    render(){
        return(
            <div className="text-center container">
            <p className="display-4 my-4">{this.state.data.name}</p>
            <img className="my-3" src={this.state.data.image} alt=""/>
            <p className="h5">{this.state.data.details}</p>
            </div>
        )
    }
}