import React, { Component } from 'react'

export default class ProductTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            table:this.props.db,
            categoryArr:this.props.db,
            category:'All',
            material:'All',
            materialArr:this.props.db
        }
    }

    handleChange = (e) =>{
        switch(e.target.value){
            case 'Bedroom':
                this.setState({
                    table:this.state.categoryArr.filter(ele => ele.category === 'Bedroom'),
                    materialArr:this.state.categoryArr.filter(ele => ele.category === 'Bedroom'),
                    category:'Bedroom'
                })
                break
            case 'Living':
                    this.setState({
                        table:this.state.categoryArr.filter(ele => ele.category === 'Living'),
                        materialArr:this.state.categoryArr.filter(ele => ele.category === 'Living'),
                        category:'Living'
                    })
                    break
            case 'Dining':
                    this.setState({
                        table:this.state.categoryArr.filter(ele => ele.category === 'Dining'),
                        materialArr:this.state.categoryArr.filter(ele => ele.category === 'Dining'),
                        category:'Dining'
                    })
                    break
            case 'Appliance':
                    this.setState({
                        table:this.state.categoryArr.filter(ele => ele.category === 'Appliance'),
                        materialArr:this.state.categoryArr.filter(ele => ele.category === 'Appliance'),
                        category:'Appliance'
                    })
                    break
            case 'All':
                    this.setState({
                        table:this.state.categoryArr,
                        materialArr:this.state.categoryArr,
                        category:'All'
                    })
                    break
            default:
                break
        }
    }

    handleMaterialChange = (e) =>{
        switch(e.target.value){
            case 'Teak':
                this.setState({
                    table:this.state.materialArr.filter(ele => ele.material === 'Teak'),
                    material:'Teak'
                })
                break
            case 'Oak':
                this.setState({
                    table:this.state.materialArr.filter(ele => ele.material === 'Oak'),
                    material:'Oak'
                })
                break
            case 'Walnut':
                    this.setState({
                        table:this.state.materialArr.filter(ele => ele.material === 'Walnut'),
                        material:'Walnut'
                    })
                    break
            case 'Maple':
                    this.setState({
                        table:this.state.materialArr.filter(ele => ele.material === 'Maple'),
                        material:'Maple'
                    })
                    break
            case 'All':
                    this.setState({
                        table:this.state.materialArr,
                        material:'All'
                    })
                    break
            default:
                break
        }
    }
    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category <br/>
                                <select value={this.state.category} onChange={this.handleChange}>
                                    <option value='Bedroom'>Bedroom</option>
                                    <option value='Living'>Living</option>
                                    <option value='Dining'>Dining</option>
                                    <option value='Appliance'>Appliance</option>
                                    <option value='All'>All</option>
                                </select>
                            </th>
                            <th scope="col">Material <br/>
                                <select value={this.state.material} onChange={this.handleMaterialChange}>
                                    <option value='Teak'>Teak</option>
                                    <option value='Oak'>Oak</option>
                                    <option value='Walnut'>Walnut</option>
                                    <option value='Maple'>Maple</option>
                                    <option value='All'>All</option>
                                </select>
                            </th>
                            <th scope="col">Price</th>
                            <th scope='col'>Add to Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table.map(item =>
                                <tr key={item.uniqueId}>
                                    <td>#{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.category}</td>
                                    <td>{(item.category === 'Appliance')?'NA':item.material}</td>   
                                    <td>{item.price}</td>
                                    <td><button className='btn btn-outline-warning' onClick={()=>this.props.onCartClick(item)}>Add to Cart</button></td>
                                </tr>

                            )}
                    </tbody>
                    </table>
            </div>
        )
    }
}
