import React from 'react'
import {connect} from 'react-redux'


function Total(props) {
    console.log(props.todo.length)
    console.log(props.todo)
    const NotcompletedData=props.todo.filter(item=>item.isCompleted===false)
    // const uncompleteditems=NotcompletedData.map(item=>item.itemName)
   const numb=props.todo.filter((item) => {
        return item.isCompleted === false
    }).length
  
    
    return (
        <div>
         <h4 className="text-center">Total no </h4>
          <div className="text-center text-danger display-4">{numb}</div>
          <br></br>
        <h4 className="text-center">Item names yet to get completed</h4>
<ul>
{NotcompletedData.map(item=> (
<li key={item.id} className="text-center text-danger display-4 list-unstyled">
                                   {item.itemName}
</li>))}
</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {todo: state.todo}
}

export default connect(mapStateToProps) (Total)

