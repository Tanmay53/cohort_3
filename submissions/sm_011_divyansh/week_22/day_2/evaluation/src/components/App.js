import React from 'react'
import Table from './Table'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: "",
            class: "",
            section: "",
            subject: "",
            Data: []

        }
    }

    handleIput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            teacher: this.state.teacher,
            class: this.state.class,
            section: this.state.section,
            subject: this.state.subject
        }
        this.setState({
            Data: [...this.state.Data, obj],
            teacher: "",
            class: "",
            section: "",
            subject: "",
        })


    }

    render() {
        return (<div>
            <input type="text" placeholder="enter teacher name" name="teacher" value={this.state.teacher} onChange={this.handleIput} />
            <input type="text" placeholder="enter class" name="class" value={this.state.class} onChange={this.handleIput} />
            <input type="text" placeholder="enter section" name="section" value={this.state.section} onChange={this.handleIput} />
            <input type="text" placeholder="enter subject" name="subject" value={this.state.subject} onChange={this.handleIput} />
            <button onClick={this.handleSubmit}>submit</button>
            <Table details={this.state.Data} />
        </div>)
    }
}
export default App
