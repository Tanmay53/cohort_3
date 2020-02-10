import React, { Component } from 'react'

export class FilterMovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: {
                year: []
            }
        }
    }
    inputFilter = (e) => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                [e.target.name]: e.target.value
            }
        });
    }
    // filterClick = (e) => {
    //     filterData.filter
    // }


    render() {
        return (
            <div>
                <div class="input-group mb-3 p-5">
                    <input type="Number" class="form-control" placeholder="Release Date" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search Movie By Release Date</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterMovies
