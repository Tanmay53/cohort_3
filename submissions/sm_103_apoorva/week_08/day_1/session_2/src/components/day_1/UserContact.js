import React from 'react'

class UserContact extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            contact : this.props.arr
        }
    }
    render()
    {
        return(
            <div className="text1">
                {this.state.contact.map(ele=>(<button className={ele[1]}>{ele[0]}</button>))}
            </div>
        )
    }
}

export default UserContact
