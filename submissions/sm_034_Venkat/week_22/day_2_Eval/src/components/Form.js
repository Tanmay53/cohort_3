import React from 'react';
import './Form.css';
import Table from './Table';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            countries: [],
            country: '',
            city: '',
            population: '',
            avgIncome: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.countryDropDown = this.countryDropDown.bind(this)
    }
    componentWillMount() {
        if (localStorage.w22d2_data) {
            let data = JSON.parse(localStorage.getItem("w22d2_data"))
            this.setState({ data: data })
            console.log("w22d2_data key is existed.!")
        }
        else {
            let array = []
            localStorage.setItem("w22d2_data", JSON.stringify(array))
            console.log("New w22d2_data is initialised in localstorage.!")
        }
        if (localStorage.w22d2_countries) {
            let data2 = JSON.parse(localStorage.getItem("w22d2_countries"))
            this.setState({ countries: data2 })
            console.log("w22d2_countries key is existed.!")
        }
        else {
            let array = []
            localStorage.setItem("w22d2_countries", JSON.stringify(array))
            console.log("New w22d2_countries is initialised in localstorage.!")
        }
    }
    // componentWillUpdate() {
    // }
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    countryDropDown = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        let flag = 0
        if (this.state.country !== '' && this.state.city !== '' && this.state.population !== '' && this.state.avgIncome !== '') {
            console.log(this.state.country + this.state.city)
            this.state.countries.map(each => {
                if (each.country + each.city === this.state.country + this.state.city) flag = 1
                return flag
            })
            if (flag === 1) alert("The city details already existed.!")
            else {
                alert(this.state.country + " " + this.state.city)
                let obj = {
                    country: this.state.country,
                    city: this.state.city,
                    population: this.state.population,
                    avgIncome: this.state.avgIncome,
                }
                console.log(obj)
                let newData = this.state.data
                newData.push(obj)
                this.setState({
                    country: '',
                    city: '',
                    population: '',
                    avgIncome: '',
                    allCiremoveCitys: newData
                })
                localStorage.setItem("w22d2_data", JSON.stringify(newData))

                this.resetForm()
                // console.log(this.state.data)

                let countries = this.state.data.map(each => each.country)
                let countryNames = this.removeDuplicates(countries)
                this.setState({ countries: countryNames })
                localStorage.setItem("w22d2_countries", JSON.stringify(countryNames))
            }
        }
        else alert("Please fill all the fields.!")
    }
    removeDuplicates = (arr) => {
        return arr.filter((a, b) => arr.indexOf(a) === b)
    };
    resetForm = () => {
        document.getElementById("dataForm").reset();
    }
    removeCity = (string) => {
        let filteredArr = this.state.data.filter(each => {
            let str = each.country + each.city
            if (str !== string) return each
        })
        console.log(filteredArr)
        this.setState({ data: filteredArr })
    }

    render() {
        return (
            <div id="parentFormDiv">
                <h1>Enter new-city Details in this form</h1>
                <form onSubmit={this.submitForm} id="dataForm">
                    <label>
                        Country
                        {/* <input type="text" name="country" value={this.state.value} onChange={this.inputChange} /> */}
                        <select name="country" value={this.state.value} onChange={this.countryDropDown}>
                            <option value="Japan">Japan</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="italy">Italy</option>
                            <option value="UK">UK</option>
                            <option value="South_Africa">South Africa</option>
                            <option value="Thailand">ThaiLand</option>
                            <option value="France">France</option>
                            <option value="Australia">Australia</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Germany">Germany</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    </label>
                    <label>
                        City
                        <input type="text" name="city" value={this.state.value} onChange={this.inputChange} />
                    </label>
                    <label>
                        Population
                        <input type="text" name="population" value={this.state.value} onChange={this.inputChange} />
                    </label>
                    <label>
                        Avg Income
                        <input type="text" name="avgIncome" value={this.state.value} onChange={this.inputChange} />
                    </label>
                    <input type="submit" id="formSubmitBtn" />
                </form>
                {this.state.data.length !== 0 && <Table data={this.state.data}
                    removeCity={this.removeCity} countries={this.state.countries} />}
            </div>
        )
    }
}

export default Form;