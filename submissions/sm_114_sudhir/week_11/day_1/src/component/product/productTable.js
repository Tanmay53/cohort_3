import React from 'react';

class ProductTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // newFilterProd = []
        }
    }
    filterTable = (e) => {
        let filterList = [...this.props.prod]
        let filteredList = filterList.filter(function(val){
            if(e.target.value == val.category){
                return val
            }
        });
        this.setState(() => ({
            newFilterProd : filteredList
        }));

        console.log(filterList)
        alert(e.target.value)
    }

    render () {
        return(
            <div>
                {/* filter dropdown */}
                <div>
                    <label><h6 className="font-weight-bold">Filteer By Category</h6></label>
                    <select onChange={this.filterTable} className="form-control col-4">
                        <option value="bedroom">Bed Room</option>
                        <option value="living">Living Room</option>
                        <option value="dining">Dinnig Appliances</option>
                    </select>
                </div>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item Id</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Material</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.prod.map(val => {
                            return(
                                <tr>
                                    <td scope="col">{val.itemId}</td>
                                    <td scope="col">{val.itemName}</td>
                                    <td scope="col">{val.itemDesc}</td>
                                    <td scope="col">{val.category}</td>
                                    <td scope="col">{val.material}</td>
                                    <td scope="col">{val.price}</td>
                                </tr>
                            )
                        })}

                        {/* {this.state.newFilterProd.map(val => {
                            return (
                                <tr>
                                    <td scope="col">{val.itemId}</td>
                                    <td scope="col">{val.itemName}</td>
                                    <td scope="col">{val.itemDesc}</td>
                                    <td scope="col">{val.category}</td>
                                    <td scope="col">{val.material}</td>
                                    <td scope="col">{val.price}</td>
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;