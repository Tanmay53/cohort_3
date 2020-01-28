import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addNewTopic} from '../../Redux/Action'
import EnhancedTable from './Table'

class ViewTopics extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             topicList: []
        }
    }

    componentDidMount() {
        let arr = [...this.state.topicList, this.props.topicList]
        this.setState({
            topicList: arr
        })
    }
    
    render() {
        return (
            <div>
                <EnhancedTable {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.topicList,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    addNewTopic: (payload) => dispatch(addNewTopic(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(ViewTopics)
