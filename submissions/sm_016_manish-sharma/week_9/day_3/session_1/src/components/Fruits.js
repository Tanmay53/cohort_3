import React from 'react'
import { Link } from 'react-router-dom'

class Fruits extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log('Fruits match',this.props)
        return (
            <div className='row'>
                {this.props.data1.map(e=>
                    <div key={e.id} className='col-md-3 col-6'>
                    <div className="card text-center" style={{width:'18rem'}}>
                        <img src={e.src} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <Link to={`/fruits/fruitsinfo/${e.id}`}>Click here</Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                )
            }
        }
        
export default Fruits