import React from 'react'
import Table from './Table'
class Cart extends React.Component{
    constructor(props){
        super(props)
    }
    render()
    {
        return(
            <div>
                <Table database={this.props.database}/>
            </div>
        )
    }
}
export default Cart