import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            citiesPerPage: 5,
            noOfButtons: 1
        }
    }

    paginationNumber = (e) => {
        let n = e.target.value
        console.log(n)
        let l = this.state.data.length
        if (n > l) alert(`we have ${l} rows, so enter a number below ${l}.!`)
        else {
            this.setState({
                [e.target.name]: n
            })
        }
    }

    paginationBtnsShow=() => {
        let perPageVal= this.state.citiesPerPage
        let data= this.state.data
        let noOfButtons= Math.ceil(data.length/perPageVal)
        alert(`We have ${data.length} cities data,
        So no of pages are ${noOfButtons} .!` )
        this.setState({noOfButtons: noOfButtons})
    }

    countryNameBasedSort = (e) => {
        let countryName = e.target.value
        if (countryName === 'all') {
            this.setState({ data: this.props.data })
        }
        else {
            let countryWiseArr = this.props.data.filter(each => {
                if (each.country === countryName) return each
            })
            this.setState({ data: countryWiseArr })
        }
    }
    avgIncomeBasedSort = (e) => {
        let sortType = e.target.value
        let sortedArr = []
        if (sortType === "increasing") {
            sortedArr = this.props.data.sort((a, b) => {
                if (Number(a.avgIncome) > Number(b.avgIncome)) {
                    return 1;
                }
                else return -1;
            })
            this.setState({ data: sortedArr })
        }
        else {
            sortedArr = this.props.data.sort((a, b) => {
                if (Number(a.avgIncome) > Number(b.avgIncome)) {
                    return -1;
                }
                else return 1;
            })
            this.setState({ data: sortedArr })
        }
    }

    populationBasedSort = (e) => {
        let sortType = e.target.value
        let sortedArr = []
        if (sortType === "increasing") {
            sortedArr = this.props.data.sort((a, b) => {
                if (Number(a.population) > Number(b.population)) {
                    return 1;
                }
                else return -1;
            })
            this.setState({ data: sortedArr })
        }
        else {
            sortedArr = this.props.data.sort((a, b) => {
                if (Number(a.population) > Number(b.population)) {
                    return -1;
                }
                else return 1;
            })
            this.setState({ data: sortedArr })
        }
    }

    render() {
        return (
            <div id="tableParentDiv">
                <h2 id="tableH2">Cities Data in Table format</h2>
                <div id="paginationInputDiv">
                    <p>Enter number of Cities per page</p>
                    <label>
                        <b>Enter Number : </b>
                        <input type="number" name="citiesPerPage" value={this.state.value}
                            onChange={this.paginationNumber} />
                    </label>
                    <button onClick={this.paginationBtnsShow}>Show Buttons</button>
                </div>
                <div id="paginationBtnsDiv">
                    
                </div>
                <div id="selectNamesDiv">
                    <p>Select Country</p>
                    <p>Avg Income Sort</p>
                    <p>Population Sort</p>
                </div>
                <div id="optionsDiv">
                    <select onChange={this.countryNameBasedSort}>
                        <option value="0">select</option>
                        <option value="all">Show All</option>
                        {this.props.countries.map(each =>
                            <option value={each} key={each}>{each}</option>
                        )}
                    </select>

                    <select onChange={this.avgIncomeBasedSort}>
                        <option value="0">AvgIncome</option>
                        <option value="increasing">Ascending</option>
                        <option value="decreasing">Descending</option>
                    </select>

                    <select onChange={this.populationBasedSort}>
                        <option value="0">Population</option>
                        <option value="increasing">Ascending</option>
                        <option value="decreasing">Descending</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Population</th>
                            <th>Avg Income</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(each => (
                            <tr key={each.country + each.city}>
                                <td>{each.country}</td>
                                <td>{each.city}</td>
                                <td>{each.population}</td>
                                <td>{each.avgIncome}</td>
                                <td>
                                    <button
                                        onClick={() => this.props.removeCity(each.country + each.city)}>
                                        Edit
                                        (remove)
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.props.removeCity(each.country + each.city)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table