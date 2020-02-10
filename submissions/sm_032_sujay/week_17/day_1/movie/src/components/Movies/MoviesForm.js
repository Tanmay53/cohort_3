import React from 'react'

import Movies from './Movies'

import './MovieForm.css'

export default class MoviesForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            summary: " ",
            actors: "",
            pic: "",
            rating: "",
            year: "",
            lang: "",
            restriction: "",
            srch:"",
            movieData: []

        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]:e.target.value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(" on submit")
            // if(this.state.name || this.state.pic || this.state.lang || this.state.rating === "")
            // alert("Dear User, Please Fill in all the mandatory fields (denoted by *)")

        const obj = {
            name: this.state.name,
            summary: this.state.summary,
            actors: this.state.actors,
            pic: this.state.pic,
            rating: this.state.rating,
            year: this.state.year,
            lang: this.state.lang,
            restriction: this.state.restriction
          
        }


        this.setState({
            movieData: [...this.state.movieData, obj]
        })
        // console.log

        this.setState({
            name: "",
            summary: " ",
            actors: "",
            pic: "",
            rating: "",
            year: "",
            lang: "",
            restriction: "",
           
        })
    }

    searchMv = (data) => {
        console.log("searching ..")
       let res = this.state.movieData.filter((item) => 
            (item.name || item.year) === data)
        // console.log(res)
        this.setState({
            movieData : res
        })

        this.setState({
            srch:""
        })
    }
    







    render() {
        return (
            <div>
                <h3 className="display-4 text-center text-info"> Movies that Moved You!</h3>
                <div className="container">
                    <div className="col-4 offset-4 my-5 shadow border border-info rounded text-dark">
                        <form>
                            <label>Name*</label>
                            <input name="name"
                                type="text"
                                placeholder="Enter Movie Name "
                                onChange={this.handleChange}
                                value={this.state.name}
                                className="form-control"
                            required/>

                            <label>Summary</label>
                            <input name="summary"
                                type="text"
                                placeholder="Enter Summary"
                                onChange={this.handleChange}
                                value={this.state.summary}
                                className="form-control"
                            />

                            <label>Actors</label>
                            <input name="actors"
                                type="text"
                                placeholder="Enter Actors"
                                onChange={this.handleChange}
                                value={this.state.actors}
                                className="form-control"
                            />

                            <label>Movie Image* </label>
                            <input name="pic"
                                type="link"
                                placeholder="Enter img url"
                                onChange={this.handleChange}
                                value={this.state.pic}
                                className="form-control"
                            />


                            <label>Rating* </label>
                            <input name="rating"
                                type="number"
                                placeholder="Enter Rating"
                                onChange={this.handleChange}
                                value={this.state.rating}
                                className="form-control"
                            />

                            <label>Year</label>
                            <input name="year"
                                type="year"
                                placeholder="Enter Release Year"
                                onChange={this.handleChange}
                                value={this.state.year}
                                className="form-control"
                            />

                            <label>Language* </label>
                            <input name="lang"
                                type="text"
                                placeholder="Enter Language"
                                onChange={this.handleChange}
                                value={this.state.lang}
                                className="form-control"
                            />

                            <label>R Rated</label>
                            <input name="restriction"
                                type="checkbox"
                                // aria-label="Checkbox for following text input"
                                placeholder=" "
                                onChange={this.handleChange}
                                value={this.state.restriction}
                                className="form-control"
                            />
                        </form>
                        <button onClick={this.handleSubmit} className="btn btn-outline-info offset-5 my-2">Submit</button>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="input-group input-group-lg col-8 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-info text-dark" id="inputGroup-sizing-lg">Movie Name or Year</span>
                            </div>
                            <input type="text" name="srch" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={this.state.srch} onChange={this.handleChange} />
                        </div>
                        <button onClick={()=> this.searchMv(this.state.srch)} className="btn btn-lg btn-success text-dark offset-9 searchButton " >Search Movie</button>
                        
                       
                    </div>
                </div>




                <div>
                <Movies mvData={this.state.movieData} />
                </div>
               
            </div>
        )
    }
}