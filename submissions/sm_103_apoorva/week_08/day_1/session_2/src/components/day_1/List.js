import React from 'react';

class List extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            mylist:this.props.arr
        }
    }
    render(){
        return(
            <ul>
                {this.state.mylist.map(ele=>(<li key={ele}>{ele}</li>))}
            </ul>
        )
    }
}

export default List