import React from 'react'
import uuid from 'react-uuid'

const ComboBoxItem = (props) => {
    const new_id = uuid()
    return (
        <div>
            <span className='mt-2'><input id={new_id} type="checkbox" value={props.value} /></span>
            <span className='ml-2'><label for={new_id}>{props.value}</label></span>
        </div>
    )
}


class ComboBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['one', 'two', 'three', 'four', 'five']
        }
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12'>
                    <div className='border p-2 d-flex flex-column mt-1'>
                        {this.state.data.map((item) => {
                            return <ComboBoxItem key={uuid()} value={item} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ComboBox