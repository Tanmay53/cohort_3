import React, { Component } from 'react'

export class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // movie Details
            form: {
                movieName: "",
                summary: "",
                actors: "",
                rating: "",
                year: "",
                language: "",
                moviePoster: "",
                checkBox: ""

            }
        }
    }

    // For new Data
    inputChange = (e) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    Click = (e) => {
        e.preventDefault()
        const { movieName, summary, actors, rating, year, language } = this.state.form
        if (movieName == "" || summary == "" || actors == "" || year == "" || language == "" || rating == "") {
            alert("Please fill the empty box")
        }
        // else if(checkBox == ""){
        //     alert("Plese tick on Checkbox")
        // }
        else {
            var movData = JSON.parse(localStorage.getItem("data"))
            if (movData == null) {
                movData = []
            }

            movData.push(this.state.form);


            localStorage.setItem("data", JSON.stringify(movData))
        }
    }

    

    render() {
        var all_data = JSON.parse(localStorage.getItem("data"))
        console.log(all_data)
        // filter
        return (
            <div className="mt-3">
                <div className="rounded-pill bg-light p-5">
                    <h1 className="text-center">Movie Details Form</h1>
                    {/* Movie Details form */}
                    <form>
                        <div className="row p-3">
                            <div className="col">
                                <input type="text" className="form-control" onChange={this.inputChange} name="movieName" placeholder="Movie Name" />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" onChange={this.inputChange} name="year" placeholder="Release Year" />
                            </div>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Poster link</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" name="moviePoster" placeholder="Movie poster link" onChange={this.inputChange} aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="form-group text-center">
                            <label for="exampleFormControlTextarea1 ">Movie Reviews</label>
                            <textarea className="form-control" onChange={this.inputChange} id="summary" name="summary" rows="3"></textarea>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" onChange={this.inputChange} name="language" placeholder="Movie Language" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" onChange={this.inputChange} name="actors" placeholder="Movie Actors" />
                            </div>
                        </div>
                        <div className="form-row align-items-center p-3">
                            <h5 className="p-5 m-3">Rating of the Movie :</h5>
                            <div className="col-auto my-1">
                                {/* rating of the Movie */}

                                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Rating</label>
                                {/* <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>

                                </select> */}
                                <input type="number" placeholder="Movie rating" onChange={this.inputChange} name="rating"></input>
                            </div>
                            <div className="col-auto my-1">
                                {/* checkBox */}
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" name="checkBox" onChange={this.inputChange} id="customControlAutosizing" />
                                    <label className="custom-control-label" for="customControlAutosizing">Checkout</label>
                                </div>
                            </div>
                            {/* submit button */}
                            <div className="col-auto my-1">
                                <button type="submit" className="btn btn-primary" onClick={this.Click}>Submit</button>
                            </div>
                        </div>
                    </form>


                </div>

                {/* Show Movie Data */}
                <div className="container-fluid ml-4 mt-5 d-flex flex-nowrap bd-highlight">
                    {all_data && all_data.map((poster) => {
                        return (
                         <div className="container-fluid">
                            <div className="card moviePoster">
                                <img src={poster.moviePoster} className="card-img-top" alt="movie Poster" />
                                <div className="card-body">
                                    <h5 className="card-title">{poster.movieName}</h5>
                                    <p className="card-text">{poster.summary}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {/* <li className="list-group-item">{poster.movieName}</li> */}
                                    <li className="list-group-item">{poster.actors}</li>
                                    <li className="list-group-item">{poster.year}</li>
                                    <li className="list-group-item">{poster.language}</li>
                                    <li className="list-group-item">{poster.rating}</li>
                                </ul>


                            </div>
                         </div>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default MovieForm;
