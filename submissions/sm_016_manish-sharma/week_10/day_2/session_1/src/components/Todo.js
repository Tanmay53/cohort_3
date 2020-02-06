import React from 'react'
import { add, update, del } from "../redux/actions"
import { connect } from 'react-redux'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    render() {
        console.log('TODO', this.props.value)
        return (
            <div>
                <div>
                    <input type='text' onChange={this.changeHandler} />
                    <div className='btn btn-success' onClick={() => this.props.add(this.state.inputText)}>ADD</div>
                </div>
                <div className='row text-center'>
                    <div className='col'>
                        <h2>TODO</h2>
                        {this.props.value.map(e => e.completed === false ?
                            <div onClick={() => this.props.update(e.itemName)} key={e.itemName} className='row'>
                                <p className='col-6'>{e.itemName}</p>
                                <button onClick={()=>this.props.del(e.itemName)}>Delete</button>
                            </div>
                            :
                            <p></p>
                        )}
                    </div>
                    <div className='col'>
                        <h2>COMPLETED</h2>
                        {this.props.value.map(e => e.completed === true ?
                            <div onClick={() => this.props.update(e.itemName)} key={e.itemName} className='row'>
                                <p className='col-6'>{e.itemName}</p>
                                <button onClick={()=>this.props.del(e.itemName)}>Delete</button>
                            </div>
                            :
                            <p></p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { value: state.todoList }
}
const mapDispatchToProps = dispatch => {
    return {
        add: (a) => dispatch(add(a)),
        update: (b) => dispatch(update(b)),
        del:(c)=> dispatch(del(c))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)