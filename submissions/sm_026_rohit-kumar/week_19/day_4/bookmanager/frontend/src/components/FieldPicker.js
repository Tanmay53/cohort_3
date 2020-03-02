import React from 'react'


function pickedItem (props) {
    return (
        <h4>one</h4>
    )   
}



class FieldPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            picked: []
        }
    }
    
    

    handleAdd = () => {
        const result = prompt(this.props.promptMessage)
        this.setState({
            picked: [...this.state.picked, result]
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-5'>
                    <select className='form-control'>
                        <option value={this.props.default.value}>{this.props.default.text}</option>
                    </select>
                </div>
                <div className='col-1'>
                    <button onClick={this.handleAdd} className='btn btn-primary'>+</button>
                </div>
                <div className='col-8'>
                    <div className='border mt-2 d-flex'>
                        {this.state.picked.map((item) => {
                            return <pickedItem
                                        
                                   />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default FieldPicker