import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            busesPerPage: 1,
            buttonNums: []
        }
        this.showSelectedPage = this.showSelectedPage.bind(this)
    }

    paginationNumber = (e) => {
        let n = e.target.value
        console.log(n)
        let l = this.state.data.length
        if (n > l) alert(`we have ${l} buses,so enter a number between 0<--->${l}`)
        else {
            this.setState({
                [e.target.name]: n
            })
        }
    }

    paginationBtnsShow = () => {
        let perPageVal = this.state.busesPerPage
        let data = this.state.data
        let noOfButtons = Math.ceil(data.length / perPageVal)
        alert(`We have ${data.length} buses data,
        So no of pages are ${noOfButtons} .!`)
        let nums = []
        for (let n = 1; n <= noOfButtons; n++) {
            nums.push(n)
        }
        this.setState({ buttonNums: nums })

    }

    sourceBasedSort = (e) => {
        let departure = e.target.value
        if (departure === 'all') {
            this.setState({ data: this.props.data })
        }
        else {
            let soureWise = this.props.data.filter(each => {
                if (each.source === departure) return each
            })
            this.setState({ data: soureWise })
        }
    }

    destinationBasedSort = (e) => {
        let arrival = e.target.value
        if (arrival === 'all') {
            this.setState({ data: this.props.data })
        }
        else {
            let arrivalWise = this.props.data.filter(each => {
                if (each.destination === arrival) return each
            })
            this.setState({ data: arrivalWise })
        }
    }

    showSelectedPage = (n) => {
        console.log("selected page is " + n)
        let perPageVal= this.state.busesPerPage
        let arr = []
        let start = (n - 1) * perPageVal
        let end
        if ((start + perPageVal) >= this.props.data.length) end = this.props.data.length
        else end = start + perPageVal
        for (let k = start; k < end; k++) {
            arr.push(this.props.data[k])
        }
        this.setState({data:arr})
    }

    render() {
        return (
            <div id="tableParentDiv">
                <h2 id="tableH2">Buses Data in Table format</h2>

                <div id="paginationInputDiv">
                    <p>Enter number of Buses per page</p>
                    <label>
                        <b>Enter Number : </b>
                        <input type="number" name="busesPerPage" value={this.state.value}
                            onChange={this.paginationNumber} />
                    </label>
                    <button onClick={this.paginationBtnsShow}>Show Buttons</button>
                </div>
                <div id="paginationBtnsDiv">
                    {this.state.buttonNums.map(each =>
                        <button key={each} onClick={() => this.showSelectedPage(each)}>{each}</button>
                    )}
                </div>

                <div id="selectNamesDiv">
                    <p>Select Source</p>
                    <p>Select Destination</p>
                </div>
                <div id="optionsDiv">
                    <select onChange={this.sourceBasedSort}>
                        <option value="0">select</option>
                        <option value="all">Show All</option>
                        {this.props.depCities.forEach(each =>
                            <option value={each} key={each}>{each}</option>
                        )}
                    </select>

                    <select onChange={this.destinationBasedSort}>
                        <option value="0">select</option>
                        <option value="all">Show All</option>
                        {this.props.arrCities.forEach(each =>
                            <option value={each} key={each}>{each}</option>
                        )}
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Bus</th>
                            <th>Schedule</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(each => (
                            <tr key={each.source + each.destination + each.bus}>
                                <td>{each.source}</td>
                                <td>{each.destination}</td>
                                <td>{each.bus}</td>
                                <td>{each.time}</td>
                                <td>
                                    <button
                                        onClick={() => this.props.removeBusService(each.source + each.destination + each.bus)}>
                                        Edit
                                        (remove)
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.props.removeBusService(each.source + each.destination + each.bus)}>
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