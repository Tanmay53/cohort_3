import React from 'react'
import {connect} from 'react-redux'
import {editTopic} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

function Table(props) {
    {console.log('props in tabular data', props)}
    return(
        <tr id={props.item.id}>
            <td>
                <Link to={`/edit/${props.item.id}`}>{props.item.title}</Link>
            </td>
            <td>{props.item.date_created}</td>
            <td style={{width: '150px'}}>{props.item.body}</td>
            <td>{props.item.category}</td>
            <td>{props.item.user_name}</td>
            <td>{props.item.user_mobile}</td>
            <td>{props.item.add_comments}</td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        topics: state.topics,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTopic: (item, id) => dispatch(editTopic(item, id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Table)