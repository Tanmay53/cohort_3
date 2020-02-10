import React from 'react'
import "./form.css"
import Card from './card';

class Form extends React.Component {
    constructor(props) {
        super(props)

        //local storage
        this.state =
            {

                name: '',
                summary: '',
                listActor: [],
                imgurl: '',
                rating: '',
                year: '',
                language: ''

            }
        this.handleInput = this.handleInput.bind(this)
    }
    //function to handle input data
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //function to handle submit data
    handleSubmit = (event) => {
        event.preventDefault()
        alert("Record created successfully in console")
        console.log(this.state.name)
        console.log(this.state.summary)
        console.log(this.state.listActor)
        console.log(this.state.imgurl)
        console.log(this.state.rating)
        console.log(this.state.year)
        console.log(this.state.language)


        let obj = {

            name: this.state.name,
            summary: this.state.summary,
            listActor: this.setState({ listActor: [...this.state.listActor] }),
            imgurl: this.state.imgurl,
            rating: this.state.rating,
            year: this.state.year,
            language: this.state.language
        }

    }
    render() {
        return (
            <fieldset>

                <form onSubmit={this.handleSubmit}>
                    <legend>Enter the details</legend>
                    <label>Enter movie name</label>
                    <input type="text" className="form-control" placeholder="enter movie name" name="name" value={this.state.name} onChange={this.handleInput} onInvalid="alert('please enter the name')" required></input>
                    <label>Enter summary details</label>
                    <input type="text" className="form-control" placeholder="enter movie summary" name="summary" value={this.state.summary} onChange={this.handleInput} onInvalid="alert('please fill summary details')" required></input>
                    <label>Enter actor list</label>
                    <input type="text" className="form-control" placeholder="enter actors name" name="listActor" value={this.state.listActor} onChange={this.handleInput} onInvalid="alert('please enter the list of actors')" required></input>
                    <label>Enter movie image url</label>
                    <input type="text" className="form-control" placeholder="enter movie image url" name="imgurl" value={this.state.imgurl} onChange={this.handleInput} onInvalid="alert('please enter the image url')" required></input>
                    <label>Enter movie rating</label>
                    <input type="text" className="form-control" placeholder="enter rating" name="rating" value={this.state.rating} onChange={this.handleInput} onInvalid="alert('please enter the rating')" required></input>
                    <label>Enter year of release</label>
                    <input type="text" className="form-control" placeholder="enter year" name="year" value={this.state.year} onChange={this.handleInput} onInvalid="alert('please enter the year')" required></input>
                    <label>Enter movie language</label>
                    <input type="text" className="form-control" placeholder="enter language" name="language" value={this.state.language} onChange={this.handleInput} onInvalid="alert('please enter the language')" required></input><br></br>
                    <button type="submit">create</button>
                    {/* <App data={obj}/> */}
                </form>
            </fieldset>
        )
    }

}
export default Form