import React, {Component} from "react";

class ProductTable extends Component {
    // constructor(props) {
    //     super(props)
    // }

    tableColumns = (allProducts) => {
        let cols = Object.keys(allProducts[0]).map((cols, index) => {
            return (
                <th key={index}>{cols}</th>
            )
        })
        // console.log(cols)

        return cols
    }

    tableRows = (allProducts) => {
        let rows = allProducts.map((product, index1) => {
            return (
                <tr key={index1}>
                    {
                        Object.values(product).map((val, index2) => {
                            return <td key={index2}>{val}</td>
                        })
                    }
                </tr>
            )
        })

        return rows
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <p>Table</p>
                <table>
                    <thead>
                        <tr>
                            {this.tableColumns(this.props.allProducts)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRows(this.props.allProducts)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable