import React from 'react'
import axios from 'axios'
import Search from './Search'
import Table from './Table'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }
    }
    search = (name) => {
        axios.get(`https://api.github.com/search/users?q=${name}`)
            .then((response) => {
                console.log(response.data.items);
                this.setState({
                    data: response.data.items
                })

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {

            });
    }
    render() {
        return (
            <div>
                <Search add={this.search} />
                <Table  details={this.state.data} />
            </div>
        )
    }

}
export default App



