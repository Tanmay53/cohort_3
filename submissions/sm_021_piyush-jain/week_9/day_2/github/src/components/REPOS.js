import React from 'react'
import axios from 'axios'
import $ from 'jquery'
class Repos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            language: ""
        }
    }
    async componentDidMount() {
        axios
            .get("https://api.github.com/search/repositories?q=" + this.props.repos)
            .then(res => { this.setState({ result: res.data.items }) })
            .then(res => console.log(this.state.result))
    }
    setLanguage = (e) => {
        this.setState({ language: e.target.value })
    }
    language = () => {
        var lang=this.state.language
        axios
        .get("https://api.github.com/search/repositories?q=" + this.props.repos+"+"+lang)
        .then(res=>{this.setState({result:res.data.items})})
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="ENTER YOUR DESIRED LANGUAGE" onChange={this.setLanguage} />
                <button onClick={this.language}>GET REPOS BY LANGUAGE</button>
                <table id="hiding" class="table"><thead class="text-white bg-dark"><th>NAME</th><th>LANGUAGE</th><th>DESCRIPTION</th><th>OPEN_ISSUES</th></thead>
                    <tbody>
                        {this.state.result.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.language}</td>
                                <td>{item.description}</td>
                                <td>{item.open_issues}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Repos