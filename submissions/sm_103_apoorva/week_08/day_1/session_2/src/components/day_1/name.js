import React from 'react'

class Name extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            name : this.props.arr
        }
    }
    render()
    {
        return(
            <div>
                <h5 className="mx-3">Ricky Park</h5>
            </div>
        )
    }
}

export default Name