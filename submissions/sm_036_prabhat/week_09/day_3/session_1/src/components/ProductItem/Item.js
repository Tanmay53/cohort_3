import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : '',
            id : ''
        }
    }

    componentDidMount(){
        var id = this.props.match.params.id
        console.log("Item" ,id)
        let item = this.props.data.find((item) => item.id == id)
        console.log("last",item)
            this.setState({
                arr : item,
                id: id
            })
    }
    componentDidUpdate(){
        let id = this.props.match.params.id
        if(id !== this.state.id){
            let item = this.props.data.find((item) => item.id == id)
            console.log("last",item)
            this.setState({
                arr : item,
                id: id
            })}
        }

    render() {
        console.log(this.props)
        console.log("arr",this.state.arr)
        // if(this.state.arr.length != 0)
            return (
                <div className="container">
                    <div className="card p-3 m-3 col-5">
                       <div> Id : {this.state.arr.id}</div>   
                       <div> Name : {this.state.arr.name}</div>                 
                       <div> Price : {this.state.arr.price}</div>   
                    </div>
                </div>
            )
        // else 
        //     return (
        //         <div className="container">
        //             <div className="card p-3 m-3 col-5">
        //                 <div>404 : Product Page Not Found</div>
        //             </div>
        //         </div>
        //     )  
    }
    
}
