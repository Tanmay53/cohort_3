import React, { Component } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: [],
            edit: false,
            editItem: ""
        };
    }
    componentDidMount() {
        this.setState({
            emp: JSON.parse(localStorage.getItem("employe"))
        });
    }
    componentDidUpdate() {
        console.log("app updated");
        localStorage.setItem("employe", JSON.stringify(this.state.emp));
    }
    addEle = ele => {
        this.setState(state => ({
            emp: [...this.state.emp, ele]
        }));
    };
    delete = item => {
        this.setState({
            emp: this.state.emp.filter(ele => ele !== item)
        });
    };
    editToggle = item => {
        this.setState({
            edit: !this.state.edit
        });
    };

    editItem = item => {
        this.setState({
            editItem: item,
            edit: true
        });
    };
    render() {
        console.log("emp:", this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2 className="bg-primary text-white">
                            Enter Employe Info
                        </h2>
                        <Form
                            addEle={this.addEle}
                            edit={this.state.edit}
                            editToggle={this.editToggle}
                            editItem={this.state.editItem}
                        />
                    </div>
                    <div className="col-8">
                        <h2 className="bg-primary text-white">
                            All Employe Info
                        </h2>
                        <Display
                            data={this.state.emp}
                            delete={this.delete}
                            editItem={this.editItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
