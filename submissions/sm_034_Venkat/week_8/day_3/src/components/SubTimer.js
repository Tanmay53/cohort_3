import React from 'react'

class SubTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.time,
            started: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    tick() {
        this.setState(() => ({
            count: this.state.count - 1,
            started: true
        }))
    }
    startTimer() {
        console.log("componentDidMount is done.!", this.props.time)
        this.secCount = setInterval(() => {
            if (this.state.count > 0) {
                this.tick()
            }
            else {
                alert("time up..!")
                clearInterval(this.secCount)

            }
        }, 1000)
    }
    stopTimer() {
        console.log("componentWillUnmount done.")
        clearInterval(this.secCount)
        this.setState(() => ({ started: false }))
    }
    resetTimer() {
        this.props.parentState()
    }

    render() {
        return (
            <div>
                <h2>{Math.floor(this.state.count / 3600)} Hr :
                        {Math.floor(this.state.count / 60) % 60} Min :
                            {Math.floor(this.state.count % 60)} Sec</h2>
                <div>
                    {(this.state.started) ?
                        (<button onClick={this.stopTimer}>Pause</button>)
                        : (<div>
                            <button onClick={this.startTimer}>Start</button>
                            <button onClick={this.resetTimer}> Reset</button>
                        </div>)}
                </div>
            </div>
        )
    }
}
export default SubTimer