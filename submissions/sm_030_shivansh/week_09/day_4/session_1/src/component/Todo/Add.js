import React from 'react';
import store from "../redux/store";
import { add } from "../redux/action";
import { Button } from "@material-ui/core";

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
        }
    }

    //function to  handleChange in input
    handleChange = (event) => {
        // console.log(event.target);
        this.setState({
            itemName: event.target.value,
        });
    }

    //function to  handleClick
    handleClick = () => {

        store.dispatch(add(this.state.itemName))

        this.setState({
            itemName: ""
        })
    }

    render() {
        console.log("add", store);
        console.log("add", this.state.itemName);
        return (
            <div className="container d-flex justify-content-center my-5">
                <div className="col-6">
                    <input type="text"
                        value={this.state.itemName}
                        onChange={this.handleChange}
                        className="form-control"
                    />

                </div>
                <div >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleClick()}
                    >
                        Add
                    </Button>

                </div>


            </div>
        )
    }
}



export default Add;