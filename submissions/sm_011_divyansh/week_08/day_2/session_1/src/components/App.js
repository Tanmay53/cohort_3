import React from 'react';
import Card from './card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: this.props.data
        };
    }

    sortData = (e) => {
        this.setState({
            details: this.props.data.filter(function (val) {
                return val.rating >e.target.value;  
            }) 
        });
    }

    render() {
        return (
            <div>
                <button key={1} value={1} onClick={this.sortData}>1 star</button>
                <button key={2} value={2} onClick={this.sortData}>2 star</button>
                <button key={3} value={3} onClick={this.sortData}>3 star</button>
                <button key={4} value={4} onClick={this.sortData}>4 star</button>
                {this.state.details.map(details => <Card details={details} key={details.title} />)}
            </div>
        );
    }
}

export default App;