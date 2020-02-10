import React from 'react'

class Booking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            floor: '',
            capacity: ''
        }
    }

    componentWillMount = () => {
        let query = new URLSearchParams(this.props.location.search)
        let name = query.get('name')
        let price = query.get('price')
        let floor = query.get('floor')
        let capacity = query.get('capacity')

        this.setState({
            name: name,
            price: price,
            floor: floor,
            capacity: capacity
        })
    }

    render() {
        return (
            <div className='col-12'>
                <h3 className='p-3 bg-primary text-white'>Booking Page</h3>
                <p className='mt-3'><b>Booking Details</b></p>
                <table>
                    <tr>
                        <td>Room:</td>
                        <td>{this.state.capacity}</td>
                    </tr>
                    <tr>
                        <td>Floor:</td>
                        <td>{this.state.floor}</td>
                    </tr>
                    <tr>
                        <td>Capacity:</td>
                        <td>{this.state.capacity}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{this.state.price}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Booking