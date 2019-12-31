import React, { Component } from 'react';
class ProductTable extends Component {
    constructor(props){
      super(props);
      this.state ={

      }
    }
    render() { 
        return ( <React.Fragment>
           
            <div className="col table-responsive-sm">
            <table className="table table-sm border">
              <thead className="bg-danger text-light">
                <tr className="">
                  <th className="p-2">Item Name</th>
                  <th className="p-2">Item Id</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Material</th>
                  <th className="p-2">Item Description</th>
                  <th className="p-2">Cost</th>
                </tr>
              </thead>
              <tbody className="bg-danger text-light">
                  {this.props.itemLs.map((ele) =>{
                    return (
                      <tr>
                        <td className="p-2">{ele.itemName}</td>
                        <td className="p-2">{ele.itemId}</td>
                        <td className="p-2">{ele.category}</td>
                        <td className="p-2">{ele.material}</td>
                        <td className="p-2">{ele.itemDesc}</td>
                        <td className="p-2">Rs {ele.price}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          </React.Fragment>
         );
    }
}
 
export default ProductTable;