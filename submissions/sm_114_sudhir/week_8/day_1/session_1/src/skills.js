import React from 'react';

class Skill extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addSkill : this.props.ele
        };
    }

    render(){
        return (
            <div>
                {this.state.addSkill.map(val => <span className="spanEle">{val}</span>)}
            </div>
        )
    }
}

export default Skill;