import React from 'react'
import { connect } from 'react-redux'

class History extends React.Component {
    render() {
        console.log(this.props.value);
        return (
            <div>
                <div className="container">
                    <table className="table">
                        <tr><th></th><th>MODEL</th><th>Name</th><th>Mileage(kmph)</th><th>From</th><th>To</th><th>Distance(km)</th><th>Cost(Rs)</th><th>Fuel(lt)</th></tr>
                        {this.props.value.map((ele) => <tr><td><img className="img-fluid" style={{ height: "100px" }} src={ele.img} /></td><td>{ele.Model}</td><td>{ele.Name}</td><td>{ele.fuel}</td><td>{ele.location}</td><td>{ele.destiny}</td><td>{ele.distance}</td><td>{`${ele.cost * ele.distance}`}</td><td>{`${ele.fuel - (ele.distance / ele.mielage).toFixed(3)}`}</td></tr>)}
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.bookingReducer.historyData

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(History)
