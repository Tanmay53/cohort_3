import React from 'react'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='row mt-3'>
                <div className='col-md-8 offset-md-1'>
                    <input 
                        type='text' 
                        className='form-control'
                        placeholder="Search by Author, Publisher or Category."
                        ></input>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary'>
                        <i class="fa fa-search" style={{"fontSize":"15px"}}></i>
                        &nbsp; Search
                    </button>
                </div>
            </div>
        )
    }
}

export default Home