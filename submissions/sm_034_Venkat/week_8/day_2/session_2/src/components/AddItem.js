import React from 'react'
// import ReactDOM from 'react-dom'

class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ""
        }
    }

    render() {
        return (
            <div className="p-2 border m-2">
                <h3>Add to-do tasks</h3>
                <input type="text"
                    value={this.state.item}
                    onChange={ (event) => this.setState({
                        item : event.target.value
                    })}
                />
                <button onClick={ () => this.props.addItem(this.state.item)} 
                        className="bg-success border-1 border-infoy">
                    Add
                    </button>
            </div>
        )
    }
}
export default AddItem