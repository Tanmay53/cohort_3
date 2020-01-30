import React from 'react'
import { Link } from 'react-router-dom'
import {Select, MenuItem, InputLabel, FormControl} from '@material-ui/core/'

class Fruits extends React.Component {
    constructor(props) {
        super(props)
    }
    changeHandler=()=>{
        
    }

    render() {
        console.log('Fruits match',this.props)
        
        return (
            <div>
                <FormControl fullWidth className='col-3 m-2'>
                    <InputLabel>Sort by Price</InputLabel>
                    <Select>
                        <Link to={'/fruits/asc'}><MenuItem value={'asc'}>Low to High</MenuItem></Link>
                        <Link to={'/fruits/desc'}><MenuItem value={'dsc'}>High to Low</MenuItem></Link>
                    </Select>
                </FormControl>

                <div className='row'>
                {this.props.data1.map(e=>
                    <div key={e.id} className='col-md-3 col-6'>
                    <div className="card text-center" style={{width:'250px'}}>
                        <img src={e.src} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <Link to={`/fruits/fruitsinfo/${e.id}`}>Shop here</Link>
                            </div>
                        </div>
                    </div>
                    )}
                    
                </div>
                
            </div>
                )
            }
        }
        
export default Fruits