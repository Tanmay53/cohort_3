import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

export class payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goback: false
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                goback: true
            })
        }, 3000);
    }
    componentWillUnmount() {
        alert("payment recieved thakyou again welcome back")
    }
    render() {
        if (!this.state.goback) {
            return (
                <div className="container text-center">
                    <h1>
                        Receiving Payments...........
                    </h1>
                </div>

            )
        }
        else {
            return (

                <Redirect to="/" />
            )
        }
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(payment)
