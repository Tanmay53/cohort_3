import React from "react"
import Table from './CartTable'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr: [],
            product :{
            Name : "",
            Id :"",
            Desc:"",
            Cat:"",
            Price:""
         },
         total:0

        }
    }

    manageChange = (e) => {
        let myproduct={...this.state.product,[e.target.name] : e.target.value}
        this.setState({
            product:myproduct
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let myarr=[...this.state.arr,{...this.state.product}]
        this.setState({
            arr:myarr
        });
    }

    // showAll = (e) => {
    //     e.preventDefault();
    //     this.props.showData(this.state.arr)
    // }


    render() {
        return (
            <div className = "container">
                <div className ="row">
                    <div className ="col-4">
                        <form>
                            <label htmlFor = "first">Item Name</label>
                            <input id ="first"
                                type= "text"
                                onChange = {this.manageChange}
                                name ="Name"
                                className ="form-control"
                            />
                            <label htmlFor = "sec">Item Id</label>
                            <input id ="sec"
                                type= "text"
                                onChange = {this.manageChange}
                                name ="Id"
                                className ="form-control"
                            /> 
                            <label htmlFor = "third">Item description</label>
                            <input id ="third"
                                type= "text"
                                onChange = {this.manageChange}
                                name ="Desc"
                                className ="form-control"
                            />
                            <label htmlFor = "four">Item Category</label>
                            <input id ="four"
                                type= "text"
                                onChange = {this.manageChange}
                                name ="Cat"
                                className ="form-control"
                            /> 
                            <label htmlFor = "five">Item Price</label>
                            <input id ="five"
                                type= "text"
                                onChange = {this.manageChange}
                                name ="Price"
                                className ="form-control"
                            />
                            <button onClick={this.handleSubmit} type ="submit" className ="btn btn-primary mt-3">Submit</button>
                            <button onclick = {this.showAll} type = "submit" className ="btn btn-primary ml-3 mt-3">Show All</button>
                        </form>                
                    </div>
                    <div className="col-8">
                        <Table arrd={this.state.arr}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;