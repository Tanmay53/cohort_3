import React from 'react'

export default class Pagination extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            responsePerPage:'5'
        }
    }

    handleChange = e =>{
        this.setState({
            responsePerPage:e.target.value
        })
        this.props.resSelected(e.target.value)
    }

    componentDidMount(){
        this.setState({
            responsePerPage:`${this.props.currentPerPage}`
        })
    }


    render(){
        const resArr = new Array(Number(this.props.resPerPage)).fill(0)
        console.log('pagination ',this.state.responsePerPage)
        return (
            <div>
                <div>
                    <label htmlFor='totalPages' className='mr-2'>Response Per Page:</label>
                    <select id='totalPages' name='totalPages' value={this.state.responsePerPage} onChange={(e)=>this.handleChange(e)}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {resArr.map((ele,i) =>
                                <li className='page-item' key={i}>
                                    <button className='page-link btn btn-sm' onClick={(e)=>this.props.currPage(i+1)} >{i+1}</button>
                                </li>
                            )}
                    </ul>
                </nav>
            </div>
        )
    }
}
