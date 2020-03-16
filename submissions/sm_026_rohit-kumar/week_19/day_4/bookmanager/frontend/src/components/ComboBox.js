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

    loadData = () => {
        const new_data = []
        axios.get(this.props.fetchUrl)
        .then(res => {
            const data = res['data']['data']
            for(let i = 0; i < data.length; i++) {
                new_data.push({'id': data[i].id, 'name': data[i].name, 'value': false})
            }
    
            console.log(new_data)
            this.setState({
                data: new_data
            })
        })

        
        
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.viewToggler !== this.props.viewToggler){
          this.loadData()
        }
      }


    componentDidMount = () => {
        this.loadData()
    }


    handleCheckChanged = (index, checkValue) => {
        const newdata = [...this.state.data]
        newdata[index].value = checkValue
        
        this.setState({
            data: newdata
        })

        // Report back to caller
        this.props.callbackRetriveData(this.state.data[index]['id'])
    }

    render() {
        console.log('render chala')
        return (
        
            <div className='row'>
                <div className='col-12 border'  style={{'overflow-y':'scroll'}}>                    
                    <div className='p-1' style={{"height":"150px"}}>
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