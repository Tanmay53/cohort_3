import React from "react";
import Item from "./item";
import Completed from "./completed";
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.data = ["run", "walk"];
    this.completed = ["hello"];
    this.state = {
      notComplete: this.data,
      inputValue: "",
      completedData: this.completed
    };
  }
  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };
  //   rendering da
  rendering = props => {
    this.setState({
      data: this.data.push(this.state.inputValue)
    });
    console.log(this.state.notComplete);
  };

  //extracting todo list
  render() {
    return (
      <div className="form-row d-flex m-5">
        <div className="form-row d-flex p-5 col-4 border background">
          <button className="px-3 transparent" onClick={this.rendering}>
            <i className="fas fa-plus"></i>
          </button>
          <div className="form-row">
            <input
              placeholder="Add a to-do.."
              className="form-control d-block green"
              onChange={evt => {
                this.updateInputValue(evt);
              }}
            />
          </div>
          {this.state.notComplete.map(function(ele) {
            return <Item key={ele} activity={ele} />;
          })}
          {/* here completed  */}
          {this.state.completedData.map(function(elem) {
            return <Completed key={elem} complete={elem} />;
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
