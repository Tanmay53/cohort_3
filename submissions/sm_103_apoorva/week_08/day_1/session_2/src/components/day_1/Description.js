import React from 'react'

class Description extends React.Component
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
                {this.state.location.map(ele =>(<p>{ele}</p>))}
            </div>  
        )
    }
}

export default Description