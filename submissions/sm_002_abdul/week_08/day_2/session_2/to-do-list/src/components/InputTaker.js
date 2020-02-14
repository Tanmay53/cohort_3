import React from 'react'

class InputTaker extends React.Component{
  constructor(props){
    super(props)
    this.state={
      itemName:''
    }
  }


  render(props){
    return(
      <div className='flex my-3'>
        <input
          className='form-control'
          type='text'
          value={this.state.itemName}
          onChange={(e)=>{
            this.setState({
              itemName:e.target.value
            })
          }}
        />
        
        <button
          className='btn btn-primary my-3 col-lg-6 col-12'
          onClick={()=>{
            this.props.add(this.state.itemName)
        }}>
          <span className='font-weight-bold h4'>Add</span>
        </button>

      </div>
    )
  }
}

export default InputTaker