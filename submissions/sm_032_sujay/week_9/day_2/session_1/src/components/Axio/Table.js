import React, { Component } from 'react'


export default class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: this.props.type,
            searchData: this.props.searchData,
            progLang: this.props.progLang,
            displayData: [],
            data: []

        }

    }

    render() {
        console.log("props table", this.props)
        console.log("Trying to access axios response", this.props.displayData)

        return (
            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Score</th>
                            <th> Display Picture</th>
                            <th>Login </th>
                            <th> Type</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.props.displayData && this.props.displayData.map((e) => {
                            return (

                                <tr key={e.id}>
                                    <td>{e.id} </td>
                                    <td>{e.score} </td>
                                    <td ><img src={e.avatar_url} alt="Pic" className="img-rounded" style={{ width: "80px" }} /></td>
                                    <td>{e.login} </td>
                                    <td> {e.type} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// its an axios call. you need to waiit for it to load the data, hence 2 times