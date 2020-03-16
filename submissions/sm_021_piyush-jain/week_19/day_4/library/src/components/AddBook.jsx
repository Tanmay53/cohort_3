import React from 'react'
import axios from "axios"
class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [],
            chosen: [],
            pub: "",
            new: "",
            temp: "btn btn-danger"
        }
    }
    // getting all  categories available
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/allCategory")
            .then(res => this.setState({
                category: res.data
            }))
    }

    // add all the chosen categories

    handleCategory = async (category,index) => {
        var tempp = "btn btn-primary"
        console.log(category,index)
        this.setState({
            chosen: [...this.state.chosen, category],
            temp: tempp
        })
    }
    // function to change the input fields
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // search for publisher presence
    searchsubPublisher = async (e) => {
        await axios.get(`http://127.0.0.1:5000/searchPub/${this.state.pub}`)
            .then(res => this.setState({
                pub: res.data["message"]
            }))
    }

    // function to add a book for all the categories
    handleAdd = async () => {
        for (var i = 0; i < this.state.chosen.length; i++) {
            await axios({
                method: 'POST',
                url: "http://127.0.0.1:5000/addBook",
                data: {
                    book: this.state.new,
                    publisher: this.state.pub,
                    category: this.state.chosen[i]
                }
            })
                .then(res => console.log(res))
        }
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">

                    </div>{this.state.category.map((item, index) => <button key={index} class={` ${this.state.temp} m-3`} onClick={() => this.handleCategory(item.id, index)}>{item.name}</button>)}
                </div>
                <input type="text" placeholder="Enter a new Book" name="new" style={{ "borderColor": "red" }} onChange={this.handleChange} class="m-3" />
                {/* <div>
                    <input type="text" name="pub" class="form-control" placeholder="Enter Publisher Search" onChange={this.handleChange} />
                    <button onClick={this.searchsubPublisher} class="btn btn-primary">Search Publisher</button>
                    </div> */}


                <div class="input-group m-3">
                    <div class="input-group-prepend">
                        <input type="text" name="pub" class="form-control" placeholder="Enter Publisher Search" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.searchsubPublisher} class="btn btn-primary">Search Publisher</button>
                </div>

                {/* <div>
                    <input type="text" name="pub"placeholder={this.state.pub} class="form-control" value={this.state.pub} onChange={this.handleChange} />
                <button onClick={this.handlePublisher}  class="btn btn-primary">Search Publisher</button>
                </div>
                <button onClick={this.handleAdd}  class="btn btn-primary text-white">ADD</button> */}

                <div class="input-group m-3">
                    <div class="input-group-prepend">
                        <input type="text" name="pub" placeholder={this.state.pub} class="form-control" value={this.state.pub} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleAdd} class="btn btn-primary text-white">Add Book</button>
                </div>



            </React.Fragment>
        )
    }
}
export default Author
