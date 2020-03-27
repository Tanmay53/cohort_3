import React, { Component } from "react";
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { country: "India", city: "Delhi", population: "1564948", avgIncome: "4567", id: "1" },
                { country: "USA", city: "New York", population: "1564948", avgIncome: "4567", id: "2" },
                { country: "Brazil", city: "Rio de Janeiro", population: "1564948", avgIncome: "84567", id: "3" }
            ],
            country: "",
            updatecountry: "",
            city: "",
            updateCity: "",
            population: "",
            updatePopulation: "",
            avgIncome: "",
            updateAvgIncome: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateChange = this.updateChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // functions
    delete(e) {
        this.state.items.splice(this.state.items.indexOf(e), 1);
        this.setState({ items: this.state.items });
    }
    updateChange(e) {
        this.setState({ [e.target.value]: e.target.value });
        // this.setState({ updateCity: e.target.value });
        // this.setState({ updatePopulation: e.target.value });
        // this.setState({ updateAvgIncome: e.target.value });
    }
    update(e) {
        e.showHide = true;
        this.setState(e);
    }
    save(e) {
        const updateItem = {
            // country: this.state.updatecountry ? this.state.updatecountry : e.country,
            // city: this.state.updateCity ? this.state.updateCity : e.city,
            // population : this.state.population ? this.updatePopulation : e.population,
            avgIncome : this.state.avgIncome ? this.state.updateAvgIncome : e.avgIncome,
            id: Date.now()
        };
        // this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
        this.state.items.splice(this.state.items.indexOf(e),1, updateItem);
        this.setState({ items: this.state.items });
        // this.setState({ [e.target.value]: e.target.value });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // this.setState({city: e.target.value});
        // this.setState({population: e.target.value});
        // this.setState({avgIncome: e.target.value});
    }
    handleSave(e){
        this.setState({ [e.target.value]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.country.length && !this.state.city.length && !this.state.population.length && !this.state.avgIncome.length) {
            return;
        }
        const newItem = {
            country: this.state.country,
            city: this.state.city,
            population: this.state.population,
            avgIncome: this.state.avgIncome,
            id: Date.now(),
        };
        this.state.items.unshift(newItem);
        this.setState({ items: this.state.items });
    }

    render() {
        return (
            <div>
                {/* <h1>Country City List</h1> */}

                <form onSubmit={this.handleSubmit}>
                    <div className="border border-success p-5">
                        <div className="row">
                            <div className="col-5">
                                <h3> Country Name :</h3>
                                <input
                                    type="text"
                                    value={this.state.country}
                                    name="country"
                                    placeholder="Enter Country Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-5">
                                <h3> City Name : </h3>
                                <input
                                    type="text"
                                    value={this.state.city}
                                    name="city"
                                    placeholder="Enter City Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <h3> Population : </h3>
                                <input
                                    type="number"
                                    value={this.state.population}
                                    name="population"
                                    placeholder="Enter population"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-5">
                                <h3>Avg Income</h3>
                                <input
                                    type="number"
                                    value={this.state.avgIncome} 
                                    name="avgIncome"
                                    placeholder="Enter avg income"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn save-btn">
                            Save
                        </button>
                    </div>
                </form>

                {/*  Render Data */}

                <table className="crud-table">
                    <thead>
                        <tr>
                            <th>si no.</th>
                            <th>
                            <select className="bg-success text-white" name="country" id="countrySelect">
                                <label for="country name">Choose a Country :</label>
                                <option value="">Choose a Country :</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="brazil">Brazil</option>
                                <option value="china">China</option>
                            </select>
                            </th>
                            <th>City Name</th>
                            <th>Population</th>
                            <th>Avg Income</th>
                            <th>Update</th>
                            <th>Delete</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={item.id + index}>
                                <td>{index+1}</td>
                                <td className={item.showHide ? "hidden" : ""}> {item.country} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.city} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.population} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.avgIncome} </td>
                                <td className={item.showHide ? "" : "hidden"}>

                                {/* update input */}
                                    <input
                                        type="text"
                                        onChange={this.updateChange}
                                        // onChange={this.handleSave}
                                        name="avgIncome"
                                        defaultValue={item.avgIncome}
                                        placeholder="Enter new Average income"
                                    />
                                </td>
                                
                                <td>
                                    <button
                                        className={item.showHide ? "hidden" : "btn save-btn"}
                                        onClick={() => this.update(item)}
                                    >
                                        Update
                  </button>

                                    <button
                                        className={item.showHide ? "btn save-btn" : "hidden"}
                                        onClick={() => this.save(item)}
                                    >
                                        Save
                  </button>
                                </td>
                                    <td>
                                    <button
                                        className="btn del-btn"
                                        onClick={() => this.delete(item)}
                                    >
                                        Delete
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Home;