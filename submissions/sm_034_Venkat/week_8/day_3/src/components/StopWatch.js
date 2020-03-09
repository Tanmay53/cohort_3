import React from 'react'

class StopWatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 35955,
            started: false
        }
        this.countInterval = this.countInterval.bind(this)
        this.stopCounting = this.stopCounting.bind(this)
    }
    tick() {
        this.setState(() => ({
            count: this.state.count + 1,
            started: true
        }))
    }

    countInterval() {
        this.interval = setInterval(() => this.tick(), 100);
    }
    stopCounting() {
        clearInterval(this.interval);
        this.setState(() => ({ started: false }))
    }

    render() {
        return (
            <div>
                {/* <p>{this.state.count}</p> */}
                {this.state.count !== 0 &&
                    <p style={{fontFamily:"monospace",fontSize:"26px"}}>
                        {Math.floor(this.state.count / 36000)} Hr : {Math.floor(this.state.count / 600) % 60} Min :
                         {Math.floor(this.state.count / 10) % 60} sec : {this.state.count % 10}
                    </p>}

                <div>
                    {(this.state.started) ? (<button onClick={this.stopCounting}> Pause </button>)
                        : (<div>
                            <button onClick={this.countInterval}>Start</button>
                            <button onClick={() => this.setState({ count: 0 })}>Reset</button>
                        </div>)}
                </div>
            </div>
        )
    }
}
export default StopWatch