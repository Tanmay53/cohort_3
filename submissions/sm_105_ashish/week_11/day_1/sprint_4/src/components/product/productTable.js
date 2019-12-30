import React from 'react';
class TableData extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className="col-7 mx-auto">
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <select  onChange={this.props.filter} className="form-control my-2" name="Category">
                        <option disabled>Filter By Category</option>
                        <option>All</option>
                        <option>Bedroom</option>
                        <option>Living Room</option>
                        <option>Dining</option>
                        <option>Appliances</option>
                    </select>
                </div>
                <div className="col-lg-5 col-sm-12">
                <h1 className="text-center">Table</h1>
                </div>
                <div className="col-lg-3 col-sm-6">
                <select onChange={this.props.filterM} className="form-control my-2">
                        <option>Filter by Material</option>
                        <option>Teak</option>
                        <option>Oak</option>
                        <option>Walnut</option>
                        <option>Maple</option>

                    </select>
                </div>
            </div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Material</th>
                        <th scope="col">price</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((ele)=>{
                        return(
                            <tr>
                                <td>{ele.Name}</td>
                                <td>{ele.Category}</td>
                                <td>{ele.Material}</td>
                                <td>{ele.Price}</td>
                                <td><button>Add to cart</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}
export default TableData;