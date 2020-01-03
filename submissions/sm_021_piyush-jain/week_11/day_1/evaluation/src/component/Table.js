import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <table class="table"><thead><tr><th>NAME</th><th>ID</th><th>DESCRIPTION</th><th>CATEGORY</th><th>Material</th><th>PRICE</th></tr></thead>
                <tbody >
                    {this.props.database.map((product, index) => (
                        <tr key={product.name + index} class="spacing" id="add" onClick={(e) => this.props.add(index)}>
                            <td>{product.name}</td>
                            <td>{product.id}</td>
                            <td>{product.descrip}</td>
                            <td>{product.category}</td>
                            <td>{product.material}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}
export default Table