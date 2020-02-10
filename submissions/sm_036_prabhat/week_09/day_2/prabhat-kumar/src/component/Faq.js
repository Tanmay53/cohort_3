import React, { Component } from 'react'

export default class Faq extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bg-secondary bd-sidebar position-static ">
                        <ol className="h3 p-5">Most Frequent Questions About Cashback
                            <ul className="text-white h5 p-3">
                                <li>Cashbabk</li>
                                <li>Limt Amt</li>
                                <li>Max Amt</li>
                                <li>Min Amt</li>                    
                            </ul>
                        </ol>
                    </div>
                    <div className="col-10"></div>
                </div>
            </div>
        )
    }
}
