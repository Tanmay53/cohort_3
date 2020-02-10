import React from 'react'
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            duplicate : [],
            page_no : '',
        }
    }
    componentDidMount = () =>{
        this.setState({
            data : this.props.data,
            duplicate : this.props.data
        })
    }

    pagination = (e) =>{
        let n = e.target.value
        console.log(n)
        let new_data = this.state.data.slice(((n-1)*5),n*5)
        this.setState({
            duplicate : new_data
        })
    }

    render()
    {
        let val = this.props.data.length/5
        let pages = []
        for(let i = 1; i < val+1; i++){
                    pages.push(
                        <button className="badge-pill badge-info" value={i} onClick={this.pagination}>page{i}</button>
                    )
        }
        return(
            this.props.form ? (
            <div>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Floor_No</th>
                            <th scope="col">Meeting_Room_Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Price(in Rs)</th>
                            <th scope="col">Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.duplicate.map((ele) =>
                            <tr key={ele.Meeting_Room_Name}>
                                <td>{ele.Floor_No}</td>
                                <td>{ele.Meeting_Room_Name}</td>
                                <td>{ele.Capacity}</td>
                                <td>{ele.Price}</td>
                                <td>
                                    <Link to="/orders">
                                        <button className="btn btn-warning">Book</button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <ul className="pagination">
                    <div className="col-10 m-auto row">
                        {pages}
                    </div>
                    </ul>
            </div>
            ):(<Redirect to="/login" />)
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    form: state.form
})

const mapDispatchToProps = (dispatch) => ({
    
})


export default connect(mapStateToProps,mapDispatchToProps) (Home)