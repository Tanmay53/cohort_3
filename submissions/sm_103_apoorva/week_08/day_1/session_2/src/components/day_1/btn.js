import React from 'react'

class Button extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            btn : this.props.arr
        }
    }
    render()
    {
        return(
            <div className="col-3 mx-2 row" >
                {this.state.btn.map(ele=>(<div className="col-6" key={ele[0]} ><button type="button"  className="badge badge-pill badge-secondary" style={{backgroundColor:ele[1]}}>{ele[0]}</button></div>))}
            </div>
        )
    }
}

export default Button