import React from 'react'

class Timer extends React.Component{
  render(props){
    return(
      <div className='card text-center col-6 offset-3 my-5'>

          <div className='card-header'>
            TIMER
          </div>

          {this.props.item.displayInput 
          
            ?
          
          <div className='card-body'>
            <div className='input-group'> 
              <input
                type='number'
                className='form-control'
                onChange={this.props.handleTimerInput}
                placeholder='hours'
                name='timerHour'
              />


              <input
                type='number'
                max={59}
                min={0}
                className='form-control'
                onChange={this.props.handleTimerInput}
                placeholder='minutes'
                name='timerMin'
              />


              <input
                required
                type='number'
                max={59}
                min={0}
                className='form-control'
                onChange={this.props.handleTimerInput}
                placeholder='seconds'
                name='timerSec'
              />
            </div>
          </div>

          :

          ''
          }

          {this.props.item.displayTimer 
            
            ?

          <div className='card-body'>
            {this.props.item.timerHour
              ?
              <span 
                className='display-4 font-weight-bold'>{this.props.item.timerHour}
                  <small className='font-weight-light'>h</small>
              </span>
              :
              ''}

              {this.props.item.timerMin
              ?
              <span 
                className='display-4 font-weight-bold'>{this.props.item.timerMin}
                  <small className='font-weight-light'>m</small>
              </span>
              :
              ''}

              <span> </span>

              <span 
                className='display-4 font-weight-bold'>{this.props.item.timerSec}
                  <small className='font-weight-light'>s</small>
              </span>

          </div>

          :  

          ''
          }

          <div className='card-footer'>
            <button 
              className='btn btn-primary mx-3'
              onClick={this.props.item.timerToggle ? this.props.timerStop : this.props.timerStart }>
                {this.props.timerLabel}
            </button>

            <button 
              className='btn btn-dark mx-3'
              onClick={this.props.timerReset}>
                RESET
            </button>
          </div>

      </div>
    )
  }
}

export default Timer