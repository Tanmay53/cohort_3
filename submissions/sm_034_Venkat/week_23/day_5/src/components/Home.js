import React from 'react'
import Table from './Table'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            depCity: [],
            arrCity: [],
            source: '',
            destination: '',
            bus: '',
            time: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.dropDownChange = this.dropDownChange.bind(this)
    }
    componentDidMount() {
        if (localStorage.w23d5_data) {
            let data = JSON.parse(localStorage.getItem("w23d5_data"))
            this.setState({ data: data })
            console.log("w23d5_data key is existed.!")
        }
        else {
            let array = []
            localStorage.setItem("w23d5_data", JSON.stringify(array))
            console.log("New w23d5_data is initialised in localstorage.!")
        }
        // if (localStorage.w23d5_depCity) {
        //     let data3 = JSON.parse(localStorage.getItem("w23d5_depCity"))
        //     this.setState({ depCity: data3 })
        //     console.log("w23d5_depCity key is existed.!")
        // }
        // else {
        //     let array = []
        //     localStorage.setItem("w23d5_depCity", JSON.stringify(array))
        //     console.log("New w23d5_depCity is initialised in localstorage.!")
        // }
        // if (localStorage.w23d5_arrCity) {
        //     let data4 = JSON.parse(localStorage.getItem("w23d5_arrCity"))
        //     this.setState({ arrCity: data4 })
        //     console.log("w23d5_arrCity key is existed.!")
        // }
        // else {
        //     let array = []
        //     localStorage.setItem("w23d5_arrCity", JSON.stringify(array))
        //     console.log("New w23d5_arrCity is initialised in localstorage.!")
        // }
    }
    // componentWillUpdate() {
    // }
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    dropDownChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        let flag = 0
        if (this.state.source !== '' && this.state.destination !== '' && this.state.bus !== '' && this.state.time !== '') {
            console.log(this.state.source + this.state.destination + this.state.bus)
            // let temp= this.state.source + this.state.destination+ this.state.bus
            // this.state.cities.map(each => {
            //     if (each.source + each.destination + each.bus === temp) flag = 1
            //     return flag
            // })
            // if (flag === 1) alert("The bus details already existed.!")
            // else {
            alert(this.state.source + ' ' + this.state.destination)
            let obj = {
                source: this.state.source,
                destination: this.state.destination,
                bus: this.state.bus,
                time: this.state.time,
            }
            console.log(obj)
            let data2 = this.state.data
            data2.push(obj)
            this.setState({
                data: data2,
                source: '',
                destination: '',
                bus: '',
                time: ''
            })
            localStorage.setItem("w23d5_data", JSON.stringify(data2))

            this.resetForm()

            let depPlaces = this.state.data.map(each => each.source)
            let depNames = this.removeDuplicates(depPlaces)
            let arrPlaces = this.state.data.map(each => each.destination)
            let arrNames = this.removeDuplicates(arrPlaces)
            this.setState({ depCity: depNames, arrCity: arrNames })
            // localStorage.setItem("w23d5_depCity", JSON.stringify(depNames))
            // localStorage.setItem("w23d5_arrCity", JSON.stringify(arrNames))
            // }
        }
        else alert("Please fill all the fields.!")
    }
    removeDuplicates = (arr) => {
        return arr.filter((a, b) => arr.indexOf(a) === b)
    };
    resetForm = () => {
        document.getElementById("dataForm").reset();
    }
    removeBusService = (string) => {
        let data = JSON.parse(localStorage.getItem("w23d5_data"))
        console.log(data.length)
        let outArr = []
        let flag = 0
        for (let i = 0; i < data.length; i++) {
            let temp= data[i].source+data[i].destination+data[i].bus
            if (temp === string) {
                flag = 1
            }
            else {
                outArr.push(data[i])
            }
        }
        if (flag === 1) {
            localStorage.setItem("w23d5_data", JSON.stringify(outArr))
            this.setState({ data: outArr })
        }
    }

        render() {
            return (
                <div id="parentFormDiv">
                    <p className="h3">Enter new-bus Details in this form</p>
                    <form onSubmit={this.submitForm} id="dataForm">
                        <label>
                            source
                        <select name="source" value={this.state.value} onChange={this.dropDownChange}>
                                <option value="#">--select--</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Vizag">Vizag</option>
                                <option value="Tirupati">Tirupati</option>
                                <option value="Pune">Pune</option>
                                <option value="Patna">Patna</option>
                                <option value="Jaipur">Jaipur</option>
                            </select>
                        </label>
                        <label>
                            destination
                        <select name="destination" value={this.state.value} onChange={this.dropDownChange}>
                                <option value="#">--select--</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Vizag">Vizag</option>
                                <option value="Tirupati">Tirupati</option>
                                <option value="Pune">Pune</option>
                                <option value="Patna">Patna</option>
                                <option value="Jaipur">Jaipur</option>
                            </select>
                        </label>
                        <label>
                            bus
                        <input type="text" name="bus" value={this.state.value} onChange={this.inputChange} />
                        </label>
                        <label>
                            Schedule
                        <input type="time" name="time" value={this.state.value} onChange={this.inputChange} />
                        </label>
                        <input type="submit" />
                    </form>
                    {this.state.data.length !== 0 && <Table data={this.state.data}
                        removeBusService={this.removeBusService}
                        depCities={this.state.depCity}
                        arrCities={this.state.arrCity} />
                    }
                </div>
            )
        }
    }

    export default Home