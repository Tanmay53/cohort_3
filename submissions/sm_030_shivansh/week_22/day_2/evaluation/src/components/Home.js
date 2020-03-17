import React, { Component } from 'react'
import { connect } from "react-redux";

export class Home extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="container">
                <h1 className="text-center my-5 text-danger">Home Page</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.product.map((ele, index) =>
                            <tr className="text-center" key={index}>
                                <td>{ele.product}</td>
                                <td>{ele.price}</td>
                                <td>{ele.categories}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        product: state.product,
    }
}

export default connect(mapStateToProps, null)(Home)
