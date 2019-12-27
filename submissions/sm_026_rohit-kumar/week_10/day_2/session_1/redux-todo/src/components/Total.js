import React from 'react'
import {connect} from 'react-redux'


function Total(props) {
    return (
        <div>
            <h6>Total: </h6>
            <span>
                {props.todo.filter((item) => {
                    return item.completed === false
                }).length}
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {todo: state.todo}
}

export default connect(mapStateToProps) (Total)