import React from 'react'

class ProductTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: [],
            ids: [],
            desc: [],
            category: [],
            price: []
        }
    }
    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Desc</th>
                        <th>category</th>
                        <th>Price</th>
                    </thead>
                    {
                        this.props.nameout.map(e=><tr key={e}><td>{e}</td></tr>)
                    }
                </table>
            </div>
        )
    }
}

export default ProductTable