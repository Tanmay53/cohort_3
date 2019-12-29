import React from 'react'

class Skills extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            skills : this.props.arr
        }
    }
    render()
    {
        return(
            <div className="footer">
                <p className="mx-2 my-3">Skills</p>
                {this.state.skills.map(ele=>(<span className={ele[1]}>{ele[0]}</span>))}
            </div>
        )
    }
}

export default Skills