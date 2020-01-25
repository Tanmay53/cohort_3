import React from 'react'
import { Link } from 'react-router-dom'

class Vegetables extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='row'>
                {this.props.data2.map(e=>
                    <div key={e.id} className='col-md-3 col-6'>
                    <div className="card text-center" style={{width:'18rem'}}>
                        <img src={e.src} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <Link to={`/vegetables/vegitablesinfo/${e.id}`}>Click here</Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                )
            }
        }
        
export default Vegetables