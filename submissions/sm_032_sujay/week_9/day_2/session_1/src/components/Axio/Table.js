import React, { Component } from 'react'
// import Search from "./Search"


export default class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayData: this.props

        }
        console.log(this.props.displayData)
    }

    componentDidMount() {


    }



    render() {
        return (
            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Profile</th>

                            <th> Display Picture</th>
                            <th> Repos</th>
                            <th> </th>
                            <th> </th>

                        </tr>


                    </thead>

                    <tbody>




                    </tbody>
                </table>
            </div>
        )
    }
}
