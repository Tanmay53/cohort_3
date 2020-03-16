import React from 'react'

class Stopwatch extends React.Component{
  render(){
    console.log('child',this.props)
    return (
      <div className='card text-center col-6 offset-3 my-5'>

          <div className='card-header'>
            STOP-WATCH
          </div>

          <div className='card-body'>
              {this.props.item.hour
              ?
              <span 
                className='display-4 font-weight-bold'>{this.props.item.hour}
                  <small className='font-weight-light'>h</small>
              </span>
              :
              ''}

              {this.props.item.min
              ?
              <span 
                className='display-4 font-weight-bold'>{this.props.item.min}
                  <small className='font-weight-light'>m</small>
              </span>
              :
              ''}

              <span> </span>

              <span 
                className='display-4 font-weight-bold'>{this.props.item.sec}
                  <small className='font-weight-light'>s</small>
              </span>

              <span> </span>

              <span className='h1'>{this.props.item.millisec}</span>

          </div>

          <div className='card-footer'>

            <button 
              className='btn btn-primary mx-3'
              onClick={this.props.item.toggle ? this.props.stop : this.props.start}>
                {this.props.label}
            </button>

            <button 
              className='btn btn-dark mx-3'
              onClick={this.props.reset}>
                RESET
            </button>
          </div>
      </div>
    )
  }

}

export default Stopwatch