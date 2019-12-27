import React from 'react'

class Location extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            location : this.props.arr
        }
    }
    render()
    {
        return(
            <div>
                <p className="mx-4">New York</p>
            </div>
            
        )
    }
}

export default Location