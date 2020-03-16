import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data: []
        }
    }

    componentDidMount = () => {
        this.setState({
            data: [...this.props.state.roomsData]
        })
    }
    
    render() {
        let totalItems = [...this.state.data]
        let perPage = 5
        let totalPages = Math.ceil(Number(totalItems.length / perPage))
        let liCreate = []
        console.log(totalItems, totalPages)
        for(let i = 1; i <totalPages; i++){
            liCreate.push(<li className="page-item">
                            <Link>
                                <button value = {i} 
                                        onClick = {this.props.pagination}
                                        className="page-link btn">{i}</button>
                            </Link>
                        </li>)
        }
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <Link className="page-link">Previous</Link>
                        </li>
                        {liCreate}
                        <li className="page-item">
                            <Link className="page-link">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps,
                       mapDispatchToProps)(Pagination)




