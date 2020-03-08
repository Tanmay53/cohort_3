import React from 'react'
import uuid from 'react-uuid'
import axios from 'axios'


const handleChange = (event, props) => {
    /// console.log(event.target.checked, props.index)
    props.callbackHandleCheckChanged(props.index, event.target.checked)
}

const ComboBoxItem = (props) => {
    const new_id = uuid()
    return (
        <div>
            <span className='mt-2'><input onChange={(e) => handleChange(e, props)} id={new_id} checked={props.value.value} type="checkbox"  /></span>
            <span className='ml-2'><label for={new_id}>{props.value.name}</label></span>
        </div>
    )
}

class ComboBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    loadData = (data) => {
        const new_data = []
        for(let i = 0; i < data.length; i++) {
            new_data.push({'id': data[i].id, 'name': data[i].name, 'value': false})
        }

        console.log(new_data)
        this.setState({
            data:   new_data
        })
    }

    componentDidMount = () => {
        axios.get(this.props.fetchUrl)
        .then(res => {
            // console.log(res)
            this.loadData(res['data']['data'])
        })
    }


    handleCheckChanged = (index, checkValue) => {
        const newdata = [...this.state.data]
        newdata[index].value = checkValue
        
        this.setState({
            data: newdata
        })

        console.log(this.state)
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <input type='text' placeholder='Type to search' className='form-control'></input>
                </div>
                <div className='col-12'>
                    <div className='border p-2 d-flex flex-column mt-1' style={{"overflow":"scrall"}}>
                        {this.state.data.map((item, index) => {
                            return <ComboBoxItem callbackHandleCheckChanged={this.handleCheckChanged} key={uuid()} value={item} index={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ComboBox