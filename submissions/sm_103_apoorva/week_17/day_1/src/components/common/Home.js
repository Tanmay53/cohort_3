import React from 'react'
import { connect } from 'react-redux';
import {orders} from '../../Redux/Action'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            duplicate : [],
            page_no : '',
            search : ''
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

    book = (e) =>{
        alert("item added-check in orders")
        let n = e.target.value
        this.props.orders(n)
    }

    handlechange = (e) =>{
        let n = e.target.value
        console.log(n)
        let data = this.state.duplicate
        if(n == "asc-price"){
            data.sort(function(a,b){
                return a.Price - b.Price
            })
            this.setState({
                duplicate : data
            })
        }
        else if(n == "dsc-price"){
            data.sort(function(a,b){
                return b.Price - a.Price
            })
            this.setState({
                duplicate : data
            })
        }
        else if(n == "asc-capacity"){
            data.sort(function(a,b){
                return a.Capacity - b.Capacity
            })
            this.setState({
                duplicate : data
            })
        }
        else if(n == "dsc-capacity"){
            data.sort(function(a,b){
                return b.Capacity - a.Capacity
            })
            this.setState({
                duplicate : data
            })
        }
    }

    search = (e) => {
        let n = this.state.search
        console.log(n)
        let data = this.state.data
        let new_data = data.filter(ele => ele.Floor_No == n)
        this.setState({
            duplicate : new_data
        })
    }

    render()
    {
        let val = Math.ceil(this.props.data.length/5)
        let pages = []
        for(let i = 1; i < val+1; i++){
                    pages.push(
                        <button className="badge-pill badge-info" value={i} onClick={this.pagination}>page{i}</button>
                    )
        }
        return(
            <div>
                <div className="row ml-2">
                    <div className="col-3">
                        <label>Sort Table</label>
                        <select class="custom-select" onChange={this.handlechange}>
                            <option selected>Sort</option>
                            <option value="asc-price">Ascending Price</option>
                            <option value="dsc-price">Descending Price</option>
                            <option value="asc-capacity">Ascending Capacity</option>
                            <option value="dsc-capacity">Descending Capacity</option>
                        </select>
                    </div>
                    <div className="col-3 row">
                        <div className="col">
                            <label>Search For Floor</label>
                            <input className="form-control" type="number" value={this.state.search} onChange={(e) => this.setState({search : e.target.value})} placeholder="1-20"></input>
                        </div>
                        <div className="col">
                            <button className="btn btn-info" style={{marginTop:"32px"}} onClick={this.search}>Search</button>
                        </div>                       
                    </div>
                </div>
                <div className = "mt-3 row">
                    {this.state.duplicate.map((ele) =>
                        <div className="card col-lg-3 col-md-6 m-5" style={{width: "18rem"}}>
                            <img className="card-img-top" src={ele.image} alt="placeholder image" />
                            <div className="card-body">
                                <h3 className="card-title">{ele.Meeting_Room_Name}</h3>
                                <h5 className="card-title">Floor No. :- {ele.Floor_No}</h5>
                                <h5 className="card-text">Capacity :- {ele.Capacity}</h5>
                                <h5 className="card-text">Price per Day :- {ele.Price}</h5>
                                <button className="btn btn-warning" value = {ele.Meeting_Room_Name} onClick={this.book}>Book</button>
                            </div>
                        </div>
                    )}
                </div>
                <ul className="pagination">
                    <div className="col-10 row m-auto">
                        {pages}
                    </div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    form: state.form
})

const mapDispatchToProps = (dispatch) => ({
    orders : (payload) => (dispatch(orders(payload))),
})


export default connect(mapStateToProps,mapDispatchToProps) (Home)